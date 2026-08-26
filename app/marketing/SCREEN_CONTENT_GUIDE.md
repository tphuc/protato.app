# Protato - Screen Content Guide

How to add videos and images to device screens and control their playback using the UI (macOS vs iOS/iPadOS).

---

## 📥 macOS: Adding Media to Your Scene

### Method 1: Drag & Drop (macOS)
- **Find a video or image file** in **Finder**
- **Drag the file** onto the 3D canvas or any device screen preview
- **Release** → media appears as a clip in the timeline with a device-screen overlay

### Method 2: + Button Import (macOS)
- **Click the + (Add) button** in the toolbar → "Add Media"
- **Browse or drag** files in the file picker window
- **Selected media** appears as a new clip in the timeline, ready to be assigned to a device

### Supported Formats (macOS)
| Media Type | Formats | Notes |
|------------|---------|-------|
| **Video** | MP4, MOV (H.264/H.265) | Frame-accurate playback synced to device motion |
| **Image** | PNG, JPEG, HEIC, HEIF | Can be set to transparent background (.none) |

## 📱 iOS/iPadOS: Adding Media to Your Scene

### Method 1: Drag & Drop (iOS/iPadOS)
- **Find a video or image file** in the **Files app**
- **Drag the file** (using drag gesture) onto the 3D canvas or any device screen preview
- **Release** → media appears as a clip in the timeline with a device-screen overlay

### Method 2: + Button Import (iOS/iPadOS)
- **Tap the + (Add) button** in the toolbar → "Add Media"
- **Browse or drag** files in the file picker sheet
- **Selected media** appears as a new clip in the timeline, ready to be assigned to a device

### Supported Formats (iOS/iPadOS)
| Media Type | Formats | Notes |
|------------|---------|-------|
| **Video** | MP4, MOV (H.264/H.265) | Frame-accurate playback synced to device motion |
| **Image** | PNG, JPEG, HEIC, HEIF | Can be set to transparent background (.none) |

## 📱 macOS: Assigning Media to Device Screens

### Step 1: Select the Clip
- Click any clip in the **timeline** → it becomes highlighted
- **Inspector panel** shows **Screen Content settings** (right side)

### Step 2: Assign to Device (macOS)
- In the inspector, **select the target device** from the dropdown
- The clip's video/image now maps to the device's screen mesh
- **Named tag** appears (e.g., `iphone17promax`)

### Step 3: Trim the Clip (macOS)
- **Trim handles** appear at both ends of the clip in the timeline
- **Drag left handle** → trim start frame
- **Drag right handle** → trim end frame
- **Time input field** → click the timestamp → type exact start/end time (e.g., `0.0`, `5.3`)

### Step 4: Fit Mode (macOS)
- **Three fit options** in the inspector:
  - **.fill** → clip fills entire screen, may crop edges
  - **.fit** → clip fits within screen, may leave letterboxing
  - **.stretch** → clip stretches to fill screen exact dimensions (may distort aspect ratio)
- **Toggle between modes** → see which best frames your content

## 📱 iOS/iPadOS: Assigning Media to Device Screens

### Step 1: Select the Clip
- Tap any clip in the **timeline** → it becomes highlighted
- **Inspector panel** shows **Screen Content settings** (bottom/right)

### Step 2: Assign to Device (iOS/iPadOS)
- Tap the **device dropdown** in inspector
- Select target device from list
- Clip's video/image maps to device's screen mesh
- **Tag** appears below device name

### Step 3: Trim the Clip (iOS/iPadOS)
- **Trim handles** appear at both ends of the clip in the timeline
- **Drag handle** with finger → trim start/end
- **Time input** → tap timestamp → type exact value (e.g., `0.0`, `5.3`)

### Step 4: Fit Mode (iOS/iPadOS)
- **Three fit options** in inspector:
  - **.fill** → clip fills entire screen, may crop edges
  - **.fit** → clip fits within screen, may leave letterboxing
  - **.stretch** → clip stretches to fill screen exact dimensions
- **Toggle between modes** → see which best frames your content

## 🔄 macOS: Multiple Clips Per Device

### Adding a Second Clip (macOS)
- **Import another video/image** → appears as a second clip in the timeline
- **Assign to same device** → both clips map to the same device screen
- **Stack in timeline** → play back sequentially based on playhead position

### Switching Between Clips (macOS)
- **Select a clip** in the timeline → only that clip's device screen updates in the 3D preview
- **Playhead position** → whichever clip the playhead is over is what's currently displayed

### Looping a Clip (macOS)
- **Select the clip** in the timeline
- **Enable "Loop" toggle** in the inspector
- **Result** → clip repeats seamlessly for the duration of the scene

## 📱 iOS/iPadOS: Multiple Clips Per Device

### Adding a Second Clip (iOS/iPadOS)
- **Import another video/image** → appears as a second clip in the timeline
- **Assign to same device** → both clips map to the same device screen
- **Stack in timeline** → play back sequentially based on playhead position

### Switching Between Clips (iOS/iPadOS)
- **Tap a clip** in the timeline → only that clip's device screen updates in the 3D preview
- **Playhead position** → whichever clip the playhead is over is what's currently displayed

### Looping a Clip (iOS/iPadOS)
- **Select the clip** in the timeline
- **Enable "Loop" toggle** in inspector
- **Result** → clip repeats seamlessly for the duration of the scene

## ⏱️ macOS: Trim Controls & Time Input

### Trim Handle Drag (macOS)
- Hover over clip edge → cursor changes to double-arrow
- **Drag inward** to trim start or end
- **Shift-drag** → trim by exact frame increments (more precise)

### Time Field Input (macOS)
- Click the **timestamp display** above the timeline (e.g., shows `00:00:00`)
- **Type numeric value** → accepts decimal seconds (`1.5`, `30.75`, `60.0`)
- **Press Enter** → playhead jumps to that exact time

### Precision Trimming Workflow (macOS)
1. **Play the scene** → locate exact moment you want to start/trim
2. **Click time display** → type precise value (e.g., `2.34` for 2 seconds 34 frames)
3. **Drag trim handle** to fine-tune
4. **Repeat** for the other end of the clip

## ⏱️ iOS/iPadOS: Trim Controls & Time Input

### Trim Handle Drag (iOS/iPadOS)
- Press and hold on clip edge → cursor changes to double-arrow
- **Drag inward** with finger to trim start or end
- **Shift-drag** → trim by finer increments (if hardware keyboard attached)

### Time Field Input (iOS/iPadOS)
- Tap the **timestamp display** above the timeline
- **Type numeric value** → accepts decimal seconds (`1.5`, `30.75`, `60.0`)
- **Keyboard** → appears for text input if hardware keyboard connected
- **Press Enter** → playhead jumps to that exact time

### Precision Trimming Workflow (iOS/iPadOS)
1. **Play the scene** → locate exact moment you want to start/trim
2. **Tap time display** → type precise value
3. **Drag trim handle** to fine-tune
4. **Repeat** for the other end of the clip

## 🖼️ macOS: Image-Specific Features

### Transparent Background (macOS)
- **Set background to "None"** (Background settings → `.none` type)
- **Image with alpha** → exports with transparent background (PNG or HEIC format)
- **Use case**: product logos, watermarks, overlay graphics on device screens

### Fit Modes for Images (macOS)
- **.fill** → image covers entire screen, may crop
- **.fit** → image contained within screen, letterboxed if aspect ratios differ
- **.stretch** → image stretched to exact screen dimensions

### Image Opacity & Blend Modes (macOS)
- **Opacity slider** → 0% (fully transparent) to 100% (opaque)
- **Blend mode dropdown** → Normal, Multiply, Screen, Overlay
- **Use Multiply** → darken device screen under the image
- **Use Screen** → lighten/glow effect
- **Keyframeable** → animate opacity fade-in/out over timeline (click diamond icon)

## 📱 iOS/iPadOS: Image-Specific Features

### Transparent Background (iOS/iPadOS)
- **Set background to "None"** (Background settings → `.none` type)
- **Image with alpha** → exports with transparent background (PNG or HEIC format)
- **Use case**: product logos, watermarks, overlay graphics on device screens

### Fit Modes for Images (iOS/iPadOS)
- **.fill** → image covers entire screen, may crop
- **.fit** → image contained within screen, letterboxed if aspect ratios differ
- **.stretch** → image stretched to exact screen dimensions

### Image Opacity & Blend Modes (iOS/iPadOS)
- **Opacity slider** → 0% (fully transparent) to 100% (opaque)
- **Blend mode dropdown** → Normal, Multiply, Screen, Overlay
- **Use Multiply** → darken device screen under the image
- **Use Screen** → lighten/glow effect

## 🛠️ macOS: UI Elements Referenced

- **+ (Add Media)** toolbar button → file picker window for importing videos/images
- **Timeline clips** → horizontal bars representing each media asset
- **Trim handles** → drag endpoints of clips to set in/out points (hover for double-arrow cursor)
- **Time display** → click to open numeric timestamp entry field
- **Fit mode toggles** (.fill/.fit/.stretch) → how clip maps to device screen
- **Loop toggle** → enable continuous replay of a clip
- **Device dropdown** → assign clip to specific device screen (inspector panel)
- **Opacity slider** → transparency control for clip (inspector panel)
- **Blend mode picker** → Normal/Multiply/Screen/Overlay blending options (inspector)
- **Inspector panel** → right-side panel with Screen Content settings (collapsible)

## 🛠️ iOS/iPadOS: UI Elements Referenced

- **+ (Add Media)** toolbar button → file picker sheet for importing videos/images
- **Timeline clips** → horizontal bars representing each media asset
- **Trim handles** → drag endpoints of clips to set in/out points (press-and-hold for handle)
- **Time display** → tap to open numeric timestamp entry
- **Fit mode toggles** (.fill/.fit/.stretch) → how clip maps to device screen
- **Loop toggle** → enable continuous replay of a clip
- **Device dropdown** → assign clip to specific device screen (inspector panel)
- **Opacity slider** → transparency control for clip (inspector panel)
- **Blend mode picker** → Normal/Multiply/Screen/Overlay blending options (inspector)
- **Inspector panel** → bottom/right panel with Screen Content settings (collapsible)