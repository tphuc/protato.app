# Animation Guide for Protato

## Philosophy

Protato's animation system is built around a simple idea: **position your device, capture that position, and let the system handle the motion between captured poses.**

You don't write keyframes like in traditional animation software. You don't deal with easing curves or bezier handles unless you want to. The system is designed for product mockup videos — where a phone needs to rotate, zoom, pan, or slide at specific moments, synced to video playing on its screen.

The core workflow is:

> **Scrub → Pose → Capture → Repeat**

Scrub the playhead to a moment, pose the device with gestures, capture it as a "block," and repeat. The system automatically interpolates smooth motion between blocks.

---

## Key Concepts

### The Timeline

The timeline is the horizontal strip at the bottom of the editor. It shows:

- **A ruler** with time markings (seconds)
- **A playhead** (orange vertical line) — drag it to scrub through time
- **Tracks** — one row per device in your scene
- **Animation blocks** — purple bars representing captured poses
- **Media clips** — orange bars representing video segments on the device screen

### Animation Blocks

An animation block (purple bar) is a **held position** — a moment where the device holds a specific pose. Every block has:

- **A start time and duration** — set by dragging the block's edges or moving it
- **A transform** — the scale, rotation, and position you captured
- **Transitions** — automatic ease-in and ease-out at the block's beginning and end

Think of blocks as "podium moments" — the device moves *into* a position, *holds* it for a while, then moves *out* to the next pose.

### Media Clips

Media clips (orange bars) represent the video or image playing on the device's screen. They are independent from animation blocks — you can trim, split, or speed up the video without affecting the device's motion.

### Default State

Every device has a default state — its resting position at times when no animation block is active. Usually this is the device's position when you first added it to the scene. The device will always return to this default pose during gaps between blocks and at the start/end of the timeline.

---

## The Workflow

### Step 1: Set Up Your Scene

1. Add one or more devices to the scene
2. Position them in 3D space (use drag, rotate, pinch gestures on the canvas)
3. Load a video or image onto each device's screen
4. The timeline automatically shows your media clips — the total duration matches your video

### Step 2: Scrub to a Moment

- Drag the **playhead** (orange line) along the timeline ruler to the moment where you want the device to strike a pose
- The 3D view updates in real time to show what the animation looks like at that point

### Step 3: Pose the Device

- Use **tap to select** a device (either on the canvas or in the timeline sidebar)
- Drag the device to reposition it
- Pinch to scale it
- Use two-finger rotate to yaw/pitch/roll it
- The device moves freely — you're not yet recording

### Step 4: Capture a Block

With the playhead at your desired moment and the device posed:

- Click the **"+" (Add Block)** button in the timeline toolbar
- A purple block appears at that moment, holding the device in its current pose
- The block automatically gets smooth transitions at its start and end

Alternatively: scrub to an empty spot between two blocks, pose the device, and the system will automatically offer to capture it.

### Step 5: Refine

- **Move a block**: drag it left or right along the timeline
- **Resize a block**: drag its leading or trailing edge
- **Delete a block**: select it and use the delete action
- **Adjust transitions**: double-tap a block to open the transitions popover

### Step 6: Preview

- Press **Play** to watch the full animation loop
- The device moves through all captured poses with smooth transitions
- Video plays in sync on the device screen
- Scrub to any point to inspect the motion

### Step 7: Export

- When you're happy, choose export
- The system bakes every frame (transforms + video) into a high-quality video file
- The result shows your devices moving exactly as previewed

---

## Transition Controls

Each block has three transition settings accessible from the **Transitions Popover** (double-tap a block):

| Setting | Default | What It Does |
|---|---|---|
| **Ease In** | 0.35s | How long the device takes to settle *into* this block's pose |
| **Ease Out** | 0.35s | How long the device takes to depart *from* this block's pose |
| **Curve** | Smooth | The easing style for both transitions |

### Curve Types

| Curve | Feel |
|---|---|
| **Linear** | Mechanical, constant speed — good for robotic or mechanical movements |
| **Ease In** | Starts slow, ends fast — good for dramatic entrances |
| **Ease Out** | Starts fast, ends slow — good for settling into position |
| **Ease In/Out** | Smooth acceleration and deceleration — good for natural motion |
| **Smooth** | The smoothest option — default for most scenarios |

### Hold Region

Every block has a **hold region** in the middle — the portion between the ease-in and ease-out. During this region, the device holds its pose steady. This is also where live recording works (see below).

---

## Recording Mode — Animate by Dragging

Instead of the capture-and-repeat workflow, you can **record motion live**:

1. Scrub to a block's hold region (the middle section between its transition edges)
2. Start playback (or pause at the right moment)
3. Drag the device on the canvas — your changes are recorded into that block in real time
4. The block's pose updates instantly

This is useful for fine-tuning a specific pose while seeing it in context.

---

## Editing Media Clips

### Trimming

- Drag the leading or trailing edge of an orange clip bar to trim
- Trimming the start shifts the source video's start time
- Trimming the end extends or shortens the clip
- **Ripple effect**: trimming a clip shifts all animation blocks that come after it, keeping everything in sync

### Splitting

- Select a clip and use the **Split** action to cut it at the playhead position
- Both resulting clips must be at least 0.5 seconds long
- Useful for applying different speeds to different sections of video

### Speed

- Double-tap a clip to open the **Speed Popover**
- Adjust the playback speed multiplier
- Speeding up a clip shortens its duration on the timeline (and vice versa)
- Minimum speed: 0.1x

### Deleting a Clip

- Select a clip and delete it
- The total timeline duration must remain at least 1 second
- All animation blocks that fell within the deleted clip's range are removed or trimmed

---

## Multiple Devices

When you have multiple devices in the scene:

- Each device gets its own track row in the timeline
- Select a device to work on it by tapping its label in the timeline sidebar or tapping it on the canvas
- Animation blocks are per-device — each device can have its own set of poses
- Media clips are per-device — each device can play its own video
- All devices animate simultaneously during playback
- Editing media clips (trim, split, speed) on one device ripples blocks across **all** devices to keep everything aligned

---

## Undo and Redo

- **Undo** reverses your last action
- **Redo** restores a reversed action
- The system keeps the last 5 significant actions
- Rapid edits (like dragging a slider) are grouped into a single undo step

---

## Tips and Best Practices

### Start Simple

Begin with just 2-3 blocks. Get the timing right before adding more complexity. A product video with 3 well-placed poses often looks better than one with 12.

### Use the Hold Region

The most natural motion comes from the hold region — where the device sits still. Don't feel like every moment needs a transition. Long holds with short transitions between them read as "the device moves to a new position for a new feature."

### Default State as Home Base

Set your device's default state as a neutral, front-facing position. The device will always return there during gaps, giving the viewer a "reset" moment between animated sequences.

### Transitions Are Your Friend

The default 0.35s smooth transition works for most cases. Increase it for slow, cinematic movements. Decrease it for snappy, energetic cuts. Set it to 0 for instant cuts (but this can feel jarring — use sparingly).

### Sync Motion with Video

Think about what's happening on the screen when you plan your blocks. A zoom-in animation block works best when the video shows a detail worth highlighting. A rotation works best during a transition in the video itself.

### Preview Often

Scrub back and forth through your animation frequently. The 3D view updates instantly, making it easy to spot timing issues.

---

## Interface Overview

```
┌─────────────────────────────────────────────────┐
│                    3D Canvas                      │
│  (Pose devices with drag, pinch, rotate)          │
│                                                   │
│         [Device 1 - front view]                    │
│                                                   │
├─────────────────────────────────────────────────┤
│  Timeline Toolbar:                                │
│  [+] Add Block  [Split]  [↩ Undo]  [↪ Redo]      │
│  [🔍 Zoom -] [━━━━━━━━━] [🔍 Zoom +]             │
├─────────────────────────────────────────────────┤
│  Sidebar │  Ruler  │  Track Area                  │
│  ─────── │ 0  1  2 │ ┌──┬──────┬──┐              │
│  📱 Phn1 │         │ │P1│ Hold │P2│ ← block      │
│          │         │ └──┴──────┴──┘              │
│          │         │ ████████████████ ← media     │
│  📱 Phn2 │         │    ┌──┬──────┬──┐           │
│          │         │    │P1│ Hold │P2│            │
│          │         │ ████████████████             │
├─────────────────────────────────────────────────┤
│   ⏪ ◀ ⏸ ▶  ⏩    0:00 / 5.0s                   │
└─────────────────────────────────────────────────┘
```

### Timeline Elements

| Element | Location | Interaction |
|---|---|---|
| **Playhead** | Vertical orange line across tracks | Drag to scrub |
| **Ruler** | Top of track area | Tap to seek, shows time marks |
| **Animation Block** | Purple bar on a track | Tap to select, drag to move, drag edges to resize, double-tap for transitions |
| **Media Clip** | Orange bar on a track | Tap to select, drag edges to trim, double-tap for speed, right-click for split/delete |
| **Device Label** | Left sidebar | Tap to select that device |
| **Play Button** | Below timeline | Start/stop preview playback |

---

## Common Questions

**Why does my device jump back to a different position when I scrub?**

That's the default state. The device returns to its resting pose during gaps. If you want it to stay posed throughout, add blocks that cover the entire timeline duration.

**I moved a clip and all my blocks shifted — what happened?**

That's the ripple effect. When you trim a clip's start, all blocks after that point shift to stay synchronized with the video. This usually helps keep things aligned, but you can undo if it wasn't what you wanted.

**Can I have overlapping blocks?**

No — blocks can't overlap on the same device. The system prevents this to keep the motion unambiguous. You can, however, have blocks that are very close together (the transition regions can overlap visually, but the block bodies cannot).

**Why is there a minimum 0.5s for clips?**

Very short clip segments are hard to work with and can cause issues with video playback seeking. The 0.5s minimum keeps the timeline usable.

**Can I animate the camera too?**

Not directly — the camera is independent of the animation system. You control the camera manually with canvas gestures. This lets you choose different camera angles for preview and export without redoing your animation.
