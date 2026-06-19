# Scene Guide for Protato

This is the entry point for all scene-level documentation. Each major module has its own dedicated guide.

## Core Scene Guides

| Guide | Description |
|---|---|
| [Camera Guide](user-camera-guide.md) | Orbiting, zooming, FOV, aspect ratios, framing the shot |
| [Posing Guide](user-posing-guide.md) | Device transform — scale, rotation, position, Offset Z, gestures |
| [Lighting Guide](user-lighting-guide.md) | 4-point lighting rig, IBL, exposure, modes (studio/dramatic/flat) |
| [Background Guide](user-background-guide.md) | Solid, gradient, mesh gradient, image, transparent backgrounds |
| [Lighting Guide](user-lighting-guide.md) | 4-point lighting rig, IBL, exposure, modes, device shadows |
| [Text Overlay Guide](user-text-overlay-guide.md) | Adding and styling text, behind/in front of device, animation |
| [Scene Presets Guide](user-presets-guide.md) | Auto-save, scene presets, session restore, preset file format |
| [Export Guide](user-export-guide.md) | Image export (PNG/JPEG), video export (MP4), resolution, layers |
| [Interaction Modes Guide](user-interaction-modes-guide.md) | Devices vs Text mode, Photo vs Animation mode toggle |
| [Media Loading Guide](user-media-loading-guide.md) | Loading videos and images onto device screens |

## Related Guides

| Guide | Description |
|---|---|
| [Devices Guide](user-devices-guide.md) | Managing devices, model selection, screen material, multi-device workflows |
| [Animation Guide](user-animation-guide.md) | Timeline, blocks, transitions, keyframes, playback, recording |

## Interface Overview

```
┌──────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════════╗ │
│ ║  Toolbar: [Aa] [📸] [Grid] [Photo|Animation] [⚙] [↻] ║ │
│ ╚═══════════════════════════════════════════════════════╝ │
│                                                           │
│ ┌──────────────┐  ┌────────────────────┐  ┌────────────┐ │
│ │ Editor        │  │                    │  │ Devices    │ │
│ │ Sidebar       │  │    3D Canvas       │  │ or Text    │ │
│ │               │  │                    │  │ Panel      │ │
│ │ • Ratio       │  │    [devices in     │  │            │ │
│ │ • FOV         │  │    3D space]       │  │ (context   │ │
│ │ • Background  │  │                    │  │  sensitive)│ │
│ │ • Lighting    │  │                    │  │            │ │
│ │ • Presets     │  │                    │  │            │ │
│ └──────────────┘  └────────────────────┘  └────────────┘ │
│                                                           │
│ ┌───────────────────────────────────────────────────────┐ │
│ │  Timeline (animation mode only)                       │ │
│ │  ┌──┬────┬──┐  ┌──┬────┬──┐                          │ │
│ │  │P1│Hold│P2│  │P1│Hold│P2│                          │ │
│ │  └──┴────┴──┘  └──┴────┴──┘                          │ │
│ └───────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

### Sidebar Sections

| Section | Location | Contains |
|---|---|---|
| **Editor** | Left sidebar | Ratio picker, FOV, Background, Lighting, Scene Presets |
| **Devices** | Right sidebar (default) | Device list, media buttons, model picker, camera controls, material settings, shadow settings |
| **Text** | Right sidebar (text mode) | Text item list, inline text editor, styling controls |
| **Timeline** | Bottom (animation mode) | Per-device tracks, animation blocks, media clips, playhead, playback controls |
