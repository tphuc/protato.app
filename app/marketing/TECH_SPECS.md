# Protato - Technical Specifications

Detailed technical specifications for press kits, developer docs, and technical marketing.

---

## System Requirements

| Platform | Minimum | Recommended |
|----------|---------|-------------|
| **macOS** | 14.0 (Sonoma) | 15.0 (Sequoia), Apple Silicon |
| **iOS/iPadOS** | 17.0 | 18.0, Apple Silicon (A14/M1+) |
| **RAM** | 4 GB | 8 GB+ |
| **Storage** | 500 MB app + project space | 2 GB+ |
| **GPU** | Metal 3 compatible | Apple GPU (M-series / A14+) |

---

## Supported Device Models (22 Total)

### iPhone 17 Series (7)
| Model | Tag | Screen | Dimensions (mm) | Corner Radius | Weight |
|-------|-----|--------|-----------------|---------------|--------|
| iPhone 17 ProMax Cosmic Orange | `ip17promaxorange` | 6.9" | 76.7 × 159.9 | 12mm | 221g |
| iPhone 17 ProMax Deep Blue | `ip17promaxblue` | 6.9" | 76.7 × 159.9 | 12mm | 221g |
| iPhone 17 ProMax Silver | `ip17promaxsilver` | 6.9" | 76.7 × 159.9 | 12mm | 221g |
| iPhone 17 White | `ip17white` | 6.3" | 72.0 × 149.0 | 14mm | 187g |
| iPhone 17 Black | `ip17black` | 6.3" | 72.0 × 149.0 | 14mm | 187g |
| iPhone 17 Mist Blue | `ip17blue` | 6.3" | 72.0 × 149.0 | 14mm | 187g |
| iPhone 17 Lavender | `ip17lavender` | 6.3" | 72.0 × 149.0 | 14mm | 187g |
| iPhone 17 Sage | `ip17sage` | 6.3" | 72.0 × 149.0 | 14mm | 187g |

### iPhone 17 Air Series (4)
| Model | Tag | Screen | Dimensions (mm) | Corner Radius |
|-------|-----|--------|-----------------|---------------|
| iPhone 17 Air Cloud White | `ip17airwhite` | 6.6" | 74.7 × 156.8 | 11.5mm |
| iPhone 17 Air Light Gold | `ip17airgold` | 6.6" | 74.7 × 156.8 | 11.5mm |
| iPhone 17 Air Sky Blue | `ip17airskyblue` | 6.6" | 74.7 × 156.8 | 11.5mm |
| iPhone 17 Air Space Black | `ip17airblack` | 6.6" | 74.7 × 156.8 | 11.5mm |

### iPhone 15 Pro Max Series (4)
| Model | Tag | Screen | Dimensions (mm) | Corner Radius |
|-------|-----|--------|-----------------|---------------|
| White Titanium | `ip15promaxwhite` | 6.7" | 77.0 × 159.4 | 18mm |
| Black Titanium | `ip15promaxblack` | 6.7" | 77.0 × 159.4 | 18mm |
| Natural Titanium | `ip15promaxnatural` | 6.7" | 77.0 × 159.4 | 18mm |
| Blue Titanium | `ip15promaxblue` | 6.7" | 77.0 × 159.4 | 18mm |

### iPad & Mac (2)
| Model | Tag | Screen | Dimensions (mm) | Corner Radius | Special |
|-------|-----|--------|-----------------|---------------|---------|
| iPad A16 Silver | `ipada16silver` | 11" | 179.8 × 250.6 | 18mm | — |
| MacBook Pro 14 Space Black | `macpro14black` | 14.2" | 300.0 × 221.2 | 18mm | Pitch -19.5°, offset |

---

## 3D Model Specifications

| Property | Value |
|----------|-------|
| **Format** | USDZ (Universal Scene Description) |
| **Coordinate System** | Right-handed, Y-up, meters |
| **Pivot** | Visual center (auto-corrected from USDZ origin) |
| **Materials** | PhysicallyBased (screen: custom glass/reflection) |
| **Textures** | Embedded in USDZ (albedo, normal, roughness, metalness) |
| **Screen Mesh** | Separate named mesh for material injection |
| **Collision** | Simplified convex hull for raycasting |

---

## Animation System

| Property | Specification |
|----------|---------------|
| **Playback Engine** | RealityKit `AnimationResource` + `AnimationPlaybackController` |
| **Frame Rate** | Display-native (60/120 Hz via `CADisplayLink`) |
| **Timeline Resolution** | Configurable (default 30 fps, up to 60) |
| **Max Timeline Duration** | Unlimited (practical: 60s+ at 30fps) |
| **Keyframe Interpolation** | Linear, Ease In, Ease Out, Ease In-Out, Spring |
| **Motion Blocks** | Transform + transition in/out + curve |
| **Base Transforms** | Per-track resting pose between blocks |
| **Media Sync** | Frame-accurate (sampled per display link) |
| **Undo History** | 20 entries (configurable) |

---

## Lighting System

| Component | Specification |
|-----------|---------------|
| **Directional Lights** | 4 (Key, Fill, Rim, Back) |
| **Light Type** | `DirectionalLight` (infinite, no falloff) |
| **Color Temperature** | Key: 5500K, Fill: 6500K, Rim: 6000K, Back: 6000K |
| **IBL (Skyboxes)** | 9 environments, `EnvironmentResource` |
| **IBL Format** | Cubemap .skybox (prefiltered) |
| **Exposure** | Global multiplier (0.1–10.0) |
| **Intensity Range** | 0–2000 per light |
| **Shadow** | Projected soft shadow (screen-space) |
| **Export Lighting** | Isolated anchor with copied lights + IBL |

---

## Background System

| Type | Features |
|------|----------|
| **None** | Transparent (alpha export for images) |
| **Solid** | Any sRGB color, opacity |
| **Linear Gradient** | Multi-stop, angle, 20+ presets |
| **Mesh Gradient** | 4×4 control points, 12 presets, interactive |
| **Image** | Fit/Fill/Stretch, opacity, blur, any resolution |

---

## Overlay System

| Property | Specification |
|----------|---------------|
| **Content Types** | Text, Image, Shape, Sticker |
| **Max Layers** | Unlimited (practical: 50+) |
| **Depth Groups** | Behind Devices / In Front of Devices |
| **Timeline Lanes** | Auto-managed per content type |
| **Keyframe Properties** | Position X/Y, Scale X/Y, Rotation, Opacity |
| **Interpolation** | Same curves as device animation |
| **Text Animation** | Per-character transform at frame time |
| **Blend Modes** | Normal, Multiply, Screen, Overlay |
| **Shadow** | Color, offset, blur, opacity |
| **Blur** | Background blur (0–50px) |

---

## Video Export

| Parameter | Values |
|-----------|--------|
| **Codec** | HEVC (H.265) |
| **Profile** | Main / High |
| **Container** | MP4 (ISO BMFF) |
| **Resolutions** | 720p, 1080p, 1440p (short edge) |
| **Frame Rates** | 24, 30, 60 fps |
| **Bitrate** | 6–28 Mbps (adaptive: resolution × fps) |
| **Keyframe Interval** | 1 second |
| **Color Space** | Rec.709 / sRGB |
| **Color Primaries** | BT.709 |
| **Transfer** | BT.709 |
| **Audio** | Not included (mockup-focused) |
| **Alpha Channel** | Images only (PNG/HEIC), not video |

### Export Pipeline
1. **Capture** — Immutable `VideoExportRequest` snapshot
2. **Bake** — `VideoExportTimelineBaker` → `[BakedVideoFrame]`
   - Pre-computes all transforms, media times, overlay states
   - Decodes all media frames at exact timestamps
3. **Render** — `VideoExportMetalCompositor` per frame
   - Offscreen RealityKit render target
   - 3D scene → behind overlays → device screens → front overlays → effects
4. **Encode** — `VideoExportEncoder` (VideoToolbox)
   - Streams `MTLTexture` frames to HEVC encoder
   - Progress callback per frame

---

## Project File Format

| Property | Value |
|----------|-------|
| **Extension** | `.protato` |
| **Format** | JSON (UTF-8) |
| **Schema Version** | 1 (in manifest) |
| **Models** | Referenced by tag (not embedded) |
| **Media** | Referenced by file URL (relative or absolute) |
| **Overlays** | Embedded (text, shapes) or referenced (images/stickers) |
| **Compression** | None (human-readable) |

---

## Performance Benchmarks (Apple Silicon)

| Scene Complexity | Playback FPS | Export Speed (1080p30) |
|------------------|--------------|------------------------|
| 1 device, no overlays | 120 | 3.2x realtime |
| 3 devices, 5 overlays | 60–90 | 1.8x realtime |
| 5 devices, 20 overlays, media | 45–60 | 1.2x realtime |
| 10 devices, complex scene | 30–45 | 0.9x realtime |

---

## Accessibility

- VoiceOver labels on all controls
- Dynamic Type support
- High contrast mode compatible
- Reduce motion respected (disables spring animations)
- Keyboard navigation (macOS)
- Switch Control compatible (iOS)

---

## Privacy

- **No analytics** — No telemetry, no tracking
- **Local-first** — Projects stored on device/iCloud only
- **RevenueCat** — Only for subscription validation (anonymous ID)
- **Sign in with Apple** — Optional, for cross-device sync + free credits
- **Media** — Never uploaded, processed locally