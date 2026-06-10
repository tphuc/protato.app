# Protato — macOS Product Documentation

> **App Store ID**: `6761610488`
> **Tech Stack**: RealityKit · SwiftUI · Metal · AVFoundation · RevenueCat · CloudKit

---

## 1. Overview

Protato is a cross-platform (iOS + macOS) 3D device mockup application. It lets users position, light, animate, and export photorealistic iPhone/iPad/MacBook models in a real-time rendered 3D scene — designed for creating App Store screenshots, marketing materials, and product showcase videos without traditional 3D software.

---

## 2. macOS UI Layout

The macOS interface is built around a 3-column `NavigationSplitView`, offering a persistent left sidebar, a central canvas with timeline, and a right inspector panel.

### 2.1 Left Sidebar — Editor Settings

| Section | Contents |
|---------|----------|
| **Aspect Ratio** | `RatioPicker` — grid of 10 presets (1:1, 3:4, 4:3, 4:5, 5:4, 9:16, 9:19.5, 2:3, 3:2, 16:9) |
| **Field of View** | `FieldOfViewControl` — slider (10°–20°, default 15°) |
| **Background** | `BackgroundSettings` — type selector (None/Solid/Gradient/Mesh/Image), color/gradient/mesh pickers, image import |
| **Lighting** | `LightingSettingsView` — mode picker (Studio/Dramatic/Flat), per-light intensity sliders, global exposure, IBL intensity |
| **Scene Presets** | `ScenePresetSettings` — load/save full scene configurations |

Styled with `.ultraThinMaterial` background. Scrollable `LazyVStack` layout with `sectionStyle()` grouping.

### 2.2 Center Canvas — 3D Preview + Timeline

The canvas area renders the scene in a layered Z-stack:

1. **Background** — rendered as a SwiftUI view (solid/gradient/mesh/image) clipped to aspect ratio
2. **Device Shadow** — `DeviceShadowRenderView` draws projected device outlines with configurable Gaussian blur (radius + opacity)
3. **Behind-Phone Text Overlays** — text items placed behind the device in 3D space
4. **RealityView** — the core 3D rendering surface containing:
   - `PerspectiveCamera` (orbit-controlled)
   - 7-light directional rig + IBL environment
   - All device `ModelEntity` instances with PBR materials
   - Anti-aliasing: 4x MSAA, motion blur disabled
5. **Front-of-Phone Text Overlays** — text items composited in front of devices
6. **Interaction Layer** — either `TextOverlayInteractionLayer` (text edit mode) or `DevicesSelectionOverlay` (device mode) with projected device outlines and tap-to-select
7. **Overlay Grid** — toggleable `OverlayGrid` (3x3 design grid) for composition alignment

**Canvas behavior**:
- Aspect-fit scaling: computed from `controller.aspectRatio` vs available geometry
- Rounded rectangle clip (radius 10) with subtle border stroke
- Drop shadow (20pt radius, 10pt Y offset, 10% black)
- Gesture modifiers: drag + rotation + magnification for device transform; `ScrollGestureView` for 2-finger pan

**Timeline**:
- Appears at the bottom of the canvas when `isAnimationMode == true`
- Animated with `.spring()` transition, slides in from bottom edge
- Contains: `TimelineHeader` (add block/clip, undo/redo, zoom controls), `TimeRulerView` (adaptive ticks), vertically scrollable track list with `TimelineSidebar` (device labels), `PlayheadView` (orange draggable playhead), per-device `AnimationBlock` tracks + `MediaClip` bars + `TextAnimationTrackView`

**Export Overlay**:
- When `animationController.isExporting == true`, a full-screen modal dims the canvas (80% black) and shows a linear `ProgressView` with percentage and "Please do not close" warning
- `.ultraThinMaterial` background, rounded corners, orange accent

### 2.3 Right Inspector — Mode-Specific Controls

Topped by a `CustomSegmentedPicker` toggling between two modes:

**Devices Mode** (`.phone`):
| Section | View | Contents |
|---------|------|----------|
| Device List | `DevicesSettingsView` | device grid picker, add/remove, multi-device management |
| Transform | `PhoneCameraSettingsView` | sliders for Scale (0.5–3.0), Yaw (±2π), Pitch (±2π), Roll (±2π), Offset X/Y/Z |
| Material | `MaterialSettingsView` | PBR slider array (metallic, roughness, emissive, clearcoat, clearcoat roughness, specular) + 3 presets |
| Shadow | `DeviceShadowSettingsView` | opacity (0–1), radius (0–50), enable/disable toggle |

**Text Mode** (`.text`):
| Section | View | Contents |
|---------|------|----------|
| Text Items | `TextOverlaySettingsView` | add/duplicate/delete text items, item list |
| Text Editor | `TextOverlayEditView` | full editing panel with: inline text field, presets panel, color panel (solid + multi-stop gradient), stroke panel (width + color), style panel (font family/weight/size/alignment/tracking), layout panel (X/Y position, scale, rotation, opacity, fade in/out timing, behind/front-of-phone placement) |

### 2.4 Toolbar

| Item | Action |
|------|--------|
| **Add Text** | Inserts a `TextOverlayItem` at current timeline time, auto-switches to text mode, opens inspector |
| **Import Media** | `ScreenshotLoaderButton` — opens file picker or Photos library to import screenshots or videos as device screen content |
| **Grid Toggle** | Toggles `showOverlayGrid` — icon turns orange when active |
| **Photo/Animation Toggle** | Segmented picker — switching to animation mode persists current transform, optionally reduces to single device, captures default states for all devices |
| **Settings** | `SettingsLink` — opens macOS system Preferences window |
| **Export** | `ExportImageButtonGroup` — bordered prominent button, opens `ExportSettingsView` popover with format/scale/resolution pickers, credit display, and Sign in with Apple upsell |

---

## 3. Core Feature Catalog

### 3.1 Camera System

- **3D Orbit Camera** (`PhoneCameraController`) — orbits around device target
- **Gestures**: drag → yaw/pitch rotation; pinch → zoom (distance + FOV-adaptive limits); 2-finger rotate → roll; 2-finger scroll → target offset pan
- **FOV**: adjustable 10°–20° (default 15°)
- **Inertia**: momentum-based deceleration after drag ends
- **Distance tracking**: dynamic zoom limits adapt to current FOV
- **Animation integration**: `isDrivenByAnimation` prevents feedback loops during playback

### 3.2 Device Models

**18 device variants** in the model library:

| Series | Colorways |
|--------|-----------|
| iPhone 15 Pro Max | Black, Natural, White |
| iPhone 17 | Black, White, Mist Blue, Lavender, Sage |
| iPhone 17 Air | Cloud White, Light Gold, Sky Blue, Space Black |
| iPhone 17 Pro Max | Cosmic Orange, Deep Blue, Silver |
| iPad A16 | Silver |
| MacBook Pro 14" | Space Black |

- Models are USDZ files with per-model `DeviceModelPlaneSize` config (width, height, corner radius, offset, pitch)
- Multi-device support: add/remove/select devices; auto-spacing on add; `reduceToSingleDevice()` for animation mode
- Entity lifecycle: async loading, sync/remove from `RealityViewCameraContent`, per-entity anchor for screen content

### 3.3 Device Transform

Per-device 3D transform controlled by `DeviceTransformController`:

| Property | Range | Gesture |
|----------|-------|---------|
| Scale | 0.5–3.0 | Magnification pinch |
| Yaw | ±2π rad | Horizontal drag (intent-locked after 5 samples) |
| Pitch | ±2π rad | Vertical drag (intent-locked) |
| Roll | ±2π rad | 2-finger rotation |
| Offset X | ±0.1 m | — |
| Offset Y | ±0.1 m | — |
| Offset Z | ±0.3 m | — |

- **Intent locking**: drag gesture detects horizontal/vertical/free direction after 5 samples
- **State capture**: `captureState()` → `TransformState` for animation keyframing
- **Pan**: `applyPan(dx:dy:)` moves along camera right/up axes
- **DeviceTransformApplicator**: applies `TransformState` to a `ModelEntity` with proper scale, position, and orientation

### 3.4 Screen Content

- **Static images**: PNG, JPG, HEIC — applied as `TextureResource` to device screen
- **Video**: MP4, MOV — `AVPlayer` with `AVPlayerItemVideoOutput` for frame-accurate extraction
- **Live PBR texture**: video frames processed via `CIImage` → downsampled to 1440px → `TextureResource` (background queue)
- **Material properties apply** to both static and video content

### 3.5 PBR Material System

Controlled by `MaterialController` per device:

| Property | Range | Default |
|----------|-------|---------|
| Metallic | 0–1 | varies by preset |
| Roughness | 0–1 | varies by preset |
| Emissive Intensity | 0–2 | 1.0 |
| Clearcoat | 0–1 | varies |
| Clearcoat Roughness | 0–1 | varies |
| Specular | 0–1 | 0.0 |

**3 built-in presets**: Glossy/Metallic, Matte, Default

### 3.6 Lighting System

Controlled by `LightingController`:

- **7 directional lights**: Key (warm), Fill (cool), Rim (neutral), Back (white) × 4 (top-left, top-right, bottom-left, bottom-right)
- **3 presets**:

| Mode | Key | Fill | Rim | Back |
|------|-----|------|-----|------|
| Studio | 800 | 600 | 1000 | 500 |
| Dramatic | 1200 | 500 | 800 | 2000 |
| Flat | 500 | 500 | 100 | 100 |

- **Global exposure**: 0.2–2.0 multiplier
- **Per-light intensity**: 0–10000 range
- **Image-Based Lighting**: "studio02" environment resource for realistic reflections
- **IBL intensity**: independent slider
- **Export**: `makeIsolatedLightingAnchor()` creates standalone lighting copy for offscreen rendering

### 3.7 Background System

5 types via `BackgroundConfig`:

| Type | Configuration |
|------|---------------|
| None | Checkerboard pattern preview; transparent PNG export |
| Solid | Single color picker |
| Linear Gradient | Multi-stop gradient with positioning; 80+ built-in presets |
| Mesh | Mesh gradient with configurable points; 30+ built-in presets |
| Image | Custom image from file (NSImage), or URL-based AsyncImage fallback |

- Dual render paths: `backgroundView` (live preview) and `offscreenRenderBackgroundView` (export)

### 3.8 Animation Timeline

Powered by `AnimationController` (1200+ lines):

**Keyframe blocks**:
- Capture camera + device transform state at any timeline position
- Adjustable start/end transition duration (up to 6s)
- 5 easing curves: Linear, Ease In, Ease Out, Ease In/Out, Smoothstep
- Move, resize, delete blocks
- Live recording: manual device/camera changes are throttled and recorded into active blocks

**Media clips**:
- Video segments on per-device tracks
- Trim, split, resize with ripple editing (downstream clips shift automatically)
- Per-clip speed control (0.2×–4.0×)

**Timeline UI**:
- Time ruler with adaptive major/minor ticks
- Timeline zoom: 0.2×–2.0×
- Track heights: device tracks (36pt subtrack × 2 + 2pt spacing), collapsible text animation track
- Playhead: orange, draggable, frame-accurate
- 5-level undo/redo via `TimelineActionHistory`

**Playback**:
- Toggle play/pause with timer
- Frame-accurate seek
- Applies all track evaluations at `currentTime` including device transforms and video sync

### 3.9 Text Overlay System

Managed by `TextOverlayController` with Metal-accelerated rendering:

- **Multiple items**: add, duplicate, delete, reorder (z-order)
- **Placement**: behind phone or in front of phone
- **Font**: 4 families (System, Rounded, Serif, Monospaced), 9 weights (Ultra Light to Black)
- **Style**: bold, italic, tracking, line spacing, alignment (Leading/Center/Trailing)
- **Fill**: solid color or multi-stop linear gradient
- **Stroke**: configurable width + color
- **Transform**: normalized X/Y position (0–1), scale (0.2–4.0), rotation (−180°–180°), opacity (0–1)
- **Animation**: per-item fade in/out with start time, duration, and easing curve
- **Rendering**: Metal glyph cache (`TextOverlayGlyphCache`) + compute shader compositing (`TextOverlayMetalCompositor`)
- **Timeline sync**: `TextAnimationTrackView` shows each item's timeline span; drag to reposition/trim

### 3.10 Shadow System

Controlled by `DeviceShadowSettings`:

| Property | Default |
|----------|---------|
| Opacity | 0.45 |
| Radius | 24.0 |
| Disabled | false |

- Rendered via `DeviceShadowRenderView` which:
  1. Projects device corners from 3D to screen space
  2. Fills polygon with black at configured opacity (Metal vertex/fragment shaders)
  3. Applies separable Gaussian blur (horizontal + vertical Metal compute shaders)

### 3.11 Export — Image

`ImageExportController` — still image compositing pipeline:

- **Formats**: PNG (lossless, supports transparency), JPEG
- **Scale**: 1×, 2×, 3× (effective resolution up to ~4K)
- **Pipeline**: Background → Shadow → Behind-Text → Device render → Front-Text
  1. RealityKit snapshot at `512×512/aspectRatio × scale`
  2. Text overlays rendered as CGImage
  3. Background rendered via `ImageRenderer`
  4. Metal compute composite: `compositeToBGRA` shader
  5. Save via NSSavePanel (macOS)

### 3.12 Export — Video

`VideoExportController` — animated sequence to video:

- **Resolutions**: 720p, 1080p, 1440p
- **Codec**: H.264 or HEVC (via AVAssetWriter)
- **Pipeline**:
  1. Bake all animation frames via `AnimationController.bakeFramesRender()`
  2. Build isolated RealityKit renderer with camera + devices + background
  3. Per-device `SequentialVideoReader` extracts video frames at baked timestamps → `LowLevelTexture`
  4. Frame loop: read video → blit texture → apply baked transform → render shadow (GPU polygon + Gaussian blur) → RealityKit render → Metal composite → encode via `VideoEncoder`
  5. Finalize and present file

### 3.13 Scene Presets & Session Management

**PresetManager**:
- Auto-save every 60s to UserDefaults
- Restores last session on app launch
- Saves final state on `willTerminateNotification`
- Manual export/import as JSON files
- Preset includes: camera FOV, position, yaw/pitch/roll, all device transforms, materials, aspect ratio, lighting state

**ScenePresetController**:
- Loads built-in presets from `presets.json` in bundle
- Filterable by aspect ratio
- Applies full scene configuration (camera + devices + transform + lighting)

### 3.14 Subscription & Monetization

| Tier | Limit |
|------|-------|
| Free | 5 export credits (anonymous, stored in Keychain) |
| Pro | Unlimited exports (RevenueCat entitlement) |

- **Sign in with Apple** → RevenueCat user linking, CloudKit credit sync
- **3-day offline grace**: Pro access continues offline
- **Network monitoring**: auto-refresh subscription on reconnect
- **Credit rollback**: CloudKit transaction on failed export
- **Account deletion**: wipes all credits to 0

---

## 4. Gesture System

| Gesture | Camera Mode | Device Mode |
|---------|-------------|-------------|
| Drag (1 finger) | Orbit yaw/pitch | Device drag with intent locking |
| Pinch/Magnify | Zoom (distance) | Device scale |
| Rotate (2 fingers) | Camera roll | Device roll |
| Scroll/Pan (2 fingers) | Target offset | Device offset pan |

- Gestures are disabled conditionally: device transform gestures are suppressed in text interaction mode
- `deviceTransform.isInteracting` prevents simultaneous conflicts

---

## 5. Key Architecture Patterns

| Pattern | Usage |
|---------|-------|
| `@Observable` / `@Bindable` | All controllers use modern Swift Observation (iOS 17+/macOS 14+) |
| `Shared/` layer | All business logic + controllers + models are cross-platform; only UI views are platform-specific |
| RealityKit + SwiftUI bridge | `RealityView` wraps the 3D scene; controllers manage entities imperatively within `update` closures |
| Metal compute shaders | Compositing (5-layer), shadow blur (separable Gaussian), text overlay rendering |
| AVFoundation video pipeline | `AVPlayerItemVideoOutput` for per-frame extraction; `SequentialVideoReader` for export |
| RevenueCat + StoreKit | Subscription entitlements and product offerings |
| CloudKit + Keychain | Cross-device credit sync + anonymous offline storage |

---

## 6. Preset Aspect Ratios

| Label | Ratio (W:H) |
|-------|-------------|
| 1:1 | 1.0 |
| 3:4 | 0.75 |
| 4:3 | 1.333 |
| 4:5 | 0.8 |
| 5:4 | 1.25 |
| 9:16 | 0.5625 |
| 9:19.5 | 0.4615 |
| 2:3 | 0.666 |
| 3:2 | 1.5 |
| 16:9 | 1.778 |

---

## 7. File Reference (macOS Views)

| File | Purpose |
|------|---------|
| `ProtatoMacOS/ProtatoApp.swift` | `@main` entry, `WindowGroup` + `Settings` scene |
| `ProtatoMacOS/ContentView.swift` | Wraps `PhoneRealityView` in `modelContext` |
| `ProtatoMacOS/PhoneRealityView.swift` | Main editor — 3-column layout, all controller orchestration |
| `ProtatoMacOS/ExportImageButtonGroup.swift` | Toolbar export button with popover settings |
| `ProtatoMacOS/MaterialSettingsView.swift` | PBR material sliders + presets |
| `ProtatoMacOS/PhoneModelSelector.swift` | Horizontal device model picker |
| `ProtatoMacOS/RatioPicker.swift` | Aspect ratio grid picker |
| `ProtatoMacOS/FieldOfViewControl.swift` | Camera FOV slider |
| `ProtatoMacOS/TimeRulerView.swift` | Timeline ruler with adaptive ticks |
| `ProtatoMacOS/ScrollGestureView.swift` | Pan scroll gesture overlay |
| `ProtatoMacOS/UserSettingsSheet.swift` | Account/subscription/support sheet |
