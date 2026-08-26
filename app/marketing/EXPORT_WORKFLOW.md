# Protato - Export Workflow Guide

Step-by-step guide to exporting your 3D mockup videos and images using the UI panels (macOS vs iOS/iPadOS).

---

## 🖥️ macOS: Preparing Your Scene for Export

### 1. Set Canvas Aspect Ratio (macOS)
- **Open**: SceneExportControlsView → **Canvas** tab
- **Aspect ratio dropdown**: Select target format
  - **16:9** → widescreen (YouTube, presentations)
  - **9:16** → vertical (Instagram Reels, TikTok)
  - **1:1** → square (feed posts, Instagram)
  - **4:5** → portrait (Pinterest, some social)
  - **4:3** → traditional TV format
  - **3:4** → vertical alternative
  - **Custom** → enter exact width×height values
- **Preview** → 3D canvas updates to show letterboxed area

### 2. Adjust Camera Position (macOS)
- **Open**: CameraSettingsView → **FOV and position controls**
- **Field of View (FOV) slider**: 20°–110° (wider = more environment visible)
- **Camera position** → X/Y/Z inputs or drag gizmo in 3D view
- **Reset camera** → "Reset View" button returns to default orthographic view
- **Pro tip**: For 9:16 vertical, use wider FOV (80°+) to capture more top/bottom

### 3. Adjust Lighting (macOS)
- **Open**: LightingSettingsView → ensure preset matches desired mood
- **Studio** → clean product look
- **Dramatic** → cinematic shadows
- **Flat** → even illumination
- **Adjust intensity** → per-light sliders if preset needs tweaking
- **IBL skybox** → scroll IBL selector for environment reflections

### 4. Set Background (macOS)
- **Open**: Background settings tab
- **Choose type**: None (transparent), Solid, Gradient, Mesh Gradient, or Image
- **For transparent exports**: Select **None** → enables alpha channel
- **For solid color**: Pick color from swatch, adjust opacity
- **For gradients**: Select Linear or Mesh, adjust stops/colors
- **For image**: Browse and select; adjust fit (fill/fit/stretch) and blur

## 📱 iOS/iPadOS: Preparing Your Scene for Export

### 1. Set Canvas Aspect Ratio (iOS/iPadOS)
- **Open**: SceneExportControlsView → **Canvas** tab
- **Aspect ratio dropdown**: Select target format (same options as macOS)
- **Preview** → canvas preview updates

### 2. Adjust Camera Position (iOS/iPadOS)
- **Open**: CameraSettingsView → **FOV and position controls**
- **Field of View (FOV) slider**: 20°–110°
- **Camera position** → inputs or drag gizmo in 3D view
- **Reset camera** → "Reset View" button

### 3. Adjust Lighting (iOS/iPadOS)
- **Open**: LightingSettingsView → ensure preset matches desired mood
- Same preset options as macOS (Studio/Dramatic/Flat)

### 4. Set Background (iOS/iPadOS)
- **Open**: Background settings tab
- **Choose type**: None (transparent), Solid, Gradient, Mesh Gradient, or Image
- **For transparent exports**: Select **None** → enables alpha channel

## ⚙️ macOS: Configuring Export Settings

### Open Export Panel (macOS)
- **Click**: **Export button** in toolbar (upward arrow ⬆ or "Export" label)
- **OR** → **File → Export** from menu bar
- **OR** → **Share sheet** (though primarily for macOS file sharing)

### Export Panel Columns (macOS)

| Column | Options | Description |
|--------|---------|-------------|
| **Resolution** | 720p, 1080p, 1440p | Short edge length; long edge auto-calculates from aspect ratio |
| **Frame Rate** | 24, 30, 60 fps | Temporal smoothness; 24=fine art, 30=standard, 60=ultra-smooth UI |
| **Duration** | Auto-calculated, editable | Based on timeline length; click to manually override (seconds) |
| **Est. File Size** | Live calculation | Updates as you change resolution/FPS; approximate only |

### Resolution Details (macOS)
- **720p** → 1280×720 (16:9) — shortest edge 720px
- **1080p** → 1920×1080 (16:9) — shortest edge 1080px — **recommended for most social**
- **1440p** → 2560×1440 (16:9) — shortest edge 1440px — **YouTube, presentations, archival**

### Frame Rate Details (macOS)
- **24 fps** → cinematic, film-like motion; best for product reveals, feature showcases
- **30 fps** → standard smooth motion; widely compatible across platforms, social media
- **60 fps** → ultra-smooth, gaming/UI demos; 2x data rate; best for scrolling, animations with motion

### Duration Editing (macOS)
- **Auto mode** → uses full timeline length (all device animations, overlay durations)
- **Manual override** → click duration field → type desired seconds (e.g., `5` for 5-second clip, `15` for 15-second)
- **Trim before export** → reduce timeline range via playhead start/end markers before exporting

## 📱 iOS/iPadOS: Configuring Export Settings

### Open Export Panel (iOS/iPadOS)
- **Tap**: **Export button** in toolbar (upward arrow ⬆ or "Export" label)
- **OR** → **Share sheet** on iOS/iPadOS (primary export method)

### Export Panel Columns (iOS/iPadOS)
Same column options as macOS (Resolution, Frame Rate, Duration, Est. File Size)

### Resolution Details (iOS/iPadOS)
Same resolution values as macOS (720p/1080p/1440p)

### Frame Rate Details (iOS/iPadOS)
Same frame rate options as macOS (24/30/60 fps)

### Duration Editing (iOS/iPadOS)
- **Auto mode** → uses full timeline length
- **Manual override** → tap duration field → type desired seconds
- **Trim before export** → adjust playhead start/end markers

## ▶️ macOS: Starting the Export

### macOS Workflow
1. **Configure settings** (resolution, FPS, duration) in export panel
2. **Click "Export"** button → progress dialog appears
3. **Progress dialog shows**:
   - **Status**: "Rendering frame 45/300"
   - **Progress bar**: [████████░░] 15%
   - **Time elapsed**: 0:03
   - **Est. remaining**: 0:17
   - **Cancel button** → stop export anytime; keep partial file saved
4. **Completion**:
   - **Save panel** appears → choose folder, filename
   - **Finder reveal** → opens folder with exported file
   - **Share menu** → AirDrop, email, Messages, or copy to clipboard

### macOS Background Export
- **Continue editing** while exporting (window can be minimized)
- **Progress in menu bar** → badge shows export progress
- **Notification on completion** → banner appears when export finishes
- **Keep partial file** → if cancelled, partial export is saved

## ▶️ iOS/iPadOS: Starting the Export

### iOS/iPadOS Workflow
1. **Configure settings** same as macOS (resolution, FPS, duration)
2. **Tap "Export"** → share sheet appears
3. **Share options**:
   - **Save to Files** → choose destination folder in iCloud Drive or On My iPad
   - **AirDrop** → send to nearby Apple devices
   - **Messages** → attach to iMessage
   - **Mail** → send as email attachment
   - **Twitter/Facebook** → direct social sharing (if configured)
   - **Copy** → to clipboard for pasting elsewhere
4. **Progress** → shown in badge on export window; notification when complete

### iOS/iPadOS Export Limitations
- **App must stay foreground** during export (no background export)
- **Memory constrained** → max resolution 4K on iPad, 1080p on iPhone
- **No cancel-and-resume** → must restart export if cancelled

## 📦 What Gets Exported (Both Platforms)

| Element | Included |
|---------|----------|
| **All devices with animations** | ✅ Yes |
| **Screen media (video/images) on devices** | ✅ Yes |
| **Device shadows** (per-device style) | ✅ Yes |
| **Lighting** (exact match to preview) | ✅ Yes |
| **Overlays** (both depth groups: behind/in front) | ✅ Yes |
| **Global overlay effects** (vignette) | ✅ Yes |
| **Camera position/FOV** | ✅ Yes |

### Canvas Background Handling (Both Platforms)

| Background Type | Video Export | Image (with BG) | Image (transparent) |
|-----------------|--------------|-----------------|---------------------|
| **Solid** | ✅ Includes background | ✅ Includes background | ❌ (use None type) |
| **Gradient** | ✅ Includes background | ✅ Includes background | ❌ |
| **Mesh Gradient** | ✅ Includes background | ✅ Includes background | ❌ |
| **Image** | ✅ Includes background | ✅ Includes background | ❌ |
| **None** | ⚠️ Black BG | ⚠️ Black BG | ✅ Alpha channel (PNG/HEIC only) |

*Video with transparent BG not supported (MP4 limitation)* → use PNG/HEIC for transparent exports

## ⚠️ macOS: Troubleshooting Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| **Export fails immediately** | Missing media file | Re-link media in timeline → right-click → "Re-import" |
| **"HEVC unavailable"** | Older Mac / no hardware encoder | Use Mac with Apple Silicon (M1/M2/M3) or T2 chip; or lower resolution to 720p |
| **Out of memory** | Too many devices/overlays at high res | Lower resolution (720p → 1080p); reduce device count; remove unused overlays |
| **Black frames in export** | Media decode failed | Re-import video file; check codec compatibility (MP4/H.264 recommended) |
| **Audio missing** | By design (mockup-focused) | Add audio in post-production (Final Cut Pro, Premiere, DaVinci Resolve, iMovie) |

## ⚠️ iOS/iPadOS: Troubleshooting Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| **Export fails** | Insufficient memory | Reduce device count; lower resolution to 720p |
| **Process killed** | App backgrounded during export | Keep app in foreground during export |
| **Low storage** | Export file too large | Choose 720p resolution; shorter duration |
| **Codec issues** | Unsupported video format | Re-import media in MP4 format (H.264) |

## 💡 macOS: Pro Export Tips

### Resolution + Frame Rate Combinations (macOS)
| Goal | Recommended Setting |
|------|---------------------|
| **Instagram Reels/TikTok** | 1080p30 or 1080p60 (9:16 aspect) |
| **YouTube product showcase** | 1440p30 or 1080p30 (16:9) |
| **Presentation/demo video** | 1080p30 (16:9) |
| **Twitter/X posts** | 720p30 (file size friendly) |
| **Cinematic product reveal** | 4K (if hardware) + 24fps |

### Background Transparency Workflow (macOS)
1. **Set background to "None"** in Background settings
2. **Ensure all overlays** you want transparent are using PNG with alpha
3. **Export as PNG or HEIC** (not MP4 video) for transparent backgrounds
4. **For video with background removal**: Export MP4, then use After Effects/DaVinci Resolve to key out black background

### Cancel & Resume (macOS)
- **Cancel anytime** → progress dialog "Cancel" button stops export; partial file saved to temp location
- **Resume not supported** → must restart export from beginning if cancelled
- **Background export** → continue editing while exporting; progress shown in menu bar badge; notification on completion

## 📱 iOS/iPadOS: Pro Export Tips

### Resolution + Frame Rate Combinations (iOS/iPadOS)
| Goal | Recommended Setting |
|------|---------------------|
| **Instagram Reels/TikTok** | 1080p30 or 1080p60 (9:16 aspect) — iPad; 720p30 on iPhone |
| **YouTube product showcase** | 1080p30 (iPad); 720p30 (iPhone) |
| **Presentation/demo video** | 1080p30 (iPad); 720p30 (iPhone) |
| **Twitter/X posts** | 720p30 (file size friendly) |

### Background Transparency Workflow (iOS/iPadOS)
1. **Set background to "None"** in Background settings
2. **Ensure all overlays** you want transparent are using PNG with alpha
3. **Export as PNG or HEIC** (not MP4 video) for transparent backgrounds
4. **Limited to still images** — video export does not support transparent backgrounds

### Cancel & Resume (iOS/iPadOS)
- **Cancel anytime** → tap "Cancel" in progress dialog; export stops
- **Resume not supported** → must restart export from beginning if cancelled
- **No background export** → app must stay in foreground; progress shown in window badge

## 🛠️ macOS: UI Elements Referenced

- **Export button** → toolbar upward arrow ⬆ or "Export" label; opens export panel
- **Resolution dropdown** → 720p/1080p/1440p presets plus Custom option
- **Frame rate picker** → 24/30/60 fps buttons
- **Duration field** → auto-calculated display, click to edit manually
- **Est. file size label** → live calculation updating with resolution/FPS changes
- **Progress dialog** → frame number, progress bar, time elapsed/remaining, Cancel button
- **Save panel** (macOS) → folder selection, filename input, Save button
- **Share menu** (macOS) → AirDrop, email, Messages, copy to clipboard
- **Menu bar badge** (macOS) → shows export progress when window minimized
- **Export notification** (macOS) → banner when export completes
- **SceneExportControlsView** → panel with Canvas, Resolution, FPS, Duration controls
- **CameraSettingsView** → FOV slider, camera position gizmo, Reset View button
- **LightingSettingsView** → preset dropdown (Studio/Dramatic/Flat), intensity sliders
- **Background settings tab** → None/Solid/Gradient/Mesh Gradient/Image type selection
- **Canvas aspect ratio dropdown** → 16:9/9:16/1:1/4:5/4:3/3:4/Custom
- **Playhead start/end markers** → trim timeline range before export
- **Menu bar badge** (macOS) → shows export progress when window minimized

## 🛠️ iOS/iPadOS: UI Elements Referenced

- **Export button** → toolbar upward arrow ⬆ or "Export" label; opens export panel
- **Resolution dropdown** → 720p/1080p/1440p presets plus Custom option
- **Frame rate picker** → 24/30/60 fps buttons
- **Duration field** → tap to edit manually
- **Est. file size label** → live calculation updating with resolution/FPS changes
- **Progress dialog** → frame number, progress bar, time elapsed/remaining
- **Share sheet** (iOS/iPadOS) → Save to Files, AirDrop, Messages, Mail, social options
- **Progress badge** (iOS/iPadOS) → shows export progress in window
- **Export notification** (iOS/iPadOS) → banner when export completes in background
- **SceneExportControlsView** → panel with Canvas, Resolution, FPS, Duration controls
- **CameraSettingsView** → FOV slider, camera position gizmo, Reset View button
- **LightingSettingsView** → preset dropdown (Studio/Dramatic/Flat), intensity sliders
- **Background settings tab** → None/Solid/Gradient/Mesh Gradient/Image type selection
- **Canvas aspect ratio dropdown** → 16:9/9:16/1:1/4:5/4:3/3:4/Custom
- **Playhead start/end markers** → trim timeline range before export
- **Share sheet** (iOS/iPadOS) → Save to Files, AirDrop, Messages, Mail, social sharing options