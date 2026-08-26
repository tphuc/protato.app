# Protato - Timeline Editor Guide

Complete guide to the timeline editing interface, tools, and workflow for creating device animations (macOS vs iOS/iPadOS).

---

## 📐 macOS: Timeline Interface Overview

### Main Timeline Area
- **Horizontal timeline** representing the full duration of your scene
- **Playhead** → vertical line indicating current position (updates as you scrub or play)
- **Timeline track rows** → one per device, showing all motion blocks for that device
- **Timeline toolbar** → top controls for playback, scrubbing, and editing (Record, Play/Pause, Scrub)

### Track Rows per Device (macOS)
- Each device in your scene gets its own **track row** in the timeline
- **Colored motion blocks** appear as horizontal bars within the track
- **Block length** = duration of that motion segment
- **Gap between blocks** = base transform (resting pose) time
- **Drag track headers** → reorder devices in the timeline (click and drag)
- **Track headers** → show device name/model tag, solo/mute toggles (click speaker/mic icons)

## 📱 iOS/iPadOS: Timeline Interface Overview

### Main Timeline Area
- **Horizontal timeline** representing the full duration of your scene
- **Playhead** → circular handle indicating current position
- **Timeline track rows** → one per device, showing all motion blocks for that device
- **Timeline toolbar** → bottom controls for playback, scrubbing, and editing

### Track Rows per Device (iOS/iPadOS)
- Each device in your scene gets its own **track row** in the timeline
- **Colored motion blocks** appear as horizontal bars within the track
- **Block length** = duration of that motion segment
- **Gap between blocks** = base transform (resting pose) time
- **Drag track** → reorder devices by touching and holding track header
- **Track headers** → show device name with compact info

## ⏱️ macOS: Playhead & Time Navigation

### Playhead Controls

#### Spacebar Play/Pause (macOS)
- Press `Space` → toggle play/pause of timeline playback
- **Playing** → playhead moves right in real-time at selected FPS
- **Paused** → playhead stationary; use arrow keys for frame-by-frame nudging

#### Arrow Key Nudging (macOS)
- **Right arrow** → move playhead forward 1 frame
- **Left arrow** → move playhead backward 1 frame
- **Shift + Arrow** → move 10 frames at a time (faster navigation)

#### Direct Time Jump (macOS)
- **Click on timeline** → playhead jumps to that horizontal position
- **Type timestamp** → click time display at top of timeline → enter value (e.g., `2.5` for 2.5 seconds)
- **Preset timecodes** → 0.0, 1.0, 2.0, 5.0, 10.0, etc. (click quick-jump buttons if available)

### Timeline Zoom & Pan (macOS)
- **Scroll wheel** (mouse) → zoom timeline in/out
- **Drag background** → pan left/right across extended timelines
- **Fit to width** → double-click track header or "Fit Timeline" button (toolbar)

## 📱 iOS/iPadOS: Playhead & Time Navigation

### Playhead Controls

#### Drag Playhead (iOS/iPadOS)
- **Drag playhead** horizontally across timeline → move to different time position
- **Finger drag** → smooth movement along timeline

#### Pinch-to-Zoom (iOS/iPadOS)
- **Pinch two fingers** → zoom in/out on timeline duration
- **Reverse pinch** → zoom out to full view

#### Tap to Jump (iOS/iPadOS)
- **Tap on timeline** → jump to that second/marker
- **Tap time display** → open numeric entry for exact timestamp

### Scrubbable Field (Both Platforms)
- **Click time display** at top of timeline → opens numeric input
- **Type exact timestamp** → `0.0`, `1.5`, `12.75`, etc.
- **Press Enter** → playhead jumps to exact second/frame

## 🎨 macOS: Motion Blocks & Editing

### What Are Motion Blocks (macOS)?
- **Colored bars** in device track rows representing animated transform segments
- Each block contains: **transform (position/rotation/scale)** + **transition curve** + **duration**
- **Visual editing** → drag blocks to reposition, resize, or reorder
- **Non-destructive** → original keyframe data preserved; adjustments are always editable

### Creating Motion Blocks (macOS - 3 Methods)

#### Method 1: Recording Mode (Gesture-Based, macOS)
1. **Click Record button** (red circle) in timeline toolbar → activates recording
2. **Move device** in 3D scene while gesture is over timeline
3. **Lift finger/gesture** → block auto-created at current position
4. **Auto-split** → if existing block exists, it splits at capture point; new block starts
5. **Base transform** → device rests between blocks at default position

#### Method 2: Manual Block Addition (macOS)
1. **Option-click** on any track at desired timestamp → creates empty motion block
2. **Adjust block properties** → use inspector to set transform values
3. **Move playhead** → adjust device position → keyframe keyframes auto-create

#### Method 3: Copy/Paste Blocks (macOS)
1. **Option-drag** existing block → duplicate at new position
2. **Right-click block** → "Copy" then "Paste" → useful for repeating motion patterns
3. **Paste attributes** → Option-drag with ⌥ modifier copies only transform or only curve

### Block Resizing & Trimming (macOS)
- **Drag block edge** (left or right) → shorten/extend duration
- **Drag block center** → move entire block left/right along timeline (time remap)
- **Shift-drag edge** → snap to frame boundaries for precise trimming
- **Right-click block** → "Trim Start" / "Trim End" from context menu

### Transition Curves Per Block (macOS)
- **Select any block** → inspector shows **Transition curve picker**
- **Available curves**:
  - **Linear** → constant speed, no acceleration/deceleration
  - **Ease In** → starts slow, accelerates end
  - **Ease Out** → starts fast, decelerates end
  - **Ease In-Out** → slow start, fast middle, slow end
  - **Spring** → physics-based bouncing overshoot
- **Preview** → real-time preview of curve effect on device motion in 3D view

## 📱 iOS/iPadOS: Motion Blocks & Editing

### What Are Motion Blocks (iOS/iPadOS)
- **Colored bars** in device track rows representing animated transform segments
- Each block contains: **transform (position/rotation/scale)** + **transition curve** + **duration**
- **Visual editing** → drag blocks to reposition, resize, or reorder
- **Non-destructive** → original keyframe data preserved; adjustments are always editable

### Creating Motion Blocks (iOS/iPadOS - 3 Methods)

#### Method 1: Recording Mode (Gesture-Based, iOS/iPadOS)
1. **Tap Record handle** in timeline → activates recording
2. **Move device** in 3D scene while gesture is over timeline
3. **Lift finger/gesture** → block auto-created at current position
4. **Auto-split** → if existing block exists, it splits at capture point; new block starts
5. **Base transform** → device rests between blocks at default position

#### Method 2: Manual Block Addition (iOS/iPadOS)
1. **Option-click** (or long-press) on any track at desired timestamp → creates empty motion block
2. **Adjust block properties** → use inspector to set transform values
3. **Move playhead** → adjust device position → keyframe keyframes auto-create

#### Method 3: Copy/Paste Blocks (iOS/iPadOS)
1. **Option-drag** existing block → duplicate at new position
2. **Long-press block** → "Copy" then "Paste" → useful for repeating motion patterns
3. **Paste attributes** → long-press with modifier copies only transform or only curve

### Block Resizing & Trimming (iOS/iPadOS)
- **Drag block edge** with finger → shorten/extend duration
- **Two-finger drag** on block center → move along timeline
- **Two-finger tap** → reset block to default duration/position
- **Inspector** → slide Duration picker for exact value

### Transition Curves Per Block (iOS/iPadOS)
- **Select any block** → inspector shows **Transition curve picker**
- **Scroll through** curve options: Linear, Ease In, Ease Out, Ease In-Out, Spring
- **Quick preview** → short animation preview on device screen
- **Custom curve** → drag points in curve editor for fine-tuned animation (coming soon)

## ⚙️ Base Transforms (Resting Poses) - Both Platforms

### What Is a Base Transform?
- The **default position/rotation/scale** of a device between motion blocks
- **Visual gap** between blocks in the timeline track
- **Purpose** → creates natural "resting states"; prevents device from snapping instantly between poses

### Editing Base Transforms (macOS)
1. **Click the gap** between two motion blocks in a track
2. **Inspector shows base transform controls** → position X/Y, rotation, scale
3. **Drag sliders/inputs** → adjust resting pose
4. **Use case**: make device "lean left" when idle, "tilt screen" slightly, etc.

### Editing Base Transforms (iOS/iPadOS)
1. **Touch and hold the gap** between two motion blocks
2. **Inspector shows base transform controls** → position X/Y, rotation, scale
3. **Drag sliders** → adjust resting pose
4. **Use case**: device "lean" when idle

### Multiple Base Transforms (Both Platforms)
- Each **track gap** has its own base transform
- **Sequence**: Block A → Base Transform → Block B → Base Transform → Block C
- **Animate base transforms** → add keyframes to base transform properties for subtle "breathing" or idle motion

## 🕒 Scrubbing Through Timeline - Both Platforms

### Spacebar Drag Scrub (macOS)
- **Press and hold Space** → playhead becomes draggable
- **Drag left/right** → scrub through frames while holding space
- **Release** → playhead stops at released position; device updates to that frame's transform

### Keyboard Scrubbing (macOS)
- **Arrow keys** → nudge playhead 1 frame at a time
- **Shift + Arrow** → nudge 10 frames
- **Home/End** → jump to start/end of timeline

### iOS/iPadOS: Timeline Scrubbing
- **Drag playhead** with finger → move through timeline frames
- **Two-finger drag** → pan left/right across extended timeline
- **Pinch** → zoom in/out on timeline duration

### Scrubbable Field (Both Platforms)
- **Click time display** at top of timeline → opens numeric input
- **Type exact timestamp** → `0.0`, `1.5`, `12.75`, etc.
- **Press Enter** → playhead jumps to exact second/frame

## 📦 macOS: Keyframe Animation System

### Property Keyframes per Block
Each motion block keyframes these properties over its duration:

| Property | UI Control | Keyframe Type |
|----------|-----------|---------------|
| **Position X** | Drag device in 3D view, or input value | Position keyframe |
| **Position Y** | Drag device in 3D view, or input value | Position keyframe |
| **Rotation** | Drag rotate handle, or input value (degrees) | Rotation keyframe |
| **Scale X** | Drag resize handle, or input value | Scale keyframe |
| **Scale Y** | Drag resize handle, or input value | Scale keyframe |
| **Opacity** | Opacity slider in inspector | Opacity keyframe |

### Adding Keyframes Manually (macOS)
1. **Select block** in timeline → property rows appear in inspector
2. **Property rows**: Position X, Position Y, Rotation, Scale X, Scale Y, Opacity
3. **Click diamond icon** ▶ next to any property at current playhead position → keyframe created (icon fills)
4. **Move playhead** to different timestamp
5. **Adjust property value** → second keyframe auto-created; timeline interpolates between

### Copy/Paste Keyframes (macOS)
- **Option-drag** any keyframe diamond → duplicate at new playhead position
- **Right-click keyframe** → "Copy" then "Paste" → between different properties or blocks
- **Paste special** → Option-drag with ⌥⇧ to copy only curve or only transform

### Motion Paths (macOS)
- **Enable "Show Motion Path"** toggle in viewport toolbar
- **Visual line** appears showing overlay/device movement trajectory across all frames
- **Drag path points** → adjust motion curve without changing keyframe values
- **Toggle off** → path hides; keyframe values unchanged

### Undo/Redo (macOS)
- **⌘Z** → undo last timeline edit
- **⌘ShiftZ** → redo
- **History depth** → 20 actions by default (configured in Settings)

## 📱 iOS/iPadOS: Keyframe Animation System

### Property Keyframes per Block
Each motion block keyframes these properties over its duration:

| Property | UI Control | Keyframe Type |
|----------|-----------|---------------|
| **Position X** | Drag device in 3D view, or input value | Position keyframe |
| **Position Y** | Drag device in 3D view, or input value | Position keyframe |
| **Rotation** | Drag rotate handle, or input value (degrees) | Rotation keyframe |
| **Scale X** | Drag resize handle, or input value | Scale keyframe |
| **Scale Y** | Drag resize handle, or input value | Scale keyframe |
| **Opacity** | Opacity slider in inspector | Opacity keyframe |

### Adding Keyframes Manually (iOS/iPadOS)
1. **Select block** in timeline → property rows appear in inspector
2. **Property rows**: Position X, Position Y, Rotation, Scale X, Scale Y, Opacity
3. **Tap diamond icon** ▶ next to any property at current playhead position → keyframe created (icon fills)
4. **Move playhead** to different timestamp
5. **Adjust property value** → second keyframe auto-created; timeline interpolates between

### Copy/Paste Keyframes (iOS/iPadOS)
- **Option-drag** any keyframe diamond → duplicate at new playhead position
- **Tap and hold keyframe** → "Copy" then "Paste" → between different properties or blocks
- **Paste special** → long-press with modifier to copy only curve or only transform

### Motion Paths (iOS/iPadOS)
- **Enable "Show Motion Path"** toggle in viewport
- **Visual line** appears showing overlay/device movement trajectory across all frames
- **Drag path points** → adjust motion curve without changing keyframe values
- **Toggle off** → path hides; keyframe values unchanged

### Undo/Redo (iOS/iPadOS)
- **Shake to undo** → iOS equivalent of ⌘Z
- **Three-finger tap** → redo option
- **History depth** → 15 actions by default (configured in Settings)

## 🔄 macOS: Timeline Actions & Operations

### Undo/Redo History (macOS)
- **⌘Z (macOS) / Ctrl+Z (Windows)** → undo last timeline edit
- **⌘ShiftZ / Ctrl+Shift+Z** → redo
- **History depth** → 20 actions by default (configured in Settings)
- **Timeline-specific** → undoes block creation, deletion, moves, curve changes

### Selecting Multiple Blocks (macOS)
- **Drag-select** → click and drag over a region of timeline → selects all blocks overlapping
- **Shift-click** → add/remove individual block from selection
- **Cmd-click (macOS) / Ctrl-click** → toggle single block selection
- **Operations on selection** → delete, copy, paste, move en masse

### Deleting Blocks (macOS)
- **Select block(s)** → press `Delete` or `Backspace`
- **Right-click** → "Delete Block" from context menu
- **Undo immediately** → ⌘Z works even right after delete
- **Clear all blocks in track** → right-click track header → "Clear Track"

### Timeline Markers (macOS)
- **Add marker** → Cmd+M at playhead position
- **Marker uses** → label important points (e.g., "Start Export", "Text Entry", "Camera Cut")
- **Navigate between markers** → Cmd+Shift+M (next), Cmd+Shift+Y (previous)
- **Remove marker** → right-click marker → "Remove" or Cmd+Delete / Ctrl+Delete

## 📱 iOS/iPadOS: Timeline Actions & Operations

### Undo/Redo History (iOS/iPadOS)
- **Shake to undo** → iOS equivalent of ⌘Z
- **Three-finger tap** → redo
- **History depth** → 15 actions by default (configured in Settings)
- **Timeline-specific** → undoes block creation, deletion, moves, curve changes

### Selecting Multiple Blocks (iOS/iPadOS)
- **Drag-select** → click and drag over a region of timeline → selects all blocks overlapping
- **Shift-tap** → add/remove individual block from selection
- **Long-press block** → toggle selection
- **Operations on selection** → delete, copy, paste, move en masse

### Deleting Blocks (iOS/iPadOS)
- **Select block(s)** → tap Delete button or swipe left on block
- **Swipe left** → reveals Delete button
- **Undo immediately** → shake to undo or tap "Undo" banner
- **Clear all blocks in track** → track header menu → "Clear Track"

### Timeline Markers (iOS/iPadOS)
- **Add marker** → tap marker icon in toolbar at playhead position
- **Marker uses** → label important points (e.g., "Start Export", "Text Entry", "Camera Cut")
- **Navigate between markers** → next/previous marker buttons in toolbar
- **Remove marker** → tap marker → "Remove" option

## 📐 Timeline Markers (Both Platforms)

### Marker System Overview
- **Bookmark important points** in the timeline for quick navigation
- **Use cases**: sync overlay text with specific frame, mark start of device animation, highlight key poses

### Adding a Marker
1. **Navigate** playhead to desired timestamp
2. **Press Cmd+M (macOS) / Tap marker icon (iOS/iPadOS)**
3. **Marker appears** at playhead position with default name "Marker 1"
4. **Rename marker** → double-click (macOS) or tap name (iOS/iPadOS) → enter custom name (e.g., "Intro", "Device Swap")

### Navigating Between Markers
- **Previous marker** → Cmd+Shift+Y (macOS) / Previous marker button (iOS/iPadOS)
- **Next marker** → Cmd+Shift+M (macOS) / Next marker button (iOS/iPadOS)

### Removing a Marker
- **Right-click marker** → "Remove" (macOS)
- **Swipe left on marker** → "Remove" (iOS/iPadOS)
- **Select marker** → Delete key (macOS) / Tap Delete (iOS/iPadOS)

## 🛠️ UI Elements Referenced (macOS)

- **Timeline toolbar** → Record button, Play/Pause, Scrub controls (top of window)
- **Playhead** → vertical line, navigable via Space, arrows, click, timestamp
- **Track rows** → per-device motion blocks with colored bars (left side of timeline)
- **Motion blocks** → colored bars representing animation segments; editable via drag
- **Transition curve picker** → inspectors curve selection for each block (right inspector panel)
- **Base transform gaps** → space between blocks; editable for resting pose (gap click)
- **Keyframe diamonds** ▶ → add/remove manual keyframes per property (inspector)
- **Property rows** → Position X/Y, Rotation, Scale X/Y, Opacity in block inspector
- **Motion path toggle** → viewport overlay showing animation trajectory (view toolbar)
- **Undo/redo** → ⌘Z / Ctrl+Z and ⌘ShiftZ / Ctrl+Shift+Z (keyboard shortcuts)
- **Selection methods** → drag-select, Shift-click, Cmd-click/Ctrl-click (above timeline)
- **Delete key** → remove selected blocks
- **Marker system** → Cmd+M / Ctrl+M for bookmarking timeline points (keyboard)
- **Fit to width** → double-click track header or toolbar button (view options)

## 🛠️ UI Elements Referenced (iOS/iPadOS)

- **Timeline toolbar** → Record button, Play/Pause, Scrub controls (bottom of screen)
- **Playhead** → circular handle, navigable via drag, tap, timestamp (bottom/toolbar)
- **Track rows** → per-device motion blocks with colored bars (left side of timeline)
- **Motion blocks** → colored bars representing animation segments; editable via drag
- **Transition curve picker** → inspector curve selection for each block (bottom/right inspector)
- **Base transform gaps** → space between blocks; editable for resting pose (gap touch-and-hold)
- **Keyframe diamonds** ▶ → add/remove manual keyframes per property (inspector tap)
- **Property rows** → Position X/Y, Rotation, Scale X/Y, Opacity in block inspector
- **Motion path toggle** → viewport overlay showing animation trajectory (view toggle)
- **Undo/redo** → shake-to-undo and three-finger tap (gesture commands)
- **Selection methods** → drag-select, Shift-tap, long-press (gesture selection)
- **Delete** → tap Delete or swipe left on block
- **Marker system** → marker icon in toolbar for bookmarking timeline points (toolbar button)
- **Fit to width** → double-tap track header or pinch-to-zoom (gesture zoom)