# Protato - File Documentation Index

Complete inventory of all Swift files in `Shared/` organized by module with documentation priority.

---

## 1. CORE RUNTIME (High Priority - Marketing Core)

| File | Lines | Purpose | Doc Priority |
|------|-------|---------|--------------|
| `SceneEditorCoordinator.swift` | 190 | Root coordinator, wiring all controllers, project snapshots | ⭐⭐⭐ Critical |
| `RealitySceneController.swift` | 546 | RealityKit scene, native playback, device management | ⭐⭐⭐ Critical |
| `DevicesController.swift` | 414 | Device registry, selection, model loading/swapping | ⭐⭐⭐ Critical |
| `Config.swift` | 94 | App constants, device catalog, model specs, RevenueCat keys | ⭐⭐ High |

---

## 2. TIMELINE & ANIMATION (High Priority - Key Differentiator)

| File | Lines | Purpose | Doc Priority |
|------|-------|---------|--------------|
| `TimelineController.swift` | 395 | Playhead, scrubbing, transform recording, block editing | ⭐⭐⭐ Critical |
| `TimelineController+BaseTracks.swift` | - | Base track operations | ⭐⭐ High |
| `TimelineController+Media.swift` | - | Media clip timeline ops | ⭐⭐ High |
| `TimelineController+Motion.swift` | - | Motion block timeline ops | ⭐⭐ High |
| `TimelineController+Support.swift` | - | Shared timeline helpers | ⭐ High |
| `DeviceAnimationTrack.swift` | - | Per-device keyframe track (blocks, media, base transforms) | ⭐⭐⭐ Critical |
| `DeviceAnimationBlock.swift` | - | Single motion block with transform + transitions | ⭐⭐ High |
| `DeviceTransformBinding.swift` | - | Pivot/bounds mapping for USDZ models | ⭐⭐ High |
| `DeviceTransformState.swift` | - | Position, rotation, scale, offset state | ⭐⭐ High |
| `DeviceMotionPreset.swift` | - | Pre-built animation presets | ⭐ High |
| `DeviceMotionTrackRow.swift` | - | Timeline row representation | ⭐ High |
| `TimelineActionHistory.swift` | - | Undo/redo stack for timeline edits | ⭐⭐ High |
| `TimelineComponents.swift` | - | Selection types, block/clip/default selections | ⭐ High |
| `TimelineGeometry.swift` | - | Layout calculations for timeline view | ⭐ High |
| `TimelinePanel.swift` | - | Main timeline UI container | ⭐ High |
| `TimelineEditorView.swift` | - | Full timeline editing interface | ⭐⭐ High |
| `TimelineResizeHandle.swift` | - | Drag handle for block resizing | ⭐ Medium |
| `ScrubbableField.swift` | - | Time input field component | ⭐ Medium |

---

## 3. OVERLAYS SYSTEM (High Priority - Visual Features)

| File | Lines | Purpose | Doc Priority |
|------|-------|---------|--------------|
| `OverlayController.swift` | 839 | Composition authoring, timeline evaluation, transactions | ⭐⭐⭐ Critical |
| `OverlayComposition.swift` | - | Serializable overlay project (layers + assets) | ⭐⭐⭐ Critical |
| `OverlayLayer.swift` | - | Single overlay with content, timing, transform, appearance | ⭐⭐⭐ Critical |
| `OverlayContentTypes.swift` | - | Text, Image, Shape, Sticker content enums | ⭐⭐ High |
| `OverlayAppearance.swift` | - | Shadow, blur, opacity, blend mode, depth group | ⭐⭐ High |
| `OverlayTiming.swift` | - | Start time, duration, timeline row | ⭐ High |
| `OverlayPropertyTrack.swift` | - | Per-property keyframe tracks (position, scale, rotation, opacity) | ⭐⭐ High |
| `OverlayTimelineTracks.swift` | - | Timeline row/block management | ⭐ High |
| `EvaluatedOverlay.swift` | - | Frame-evaluated overlay for rendering | ⭐⭐ High |
| `OverlayEffect.swift` / `OverlayEffectController.swift` | - | Global overlay effects (vignette, etc.) | ⭐ High |
| `OverlayVisualRenderer.swift` | - | SwiftUI/Metal overlay rendering | ⭐⭐ High |
| `OverlayPreviewView.swift` | - | Canvas preview of overlays | ⭐ High |

### Overlay Inspectors (Marketing: Show Customization Depth)
| File | Purpose | Doc Priority |
|------|---------|--------------|
| `TextOverlayInspectorView.swift` | Text styling, animation, font picker | ⭐⭐ High |
| `ImageOverlayInspectorView.swift` | Image transform, crop, opacity | ⭐⭐ High |
| `ShapeOverlayInspectorView.swift` | Shape type, fill, stroke, corners | ⭐⭐ High |
| `StickerOverlayInspectorView.swift` | Sticker management | ⭐ High |
| `OverlayItemInspectorView.swift` | Shared overlay properties | ⭐ High |
| `OverlayAppearanceInspectorView.swift` | Shadow, blur, blend mode | ⭐ High |

---

## 4. 3D SCENE: LIGHTING & BACKGROUNDS (High Priority - Visual Quality)

| File | Lines | Purpose | Doc Priority |
|------|-------|---------|--------------|
| `LightingController.swift` | 284 | 4-point rig, IBL skyboxes, modes (studio/dramatic/flat) | ⭐⭐⭐ Critical |
| `LightingDefines.swift` | - | Light box options, presets | ⭐ High |
| `LightingSettingsView.swift` | - | Lighting UI inspector | ⭐ High |
| `BackgroundController.swift` | - | Background management (solid/gradient/image/mesh) | ⭐⭐⭐ Critical |
| `BackgroundPattern.swift` | - | Mesh gradient, checkerboard, linear patterns | ⭐⭐ High |
| `BackgroundSettings.swift` | - | Background config serialization | ⭐⭐ High |
| `BackgroundType.swift` | - | Background type enum | ⭐ High |
| `BackgroundMeshSettingsView.swift` | - | Mesh gradient editor | ⭐ High |
| `BackgroundSettingsImageView.swift` | - | Image background settings | ⭐ High |
| `BackgroundSettingsGradientView.swift` | - | Gradient editor | ⭐ High |
| `BackgroundSettingsSolidView.swift` | - | Solid color picker | ⭐ High |
| `BackgroundSettingsNoneView.swift` | - | Transparent background | ⭐ Medium |
| `BackgroundRenderView.swift` | - | Background rendering | ⭐ High |
| `LinearGradientColorPicker.swift` | - | Gradient color UI | ⭐ High |
| `MeshGradientColorPicker.swift` | - | Mesh gradient UI | ⭐ High |
| `MeshPresets.swift` | - | Preset mesh gradients | ⭐ High |
| `LinearPresets.swift` | - | Preset linear gradients | ⭐ High |

---

## 5. DEVICE CUSTOMIZATION (Medium-High Priority)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `DeviceTransformController.swift` | Gesture handling, transform manipulation | ⭐⭐ High |
| `DeviceTransformSettingsView.swift` | Transform inspector UI | ⭐ High |
| `DevicePickerSheet.swift` | Device model picker | ⭐⭐ High |
| `DeviceScreenMaterialController.swift` | Screen material properties (reflection, glass) | ⭐⭐ High |
| `DeviceScreenMaterialSettingsView.swift` | Screen material UI | ⭐ High |
| `DeviceShadowPreviewView.swift` | Shadow preview in inspector | ⭐ High |
| `DeviceShadowProjector.swift` / `DeviceShadowRendering.swift` | Real-time shadow casting | ⭐⭐ High |
| `SceneDevicesSettingsView.swift` | Multi-device scene settings | ⭐ High |

---

## 6. MEDIA & SCREEN CONTENT (Medium Priority)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `MediaMaterialController.swift` | Applies video/images to device screens | ⭐⭐ High |
| `MediaClip.swift` | Media asset reference + trim | ⭐⭐ High |
| `MediaClipInspectorView.swift` | Media trim, loop, fit settings | ⭐ High |
| `MediaClipView.swift` | Media preview in timeline | ⭐ High |
| `MediaSceneRow.swift` | Timeline row for media clips | ⭐ High |
| `MediaAssetStore.swift` | Media asset management | ⭐ High |
| `VideoFrameReader.swift` / `ExportVideoFrameReader.swift` | Frame decoding for playback/export | ⭐⭐ High |

---

## 7. VIDEO EXPORT PIPELINE (High Priority - Output Feature)

| File | Lines | Purpose | Doc Priority |
|------|-------|---------|--------------|
| `VideoExportTypes.swift` | 163 | Export options, resolution, progress, request snapshot | ⭐⭐⭐ Critical |
| `VideoExportEncoder.swift` | - | HEVC encoding via VideoToolbox | ⭐⭐⭐ Critical |
| `VideoExportFrameRenderer.swift` | - | Per-frame RealityKit rendering | ⭐⭐⭐ Critical |
| `VideoExportMetalCompositor.swift` | - | Metal overlay + device compositing | ⭐⭐⭐ Critical |
| `VideoExportLayers.swift` | - | Layer composition for export | ⭐⭐ High |
| `VideoExportTimelineBaker.swift` | - | Pre-bakes all timeline decisions per frame | ⭐⭐⭐ Critical |
| `VideoExportShadowProjector.swift` | - | Export-quality shadows | ⭐⭐ High |
| `VideoExportShadowRenderer.swift` | - | Shadow rendering for export | ⭐⭐ High |
| `VideoExportPerformance.swift` | - | Performance monitoring | ⭐ High |
| `VideoExportShaders.metal` | - | Metal shaders for compositing | ⭐⭐ High |
| `SceneVideoExporter.swift` | - | High-level export orchestration | ⭐⭐⭐ Critical |
| `SceneImageExporter.swift` | - | Still image export | ⭐⭐ High |
| `SceneExportControlsView.swift` | - | Export settings UI | ⭐ High |

---

## 8. PROJECT PERSISTENCE (Medium Priority)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `RealityRenderProject.swift` | Complete project serialization | ⭐⭐⭐ Critical |
| `ProjectFileCommands.swift` | Save/load/open panel operations | ⭐⭐ High |
| `SceneFileOperations.swift` | File coordination, autosave | ⭐ High |
| `ProjectValidator.swift` | Project validation on load | ⭐⭐ High |

---

## 9. CAMERA & CANVAS (Medium Priority)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `CameraSettingsView.swift` | FOV, position controls | ⭐ High |
| `CanvasLayoutSettingsView.swift` | Canvas aspect ratio, safe areas | ⭐ High |
| `SceneOverlayHitTest.swift` | Canvas hit-testing for selection | ⭐⭐ High |
| `RealityPreviewView.swift` | Main RealityKit view | ⭐⭐ High |

---

## 10. AUTH, SUBSCRIPTIONS & MONETIZATION (Medium Priority - Business)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `SubscriptionController.swift` | RevenueCat subscription management | ⭐⭐ High |
| `FreeUsageController.swift` | Free tier credits, limits | ⭐⭐ High |
| `PayWallSheet.swift` / `PayWallViewModel.swift` | Paywall UI + logic | ⭐⭐ High |
| `PlanView.swift` | Pricing plan display | ⭐ High |
| `ProCTAView.swift` | Upgrade call-to-action | ⭐ High |
| `PackageSelectionSheet.swift` | Subscription package picker | ⭐ High |
| `UserAuthController.swift` | Sign in with Apple, user state | ⭐⭐ High |
| `LoginSheet.swift` / `AccountSheet.swift` | Auth UI | ⭐ High |
| `SignInWithAppleButtonView.swift` | Apple sign-in button | ⭐ Medium |
| `KeychainHelper.swift` | Secure token storage | ⭐ Medium |
| `FAQView.swift` | Help/FAQ | ⭐ Low |

---

## 11. UI COMPONENTS & UTILITIES (Low-Medium Priority)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `InspectorSection.swift` | Collapsible inspector sections | ⭐ Medium |
| `SettingsRow.swift` | Settings row component | ⭐ Medium |
| `TransitionSettingsPopover.swift` | Transition curve picker | ⭐ Medium |
| `ToastService.swift` | In-app notifications | ⭐ Medium |
| `FontPickerView.swift` / `GenmojiPicker.swift` | Font/emoji pickers | ⭐ Medium |
| `CustomPicker.swift` / `SolidColorPicker.swift` | Color pickers | ⭐ Medium |
| `LinearColorPicker.swift` / `MeshGradientColorPicker.swift` | Gradient pickers | ⭐ Medium |
| `Color.swift` | Color utilities | ⭐ Low |
| `CheckerboardPattern.swift` | Transparency checkerboard | ⭐ Low |
| `MobileInputEnvironment.swift` / `MobileSheetContext.swift` | iOS sheet handling | ⭐ Medium |

---

## 12. MARKETING DOCUMENTATION (User Guides)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `marketing/FEATURE_HIGHLIGHTS.md` | High-level overview & use cases | ⭐⭐ High |
| `marketing/DEVICE_SELECTION_GUIDE.md` | Device picking & color customization | ⭐⭐ High |
| `marketing/ANIMATION_WORKFLOW.md` | Motion block creation & timeline editing | ⭐⭐⭐ Critical |
| `marketing/TIMELINE_EDITOR_GUIDE.md` | Timeline editor interface, tools, and workflow | ⭐⭐⭐ Critical |
| `marketing/SCREEN_CONTENT_GUIDE.md` | Adding videos/images to device screens | ⭐⭐⭐ Critical |
| `marketing/LIGHTING_BACKGROUND_GUIDE.md` | Lighting rigs & background customization | ⭐⭐ High |
| `marketing/OVERLAYS_GUIDE.md` | Text, images, shapes, stickers with animation | ⭐⭐⭐ Critical |
| `marketing/EXPORT_WORKFLOW.md` | Video/image export process & UI settings | ⭐⭐⭐ Critical |
| `marketing/TECH_SPECS.md` | Technical specifications for press kits | ⭐⭐ High |
| `marketing/DEVICE_CATALOG.md` | Device model references & specs | ⭐⭐ High |
| `marketing/EXPORT_CAPABILITIES.md` | Export format capabilities reference | ⭐⭐ High |

---

## 13. ARCHITECTURE & INDEX (Marketing Reference)

| File | Purpose | Doc Priority |
|------|---------|--------------|
| `marketing/ARCHITECTURE_OVERVIEW.md` | System architecture & data flow overview | ⭐⭐ High |
| `marketing/FILE_DOCUMENTATION_INDEX.md` | Complete inventory of all Swift files organized by module | ⭐⭐ High |

---

## 14. ASSETS & RESOURCES (Reference Only)

| File | Type | Notes |
|------|------|-------|
| `*.usdc` / `*.usdz` | 3D Models | 17 device models (iPhone 15/17, iPad, MacBook) |
| `studio01-09.skybox/` | Skyboxes | 9 IBL environments |
| `AppIcon.icon/` | App Icon | |
| `Assets.xcassets/` | Image assets | |
| `lib/` | Utility lib | CustomPicker, SolidColorPicker, View |

---

## Documentation Output Structure

```
docs/
├── modules/
│   ├── 01-core-runtime.md
│   ├── 02-timeline-animation.md
│   ├── 03-overlays-system.md
│   ├── 04-lighting-backgrounds.md
│   ├── 05-device-customization.md
│   ├── 06-media-screen-content.md
│   ├── 07-video-export.md
│   ├── 08-project-persistence.md
│   ├── 09-camera-canvas.md
│   ├── 10-auth-monetization.md
│   └── 11-ui-components.md
├── marketing/
│   ├── ARCHITECTURE_OVERVIEW.md          # System architecture & data flow overview
│   ├── FILE_DOCUMENTATION_INDEX.md       # Complete file documentation index
│   ├── FEATURE_HIGHLIGHTS.md         # Key features for landing page
│   ├── TECH_SPECS.md                 # Technical specifications
│   ├── DEVICE_CATALOG.md             # All supported device models
│   ├── EXPORT_CAPABILITIES.md        # Video/image export specs
│   ├── DEVICE_SELECTION_GUIDE.md     # Device picking & color customization
│   ├── ANIMATION_WORKFLOW.md         # Motion block creation & timeline editing
│   ├── TIMELINE_EDITOR_GUIDE.md      # Timeline editor interface, tools, and workflow
│   ├── SCREEN_CONTENT_GUIDE.md       # Adding videos/images to device screens
│   ├── LIGHTING_BACKGROUND_GUIDE.md  # Lighting rigs & background customization
│   ├── OVERLAYS_GUIDE.md             # Text, images, shapes, stickers with animation
│   └── EXPORT_WORKFLOW.md            # Video/image export process & UI settings
└── api/
    └── CONTROLLER_API_REFERENCE.md   # Public APIs for each controller
```