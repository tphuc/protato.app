# Protato - Animation Workflow Guide

How to create device motion animations using motion blocks and the timeline UI (macOS vs iOS/iPadOS).

---

## 🎬 macOS: Recording Poses

### Step 1: Enable Recording Mode
- **Click the Record button** (red circle) in the timeline toolbar
- **Shortcut**: Press `R` key on keyboard

### Step 2: Capture Poses
- **Move the device** in the 3D scene while recording is active
- **Keyboard shortcuts**:
  - `Space` → toggle play/pause preview
  - `Arrow keys` → nudge playhead 1 frame left/right
  - `Shift + Arrow` → nudge 10 frames at a time

### Step 3: Disable Recording
- **Click Record button again** or press `R` to stop
- **Playback** → press `Space` → preview all captured poses

## 📱 iOS/iPadOS: Recording Poses

### Step 1: Enable Recording Mode
- **Tap the Record handle** in the timeline (bottom-right circular button)
- **Shortcut**: Tap record button in the controls bar

### Step 2: Capture Poses
- **Move the device** in the 3D scene while recording is active
- **Gesture over timeline** → drag your finger to scrub through time while moving the device
- **Use Apple Pencil** → draw gesture over timeline for precise pose capture

### Step 3: Disable Recording
- **Tap Record button again** → stop recording
- **Playback** → tap play button → preview all captured poses

## 📦 Motion Blocks Overview

### What Is a Motion Block?
- A **motion block** groups together: transform (position/rotation/scale) + transition curve + duration
- **Visual indicator** → colored bar in the timeline track per device
- **Editing** → drag the block left/right to change duration, drag edges to trim

### Auto-Split Behavior (Both Platforms)
- When you capture a new pose by moving the device during recording:
  - The current block **auto-splits** at the capture point
  - A **new block** begins with the new transform
  - **Base transform** is applied between blocks (the "resting pose")

## ⚙️ Block Editing Controls (macOS)

### Duration Adjustment
- **Drag block edge** left/right → shorten/extend the animation duration
- **Numeric input** → select block → inspector shows **Duration field** (seconds)

### iOS/iPadOS: Block Duration Adjustment
- **Drag block edge** with finger → shorten/extend duration
- **Two-finger tap** → reset block to default duration
- **Inspector** → slide Duration picker for exact value

### Transition Curves (macOS)
- **Select any block** → opens **Transition inspector**
- **Curve picker**: Linear, Ease In, Ease Out, Ease In-Out, Spring
- **Preview** → real-time preview of the curve effect on the device motion

### iOS/iPadOS: Transition Curves
- **Select block** → opens curve inspector
- **Scroll through** curve options: Linear, Ease In, Ease Out, Ease In-Out, Spring
- **Quick preview** → short animation preview on device

### Base Transform (macOS)
- Each track has a **base transform** (resting pose) between blocks
- **Edit base transform** → select the track gap between blocks → adjust position/rotation/scale
- **Use case**: make device "lean" or "tilt" when not animating

### iOS/iPadOS: Base Transform
- Each track gap has a **base transform** between blocks
- **Touch and hold gap** → base transform controls appear
- **Drag sliders** → adjust resting pose
- **Use case**: device "lean" when idle

## 🕒 macOS: Scrubbing & Playhead Navigation

### Spacebar Play/Pause
- Press `Space` → toggle play/pause of timeline
- **Playing** → playhead moves right in real-time at selected FPS
- **Paused** → playhead stationary; use arrow keys for frame-by-frame nudging

### Arrow Key Nudging (macOS)
- **Right arrow** → move playhead forward 1 frame
- **Left arrow** → move playhead backward 1 frame
- **Shift + Arrow** → move 10 frames at a time (faster navigation)

### iOS/iPadOS: Scrubbing & Playhead Navigation

#### Drag Playhead
- **Drag playhead** horizontally across timeline → move to different time position

#### Pinch-to-Zoom (iOS/iPadOS)
- **Pinch** → zoom in/out on timeline duration
- **Reverse pinch** → zoom out

#### Tap Time (iOS/iPadOS)
- **Tap on timeline** → jump to that second
- **Tap time display** → open numeric entry for exact timestamp

### Scrubbable Field (Both Platforms)
- **Click the time display** at top of timeline → type exact timestamp (e.g., `1.5` for 1.5 seconds)
- **Press Enter** → playhead jumps to that exact time

## 💡 Pro Workflow Tips (macOS)

### "Capture 3 Poses" Pattern
1. Move device to **Pose A** → stop recording → block A created
2. Move device to **Pose B** → stop recording → block B created (auto-splits from A)
3. Move device to **Pose C** → stop recording → block C created (auto-splits from B)
4. **Adjust transitions** between A→B→C using curve pickers
5. **Playback** → smooth motion from start to finish

### Base Transform Tweaks (macOS)
- After 3+ blocks, **click the gap** between any two blocks
- Adjust **X/Y position**, **rotation**, or **scale** of the base transform
- Creates natural "resting" positions that make animation feel more organic

### Copy/Paste Blocks (macOS)
- **Option-drag** any block → duplicate at new position
- **Right-click block** → "Copy" then "Paste" → useful for repeating same motion pattern

## 💡 Pro Workflow Tips (iOS/iPadOS)

### "Capture 3 Poses" Pattern
1. Move device to **Pose A** → stop recording → block A created
2. Move device to **Pose B** → stop recording → block B created (auto-splits from A)
3. Move device to **Pose C** → stop recording → block C created (auto-splits from B)
4. **Adjust transitions** using curve picker
5. **Playback** → smooth motion from start to finish

### Base Transform Tweaks (iOS/iPadOS)
- After 3+ blocks, **touch and hold the gap** between two blocks
- Adjust **X/Y position**, **rotation**, or **scale** of the base transform
- Creates natural "resting" positions that make animation feel more organic

### Copy/Paste Blocks (iOS/iPadOS)
- **Option-drag** any block → duplicate at new position (or long-press → duplicate)
- **Long-press block** → "Copy" then "Paste" → useful for repeating same motion pattern

## 🛠️ UI Elements Referenced (macOS)

- **Record button** (red circle, toolbar) → toggle recording mode
- **Playhead** → vertical line indicating current timeline position
- **Timeline track bars** → colored per-device motion blocks
- **Transition inspector** → curve picker for block in/out animations
- **Base transform gap** → space between blocks where device rests
- **Play/pause shortcut** (`R` key / Spacebar) → start/stop recording or playback
- **Time display** → click to open scrubbable field for exact timestamp entry
- **Option-drag** → duplicate blocks
- **Right-click block** → context menu with copy/paste/delete
- **Cmd+Z** → undo, **Cmd+Shift+Z** → redo

## 🛠️ UI Elements Referenced (iOS/iPadOS)

- **Record button** (circular, toolbar) → toggle recording mode
- **Playhead** → circular handle, navigable via drag, tap
- **Timeline track bars** → colored per-device motion blocks visible on timeline
- **Curve inspector** → scrollable curve options for block animations
- **Base transform gap** → space between blocks where device rests
- **Play/pause button** → tap to start/stop playback
- **Time display** → tap to open numeric timestamp entry
- **Long-press block** → duplicate or enter edit mode
- **Two-finger tap** → reset block properties
- **Shake to undo** → iOS equivalent of ⌘Z