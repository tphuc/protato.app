# Export Guide

Export your scene as a still image or animated video.

## Photo Mode vs. Animation Mode

The toolbar toggle switches between **Photo** and **Animation** modes. This determines what kind of export is available:

| Mode | Export Produces | Available Formats |
|---|---|---|
| **Photo** | Single still image | PNG, JPEG |
| **Animation** | Animated video | MP4 (H.264) |

## Image Export

Available when the mode toggle is set to **Photo**.

### Settings

| Setting | Options |
|---|---|
| **Format** | PNG (lossless, transparency-capable) or JPEG (compressed, smaller file size) |
| **Scale** | 0.25x through 2.0x |

### Resolution

Output resolution = `512 × (512 ÷ aspectRatio) × scale`.

Examples on a 9:16 (0.5625 aspect) canvas:

| Scale | Resolution |
|---|---|
| 1x | 512 × 911 px |
| 2x | 1024 × 1822 px |
| 4x | 2048 × 3644 px |

### Process

1. An offscreen `ARView` is created at the target resolution
2. The device model is loaded and positioned
3. Lighting and IBL are applied
4. A snapshot is taken of the 3D viewport
5. Shadow is rendered separately from the device's screen projection
6. All layers are composited: background → shadow → behind-text → device render → front-text
7. The result is saved as PNG or JPEG via the save dialog (macOS) or share sheet (iOS)

## Video Export

Available when the mode toggle is set to **Animation**.

### Settings

| Setting | Options |
|---|---|
| **Resolution** | Multiple options including 1080p, 4K |
| **FPS** | 30 (fixed) |

### Process

1. **Frame baking**: The animation system precomputes every frame's device transforms and video source times. Each frame at 30fps is evaluated for all devices.
2. **Offscreen rendering**: An offscreen RealityKit renderer loads all device models, positions them per-frame, and renders the scene
3. **Video encoding**: Each rendered frame is appended to an `AVAssetWriter` with H.264 compression
4. **Output**: The video is saved as `.mp4`

### Per-Device Video

Each device's screen video is loaded independently during export. The export pipeline extracts frame-accurate video frames from each device's media and composites them onto the screen textures. This means multi-device scenes with different videos on each screen export correctly.

### Progress

During video export, a progress overlay shows:

- A progress bar indicating frames completed / total frames
- The progress updates in real time as each frame renders
- Export runs asynchronously — you can't edit the scene during export

### Performance Notes

Video export performance depends on:

- **Resolution**: 4K exports take significantly longer than 1080p
- **Duration**: A 10-second animation at 30fps = 300 frames
- **Device count**: More devices = more rendering per frame
- **Model complexity**: Some phone models may take longer to load

A 10-second 1080p export typically completes faster than a 5-second 4K export.

## Export Layers

Both image and video export composite these layers in order:

```
1. Background (solid / gradient / image / transparent)
2. Shadow (projected device shadow)
3. Text (behind phone layer)
4. Device 3D render (phones with screen content)
5. Text (in front of phone layer)
```

This ensures the final output looks exactly like the editor preview.

## Transparent Background Export

To export with transparency:

1. Set the background to **None** (shows as checkerboard in the editor)
2. Export as **PNG** (image) — the background is fully transparent
3. For video, the background renders as black (transparency in video requires a codec that supports alpha, which is currently not available)

The transparent output is perfect for compositing the phone render into other designs, videos, or presentations.
