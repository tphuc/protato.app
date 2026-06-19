# Protato for Mac — A User's Guide

Welcome to Protato! This guide walks through everything you can do in the Mac app and where to find it. No technical jargon — just what each button does and how to get things done.

---

## The Big Picture: What You're Looking At

When you open Protato, you see three columns:

```
┌─────────────────┬──────────────────────────────┬──────────────────┐
│  Left Sidebar   │       Center Canvas          │  Right Inspector │
│  (Editor Tools) │   (Your 3D Preview)          │  (Adjust Stuff)  │
├─────────────────┤                              ├──────────────────┤
│ • Aspect Ratio  │   Background → Shadow →      │  Devices / Text  │
│ • Camera FOV    │   → 3D Models → Text         │  toggle at top   │
│ • Background    │   → Selection Overlay        │                  │
│ • Lighting      │                              │  Below that:     │
│ • Presets       │   Timeline appears           │  settings for    │
│                 │   at bottom when             │  whichever mode  │
│                 │   Animation mode is on       |  you're in       │
└─────────────────┴──────────────────────────────┴──────────────────┘
```

At the very top of the window is the **toolbar** — that's where you'll find the export button, text tool, grid toggle, and Photo/Animation mode switcher.

---

## 1. Left Sidebar — Set Up Your Scene

This is where you control the overall look. Every section is stacked vertically — just scroll down.

### Aspect Ratio
- **What it does**: Changes the shape of your canvas (like choosing portrait vs landscape for a photo)
- **Where**: First section in the sidebar
- **How**: Click one of the ratio tiles — 1:1 (square), 9:16 (vertical for social media), 16:9 (widescreen), etc.
- **Choice of 10**: 1:1, 3:4, 4:3, 4:5, 5:4, 9:16, 9:19.5, 2:3, 3:2, 16:9

### Camera Field of View
- **What it does**: Zoom-like control for the 3D camera. Lower numbers = more zoomed in / flatter look. Higher numbers = wider view / more depth
- **Where**: Below the ratio picker
- **How**: Drag the slider between 10 and 20. Default is 15. You'll see the canvas update instantly.

### Background
- **What it does**: Sets what appears behind your phone
- **Where**: Below the FOV slider
- **How**: Pick a type first, then customize:
  - **None** — shows a checkerboard pattern (great if you want a transparent export)
  - **Solid** — pick any single color
  - **Gradient** — choose from 80+ two-color gradients, or make your own with multiple color stops
  - **Mesh** — choose from 30+ smooth blended mesh gradients (like Apple's marketing materials)
  - **Image** — pick any photo from your computer

### Lighting
- **What it does**: Controls how light hits your phone model — makes it look glossy, dramatic, or flat
- **Where**: Below background settings
- **How**:
  - **Presets**: Choose Studio (balanced), Dramatic (strong contrasts), or Flat (even, soft)
  - **Per-light sliders**: Adjust Key, Fill, Rim, and Back lights individually (drag sliders from 0 to 10,000)
  - **Exposure**: Global brightness multiplier (0.2 to 2.0)
  - **IBL (Image-Based Lighting)**: Adds realistic reflections from a virtual studio environment

### Scene Presets
- **What it does**: Save your entire scene setup or load one you saved earlier — like a "save game" for your mockup
- **Where**: At the bottom of the sidebar
- **How**: Click a preset to apply it (they filter by aspect ratio). The app also auto-saves your session every 60 seconds and restores it when you come back.

---

## 2. Center Canvas — Your 3D Preview

This is the big area in the middle where you see your phone model. Everything is rendered live — no waiting.

### What's Happening in the Canvas (bottom to top):

1. **Background** renders first (the solid/gradient/image you chose in the sidebar)
2. **Shadow** appears behind the phone — soft and blurry, matching the phone's position
3. **Text behind phone** (if you placed any) renders behind the device
4. **The 3D device** renders on top — you can orbit, zoom, and rotate the view
5. **Text in front of phone** (if any) renders on top of everything
6. **Selection outline** appears around the selected device when in Devices mode

### Interacting with the Canvas

| What You Want to Do | How to Do It |
|---|---|
| **Spin the view around the phone** | Click and drag anywhere on the canvas (one finger) |
| **Zoom in/out** | Pinch with two fingers on your trackpad, or hold Option+Shift and drag |
| **Tilt/rotate the view** | Two-finger rotate gesture |
| **Pan (move side to side)** | Two-finger scroll |
| **Move the phone itself** | Drag directly on the phone — drag horizontally to yaw (turn it), vertically to pitch (tilt toward/away) |
| **Resize the phone** | Pinch while dragging on the phone |
| **Rotate the phone** | Two-finger rotate while on the phone |

### The Grid Overlay
- **What it does**: Shows a 3×3 grid on your canvas to help with composition and centering
- **Where**: Toolbar button that looks like three stacked squares
- **When active**: The icon turns orange

---

## 3. Right Inspector — Fine-Tune Your Device

The top of the right column has a switch with two options: **Devices** and **Text**. Everything below changes based on which one you pick.

### Devices Mode

#### Device List
- **What it does**: Shows all the phones/tablets/laptops in your scene
- **How**: Click a device to select it. Use the + / − buttons to add or remove devices. You can have multiple devices in one scene.
- **Adding a device**: Opens a sheet where you can choose from 18 different models:
  - iPhone 15 Pro Max (Black, Natural, White)
  - iPhone 17 (Black, White, Mist Blue, Lavender, Sage)
  - iPhone 17 Air (Cloud White, Light Gold, Sky Blue, Space Black)
  - iPhone 17 Pro Max (Cosmic Orange, Deep Blue, Silver)
  - iPad A16 (Silver)
  - MacBook Pro 14" (Space Black)

#### Transform Controls
- **What it does**: Precise numeric sliders for positioning the selected device
- **Where**: Below the device list
- **Sliders**: Scale (0.5× to 3×), Yaw (spin left/right), Pitch (tilt up/down), Roll (rotate flat), and X/Y/Z offset (nudge position)

#### Screen Material
- **What it does**: Controls how glossy or matte the phone screen looks
- **Where**: Below the transforms
- **Sliders**: Metallic, Roughness, Glow (Emissive), Clearcoat, Clearcoat Roughness, Shine (Specular)
- **Quick presets**: Glossy/Metallic, Matte, Default — one-click to switch

#### Shadow Settings
- **What it does**: Controls the soft shadow behind the device
- **Where**: Below materials
- **Sliders**: Opacity (how dark), Radius (how blurry/soft), plus an on/off toggle

### Text Mode

#### Text Items
- **What it does**: Lists all the text labels you've added
- **Where**: Top of the inspector in Text mode
- **How**: Click + to add text, − to delete, duplicate button to copy

#### Text Editor
- **What it does**: Full control over how your text looks
- **Where**: Below the items list (appears when you select a text item)
- **What you can change**:
  - **The text itself**: Click in the text box and type
  - **Font**: System, Rounded, Serif, or Monospaced
  - **Weight**: 9 options from Ultra Light to Black
  - **Size**: Slider (small to large)
  - **Color**: Solid color, or multi-color gradient fill
  - **Outline (Stroke)**: Add a colored border around your text with adjustable width
  - **Alignment**: Left, Center, or Right
  - **Position**: Drag the X/Y sliders to move text around the canvas
  - **Scale**: Make text bigger or smaller (0.2× to 4×)
  - **Rotation**: Spin the text (−180° to 180°)
  - **Opacity**: Make it see-through (0 = invisible, 1 = solid)
  - **Placement**: Behind the phone or in front of it
  - **Fade Animation**: Fade in/fade out on the timeline with adjustable timing

---

## 4. The Toolbar — Your Main Actions

Across the top of the window:

| Button | What It Does |
|--------|-------------|
| **Add Text (T icon)** | Adds a new text label to your scene. Automatically switches the right panel to Text mode so you can edit it |
| **Import (folder icon)** | Opens a file picker to add a screenshot or video to the phone's screen. Supports PNG, JPG, HEIC, MP4, MOV |
| **Grid (3×3 squares)** | Shows/hides a composition grid on the canvas |
| **Photo / Animation switch** | Toggles between still image editing and animation mode |
| **Settings (gear icon)** | Opens Protato's settings window (subscription, account, support) |
| **Export (arrow-up button)** | Opens the export settings popup where you choose format, quality, and hit export |

### Photo vs Animation Mode

In the toolbar, there's a segmented switch:

**Photo mode** (default):
- Everything is static — you position, light, and export a single image
- The timeline is hidden
- Export gives you PNG or JPEG options with 1×, 2×, or 3× quality

**Animation mode**:
- A **timeline** appears at the bottom of the canvas
- You can add keyframes (snapshots of the camera and device position at different moments)
- Playing the timeline animates between those positions
- The timeline has:
  - **Play/Pause button** to preview your animation
  - **Time ruler** with tick marks showing seconds
  - **Animate View button** — captures the current state (camera angle, phone position) at that moment
  - **Add Clip button** — for video segments playing on the phone screen
  - **Undo/Redo buttons** — just in case
  - **Zoom slider** — zoom in/out on the timeline itself
- Export gives you video options: 720p, 1080p, or 1440p

---

## 5. Export — Saving Your Work

### Exporting a Still Image

1. Set up your scene the way you want it
2. Click the **Export** button in the toolbar
3. A popup appears with options:
   - **Format**: PNG (preserves transparency, best quality) or JPEG (smaller file)
   - **Quality Scale**: 1×, 2×, or 3× (higher = bigger, sharper image)
   - If you're a **Free user**: you'll see how many credits you have left (5 free)
   - Sign in with Apple to get bonus credits
4. Click **Export** again in the popup
5. Choose where to save the file on your Mac

### Exporting a Video

1. Switch to **Animation mode** using the toolbar toggle
2. Build your animation (add keyframes, video clips on screen, etc.)
3. Click the **Export** button
4. Choose your **resolution**: 720p, 1080p, or 1440p
5. Click **Export**
6. A progress bar appears on screen — don't close the app while it's rendering
7. When it's done, choose where to save the video

### What Actually Happens During Export

Protato composites several layers to create your final image or video:
- The background you chose
- Soft device shadow
- Any text placed behind the phone
- The 3D phone model with its screen content
- Any text placed in front of the phone

Everything is merged into a single final image or video file.

---

## 6. Importing Screenshots & Videos Onto the Phone

Want to put your app's screenshot on the phone screen?

1. Click the **Import button** (folder icon) in the toolbar
2. Select an image (PNG, JPG, HEIC) or video (MP4, MOV) from your Mac
3. It appears on the phone screen immediately with realistic perspective and reflections
4. You can also drag and drop files directly from Finder onto the canvas

**For videos**: The video plays on the device screen in real-time. In animation mode, it syncs to the timeline.

---

## 7. Working with Multiple Devices

You can have multiple phones (or a phone + iPad + MacBook) in the same scene.

- Click **+** in the device list (right inspector, Devices mode) to add another device
- Each device has its own position, rotation, material, shadow, and screen content
- Click on a device in the list (or tap the device on the canvas) to select it
- Selected device shows a highlighted outline and all the transform/material controls apply to it

---

## 8. Session Management & Auto-Save

Protato saves your progress automatically:

- **Every 60 seconds**: your scene is saved to your Mac
- **When you quit**: the final state is saved
- **Next time you open the app**: you pick up right where you left off

You can also manually export/import presets as JSON files (advanced users use this to share setups between projects or with others).

---

## 9. Free vs Pro

| Feature | Free | Pro |
|---------|------|-----|
| Exports | 5 credits | Unlimited |
| Sign in | Optional (bonus credits) | Not required but synced via iCloud |
| All features | ✓ | ✓ |
| (No feature lock — everything is available to try) | | |

- **Free users**: Start with 5 export credits. Sign in with Apple to get more.
- **Pro**: Subscribe for unlimited exports.
- Your subscription works on both Mac and iPhone/iPad.

---

## Quick Reference: Where Is Everything

| Feature | Location |
|---------|----------|
| Canvas aspect ratio | Left sidebar, top section |
| Camera zoom/FOV | Left sidebar, second section |
| Background color/gradient/image | Left sidebar, third section |
| Lighting presets & controls | Left sidebar, fourth section |
| Scene presets (save/load) | Left sidebar, bottom |
| The 3D preview | Center of the window |
| Device list (add/remove phones) | Right panel, Devices mode |
| Phone position/rotation/scale | Right panel, Devices mode → Transform |
| Screen gloss/matte controls | Right panel, Devices mode → Material |
| Shadow controls | Right panel, Devices mode → Shadow |
| Text editor (fonts, colors, layout) | Right panel, Text mode |
| Add text to scene | Toolbar (T icon) |
| Import screenshot/video | Toolbar (folder icon) |
| Show/hide composition grid | Toolbar (3×3 squares) |
| Switch Photo/Animation mode | Toolbar (segmented switch) |
| App settings (subscription/account) | Toolbar (gear icon) |
| Export image or video | Toolbar (Export button) |
| Timeline (in Animation mode) | Bottom of the canvas |

---

*Protato for Mac — Version 1.0 | App Store ID: 6761610488*
