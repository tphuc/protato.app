# Protato - Architecture Overview

Protato is a native macOS/iOS 3D mockup creation app for creating professional device mockups with animations, overlays, and video export.

## Core Architecture

### Scene Composition (Single Source of Truth)
```
SceneEditorCoordinator (Root Coordinator)
├── RealitySceneController          # RealityKit scene + playback runtime
├── DevicesController               # Device registry & selection
├── OverlayController               # Composition-level overlays (text, images, shapes, stickers)
├── TimelineController              # Timeline editing & playhead control
├── LightingController              # 4-point studio lighting + IBL skyboxes
├── BackgroundController            # Canvas backgrounds (solid, gradient, image, mesh)
├── MediaMaterialController         # Device screen media playback
├── DeviceTransformController       # Gesture & inspector transform handling
├── SceneSelectionManager           # Unified selection (device | overlay)
├── TimelineActionHistory           # Undo/redo for timeline edits
└── SceneOverlayHitTest             # Canvas hit-testing for selection
```

### Data Flow
- **Playback**: RealitySceneController owns per-frame RealityKit animation (native speed)
- **Editing**: Controllers modify tracks/bindings → SceneController recompiles on commit
- **Export**: VideoExportRequest captures complete scene snapshot → Metal compositor → HEVC encoder

---

## Module Categories

| Category | Modules | Purpose |
|----------|---------|---------|
| **Core Runtime** | `RealitySceneController`, `DevicesController`, `SceneEditorCoordinator` | Scene graph, device lifecycle, playback |
| **Timeline & Animation** | `TimelineController`, `DeviceAnimationTrack`, `TimelineActionHistory` | Keyframe editing, playback control, undo |
| **Overlays** | `OverlayController`, `OverlayLayer`, `OverlayComposition`, `OverlayPropertyTrack` | Text, images, shapes, stickers with keyframes |
| **3D Scene** | `LightingController`, `BackgroundController`, `DeviceShadowRendering` | Studio lighting, backgrounds, shadows |
| **Media** | `MediaMaterialController`, `MediaClip`, `VideoFrameReader` | Screen content playback on devices |
| **Export** | `VideoExport*`, `SceneImageExporter`, `SceneVideoExporter` | HEVC video + image export pipeline |
| **UI/Inspectors** | `*InspectorView`, `*SettingsView`, `TimelineEditorView` | SwiftUI inspectors & editors |
| **Persistence** | `RealityRenderProject`, `ProjectFileCommands`, `SceneFileOperations` | Project save/load + validation |
| **Auth/Monetization** | `SubscriptionController`, `FreeUsageController`, `PayWall*` | RevenueCat subscriptions, free credits |

---

## Key Design Patterns

1. **Observable @MainActor Controllers** - All state on main actor, SwiftUI observes directly
2. **Separation of Authoring vs Playback** - Tracks edited in SwiftUI, compiled to RealityKit AnimationResource
3. **Transaction-Based Editing** - Gestures preview live, commit once on end (prevents recompilation spam)
4. **Selection Manager** - Single source of truth for device/overlay selection
5. **Project Snapshots** - Complete serializable scene state for save/load/export