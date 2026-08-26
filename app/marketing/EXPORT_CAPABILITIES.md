# Protato - Export Capabilities

Complete reference for video and image export features, specifications, and use cases.

---

## Video Export

### Resolutions

| Preset | Short Edge | Long Edge (16:9) | Long Edge (9:16) | Long Edge (1:1) | Use Case |
|--------|------------|------------------|------------------|-----------------|----------|
| **720p** | 720 | 1280 | 1280 | 720 | Draft, web preview, email |
| **1080p** | 1080 | 1920 | 1920 | 1080 | **Standard** — YouTube, social, presentations |
| **1440p** | 1440 | 2560 | 2560 | 1440 | High-quality, 4K downscale, archival |

*Aspect ratio follows canvas setting (16:9, 9:16, 1:1, 4:5, 4:3, 3:4, or custom)*

### Frame Rates

| FPS | Use Case | Notes |
|-----|----------|-------|
| **24** | Cinematic, film look | Standard cinema rate |
| **30** | **Standard** — social, web, TV | Smooth, widely compatible |
| **60** | Ultra-smooth, gaming, UI demos | 2x data rate, best for motion |

### Codec & Quality

| Parameter | Value |
|-----------|-------|
| **Codec** | HEVC (H.265) |
| **Profile** | Main / High (hardware dependent) |
| **Container** | MP4 (ISO Base Media File Format) |
| **Bitrate** | Adaptive: 6–28 Mbps |
| **Color Space** | Rec.709 / sRGB |
| **Audio** | None (mockup-focused) |

### Bitrate Table (Approximate)

| Resolution | 24 fps | 30 fps | 60 fps |
|------------|--------|--------|--------|
| 720p | 6 Mbps | 8 Mbps | 14 Mbps |
| 1080p | 10 Mbps | 12 Mbps | 22 Mbps |
| 1440p | 15 Mbps | 18 Mbps | 28 Mbps |

*Actual bitrate varies with content complexity (VBR)*

### Export Time Estimates (M2 MacBook Air, 10s clip)

| Resolution | FPS | Est. Time | File Size (10s) |
|------------|-----|-----------|-----------------|
| 720p | 30 | ~3s | ~10 MB |
| 1080p | 30 | ~6s | ~15 MB |
| 1440p | 30 | ~10s | ~22 MB |
| 1080p | 60 | ~12s | ~27 MB |

---

## Image Export

### Formats

| Format | Transparency | Compression | Use Case |
|--------|--------------|-------------|----------|
| **PNG** | ✅ Yes | Lossless | Design handoff, compositing |
| **HEIC** | ✅ Yes | High efficiency | Photos app, iOS sharing |
| **JPEG** | ❌ No | Lossy (90%) | Web, email, small file size |

### Resolutions
- Matches canvas pixel dimensions exactly
- Up to 8K (7680×4320) on capable hardware
- No upscaling — renders at canvas size

### Background Options
- **With background** — Includes canvas background
- **Transparent** — Alpha channel (PNG/HEIC only), requires `.none` background type

---

## What Gets Exported

### Always Included
✅ All devices with animations  
✅ Screen media (video/images) playing on devices  
✅ Device shadows (per-device style)  
✅ Lighting (exact match to preview)  
✅ Overlays (both depth groups)  
✅ Global overlay effects (vignette)  
✅ Camera position/FOV  

### Canvas Background
| Background Type | Video | Image (with BG) | Image (transparent) |
|-----------------|-------|-----------------|---------------------|
| Solid | ✅ | ✅ | ❌ (use None) |
| Gradient | ✅ | ✅ | ❌ |
| Mesh Gradient | ✅ | ✅ | ❌ |
| Image | ✅ | ✅ | ❌ |
| **None** | ⚠️ Black | ⚠️ Black | ✅ Alpha |

*Video with transparent BG not supported (MP4 limitation)*

---

## Export Workflow

### 1. Prepare Scene
- Set canvas aspect ratio (SceneExportControlsView → Canvas)
- Position camera (CameraSettingsView)
- Adjust lighting (LightingSettingsView)
- Set background (Background settings)

### 2. Configure Export
```
SceneExportControlsView:
├── Resolution: [720p | 1080p | 1440p]
├── Frame Rate: [24 | 30 | 60]
├── Duration: [Auto-calculated, editable]
├── Est. File Size: [Live calculation]
└── [Export Button]
```

### 3. Export Progress
```
Progress Dialog:
├── Status: "Rendering frame 45/300"
├── Progress Bar: [████████░░] 15%
├── Time Elapsed: 0:03
├── Est. Remaining: 0:17
└── [Cancel Button]
```

### 4. Completion
- macOS: Save panel → Finder reveal → Share menu
- iOS: Share sheet (Save to Files, AirDrop, Messages, etc.)

---

## Advanced Features

### Frame-Accurate Baking
- **Zero timing drift** — Every frame pre-computed before rendering
- **Perfect media sync** — Video frames decoded at exact timestamps
- **Deterministic** — Same project = identical export every time

### Cancelable Export
- Stop anytime, keep partial file
- Resume not supported (restart from beginning)

### Background Export (macOS)
- Continue editing while exporting
- Progress in menu bar / window badge
- Notification on completion

### Batch Export (Planned)
- Multiple resolutions in one pass
- Queue multiple projects

---

## Platform Differences

| Feature | macOS | iOS/iPadOS |
|---------|-------|------------|
| Background export | ✅ | ⚠️ Limited (app must stay foreground) |
| File save location | Any folder | Files app / Share sheet |
| Drag-and-drop result | ✅ | ❌ |
| Max resolution | 8K | 4K (memory constrained) |
| HEVC hardware encode | ✅ (MediaEngine) | ✅ (VideoToolbox) |

---

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Export fails immediately | Missing media file | Re-link media in timeline |
| "HEVC unavailable" | Older Mac / no hardware encoder | Use Mac with Apple Silicon or T2 |
| Out of memory | Too many devices/overlays at high res | Lower resolution, reduce scene complexity |
| Black frames in export | Media decode failed | Re-import video, check codec |
| Audio missing | By design | Add audio in post (Final Cut, Premiere, etc.) |

---

## Comparison: Export vs Preview

| Aspect | Canvas Preview | Video Export |
|--------|----------------|--------------|
| Frame rate | Display native (60/120) | Fixed (24/30/60) |
| Resolution | Window size | Preset (720/1080/1440) |
| Shadows | Real-time (lower quality) | Baked (higher quality) |
| Anti-aliasing | MSAA 4x | Supersampled (2x at 1080p+) |
| Media decode | Cached, seeking optimized | Frame-accurate, no cache |
| Color space | Display P3 (wide) | Rec.709 (standard) |

---

## Best Practices for Quality

1. **Use 1080p30** for most social content
2. **Use 1440p30** for YouTube, presentations, archive
3. **Use 24fps** for cinematic product reveals
4. **Use 60fps** for UI demos, scrolling, gaming
5. **Enable mesh gradients** — they export beautifully
6. **Check safe areas** — enable guides in Canvas settings
7. **Test short clip first** — 5s test export before full render