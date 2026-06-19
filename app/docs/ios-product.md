# Protato for iPhone & iPad — A User's Guide

Welcome to Protato for iOS! This guide walks through everything you can do on your iPhone or iPad and where to find it. The app works the same on both — just the screen size changes.

---

## The Big Picture: What You're Looking At

Protato on iOS is a single full-screen view. Unlike the Mac version with three columns, on iPhone/iPad everything stacks vertically, and settings open as sheets that slide up from the bottom.

```
┌──────────────────────────────────┐
│  Toolbar                         │
│  [Settings]  [Photo|Animation]  [Gear] [Export] │
├──────────────────────────────────┤
│  Interaction Mode + Canvas Tools │
│  [Orbit] [Pan] [Text]  [📱] [+] [⊞]  │
├──────────────────────────────────┤
│                                  │
│       3D Canvas Preview          │
│   (Background → Shadow →         │
│     → Device → Text)             │
│                                  │
├──────────────────────────────────┤
│  Timeline (Animation mode)       │
│  — or —                          │
│  Text Editor Panel (Text mode)   │
└──────────────────────────────────┘
```

When you tap the **Settings button** (sliders icon in the top-left), a **bottom sheet** slides up with a row of tabs at the bottom — swipe horizontally to find the setting you need.

---

## 1. Top Toolbar — Where Everything Starts

The toolbar sits at the very top of the screen:

| Button | What It Does |
|--------|-------------|
| **Settings** (sliders icon, left side) | Opens the main Settings Sheet — a bottom panel where you control aspect ratio, background, lighting, materials, and more |
| **Photo / Animation switch** (center) | Toggles between still image editing and video animation mode |
| **User Settings** (gear icon, right side) | Opens your account screen — sign in, check subscription, get support |
| **Export** (arrow-up icon, right side) | Opens the export options where you pick format, quality, and save your work |

---

## 2. Canvas Controls — Floating Above the 3D Preview

Right below the toolbar, you'll see a row of buttons in glass-effect capsules. These are your main interaction tools:

### Interaction Mode Picker (3 options)

This three-segment control lets you choose how you interact with the canvas:

| Mode | Icon | What It Does |
|------|------|-------------|
| **Orbit** | Phone with curved arrow | Default mode. Drag to spin the camera around the phone. Pinch to zoom. Two-finger rotate to tilt the view |
| **Pan** | Phone with 4-way arrows | Drag to slide the phone itself left/right/up/down. Pinch to make the phone bigger or smaller |
| **Text** | Text box "A" icon | Switches to text editing. All touch gestures on the canvas control text, not the phone |

### Canvas Action Buttons

To the right of the mode picker, three more buttons:

| Button | What It Does |
|--------|-------------|
| **Devices** (phone icon) | Opens a sheet where you can add, remove, or switch between phone/iPad/MacBook models |
| **Add Text** (T icon) | Adds a new text label to your scene and opens the text editor panel at the bottom |
| **Grid** (3×3 squares) | Shows/hides a composition grid on the canvas to help center things |

---

## 3. The Settings Sheet — Your Main Control Panel

Tap the **Settings button** (sliders icon, top-left) and a bottom sheet slides up. At the bottom of this sheet is a **horizontal row of tabs** — swipe left/right to browse them. Each tab shows different controls in the area above.

Here's every tab, from left to right:

### Ratio Tab
- **What it does**: Changes the shape of your canvas
- **How**: Swipe through the horizontal options — 1:1 (square), 9:16 (vertical for Instagram/TikTok), 16:9 (widescreen), etc.
- **10 choices**: 1:1, 3:4, 4:3, 4:5, 5:4, 9:16, 9:19.5, 2:3, 3:2, 16:9
- **Sheet height**: Short (230pt)

### FOV (Field of View) Tab
- **What it does**: Like a zoom control for the 3D camera. Lower = more zoomed in. Higher = wider view
- **How**: Drag the slider from 10 to 20. You'll see the canvas update live behind the sheet
- **Sheet height**: ~200pt

### Model Tab
- **What it does**: Pick which phone (or iPad, or MacBook) is in your scene
- **How**: Scroll horizontally through the device options and tap one:
  - iPhone 15 Pro Max (Black, Natural, White)
  - iPhone 17 (Black, White, Mist Blue, Lavender, Sage)
  - iPhone 17 Air (Cloud White, Light Gold, Sky Blue, Space Black)
  - iPhone 17 Pro Max (Cosmic Orange, Deep Blue, Silver)
  - iPad A16 (Silver)
  - MacBook Pro 14" (Space Black)
- **Sheet height**: 260–320pt — drag the sheet handle up for a taller view

### Background Tab
- **What it does**: Sets what appears behind your phone
- **How**: A segmented control at the top lets you choose the type, then customize below:
  - **None** — checkerboard pattern (use this if you want a transparent PNG later)
  - **Solid** — pick any color from the palette, or tap the color wheel for more
  - **Gradient** — choose from 80+ two-color gradient presets
  - **Mesh** — choose from 30+ smooth blended mesh gradients (like Apple's marketing look)
  - **Image** — pick a photo from your library, or import from Files
- **Sheet height**: 430–500pt — the tallest settings panel

### Lighting Tab
- **What it does**: Controls how light hits your device
- **How**: 
  - Pick a **preset**: Studio (balanced), Dramatic (bold contrasts), or Flat (even lighting)
  - Drag the **Key**, **Fill**, **Rim**, and **Back** light sliders to adjust each light individually
  - **Exposure** slider controls overall brightness
  - **IBL Intensity** controls how strong the environment reflections are
- **Sheet height**: 380–420pt

### Material Tab
- **What it does**: Controls how the device screen looks — glossy, matte, or something in between
- **How**: Drag the sliders:
  - **Metallic** — makes the screen look like glass or plastic
  - **Roughness** — how smooth or textured the surface appears
  - **Glow (Emissive)** — screen brightness
  - **Clearcoat** — adds a glossy top layer (like a phone with a shiny glass front)
  - **Shine (Specular)** — how sharp reflections are
  - **Quick presets**: Tap Glossy, Matte, or Default to set all sliders at once
- **Sheet height**: 400–420pt

### Media Tab
- **What it does**: Put a screenshot or video onto the phone's screen
- **How**: Tap the button to choose from your **Photos library** or browse **Files** on your phone. Pick any PNG, JPG, HEIC (image) or MP4, MOV (video). It appears on the phone instantly with real reflections
- **Sheet height**: ~230pt

### Presets Tab
- **What it does**: Save or load a full scene setup — like loading a saved game
- **How**: Tap a preset to apply it. The app also auto-saves every 60 seconds, so when you come back, everything's right where you left it
- **Sheet height**: ~250pt

### Transform Tab
- **What it does**: Fine-tune the selected device's position with precise sliders
- **How**: Adjust **Scale** (0.5× to 3×), **Yaw** (spin), **Pitch** (tilt), **Roll** (rotate flat), and **Offset X/Y/Z** (nudge position)
- **Sheet height**: 180–360pt — slide the handle up for more controls

### Shadow Tab
- **What it does**: Controls the soft shadow behind the device
- **How**: **Opacity** slider (how dark), **Radius** slider (how blurry/soft), plus an on/off switch
- **Sheet height**: ~250pt

> **Pro tip**: You can interact with the canvas behind the settings sheet while it's open — just tap outside the sheet area to adjust the camera view, then tap back into the sheet to tweak more settings.

---

## 4. The 3D Canvas — Your Preview

The big area in the middle is your live 3D preview. Everything updates in real time — no waiting for renders.

### What's on Screen (bottom to top):

1. **Background** (the solid/gradient/image you chose)
2. **Device shadow** (soft blur behind the phone)
3. **Text behind the phone** (if you placed any there)
4. **The 3D phone model** with your screen content on it
5. **Text in front of the phone** (if any)
6. **Selection outline** around the selected device
7. **Grid overlay** (if you turned it on)

### Interacting with the Canvas

| What You Want to Do | How to Do It |
|---|---|
| **Spin the camera around the phone** | Switch to **Orbit** mode, then drag your finger on the canvas |
| **Zoom in/out** | Pinch with two fingers (in Orbit mode) |
| **Rotate the camera view** | Two-finger rotate (in Orbit mode) |
| **Move the phone itself** | Switch to **Pan** mode, then drag anywhere to slide the phone. Pinch to resize |
| **Edit text on canvas** | Switch to **Text** mode — now all your touches work on the text layer |

---

## 5. Text Mode — Adding Words to Your Scene

Tap the **Text mode button** (the "A" icon in the canvas controls), then tap **Add Text** (the T+ button next to it). A text label appears, and the **Text Editor Panel** slides up from the bottom.

### The Text Editor Panel (bottom of screen)

The text editor on iOS is a **tabbed panel** — tap one of the 5 tabs at the top to switch what you're editing:

| Tab | What You Can Change |
|-----|-------------------|
| **Presets** | Quick text style presets and a font size slider |
| **Color** | Text fill color — solid color or multi-stop gradient |
| **Stroke** | Outline around your text — turn it on, pick width and color |
| **Style** | Font family (System/Rounded/Serif/Monospaced), weight (9 options), bold/italic, alignment, tracking (letter spacing) |
| **Layout** | Text position on screen (X/Y), scale, rotation, opacity, and whether it appears **behind** or **in front of** the phone |

- Tap the **text directly on the canvas** to edit what it says — the keyboard pops up
- Tap the **keyboard down button** (bottom-right of keyboard) to dismiss it
- Tap **Delete** (trash icon) to remove the selected text
- Tap the **X** or swipe the panel down to close it

---

## 6. Photo vs Animation Mode

The segmented switch in the center of the toolbar toggles between two modes:

### Photo Mode
- Everything is static — set up your scene and export a single image
- No timeline visible
- Export gives you PNG or JPEG with 1×, 2×, or 3× quality

### Animation Mode
- A **timeline** appears at the bottom of the canvas
- You add **keyframes** — snapshots of the camera and device position at different moments
- Playing the timeline smoothly animates between those positions
- The timeline has:
  - ▶️ **Play/Pause** button to preview
  - ⏪ **Go to start** button
  - **Time ruler** with tick marks showing seconds
  - **Animate View** — captures the current camera angle + phone position as a keyframe
  - **Add Clip** — adds a video segment to play on the phone screen during the animation
  - **Undo/Redo** arrows
  - **Zoom** slider to zoom in/out on the timeline
- Export gives you **video**: 720p, 1080p, or 1440p

---

## 7. Importing Screenshots & Videos

You can put your app's screenshot onto the phone screen in two ways:

**From the Settings Sheet**:
1. Open Settings (top-left button)
2. Go to the **Media tab**
3. Tap the import button — you can pick from your **Photos library** or **Files app**

**The first time**: The app will ask for permission to access your photos. You can change this later in your iPhone's Settings app.

Once imported, the image or video appears on the phone screen with realistic perspective and reflections. If it's a video, it plays in real-time.

---

## 8. Working with Multiple Devices

You can have more than one phone (or a phone + iPad + MacBook) in the same scene.

1. Tap the **Devices button** (phone icon in the canvas controls) — a sheet opens
2. Tap **+** to add a device, **−** to remove the selected one
3. Each device has its own position, rotation, material, and screen content
4. Tap a device name in the list to select it — the Transform and Material settings in the Settings Sheet now apply to that device

---

## 9. Export — Saving Your Work

### Exporting an Image

1. Set up your scene in **Photo mode**
2. Tap the **Export button** (top-right, arrow-up icon)
3. A sheet appears with options:
   - **Format**: PNG (transparent background, best quality) or JPEG (smaller file)
   - **Quality Scale**: 1×, 2×, or 3× (higher = bigger, sharper)
4. Tap **Export**
5. The iOS **Share Sheet** appears — you can save to Photos, send in Messages, AirDrop, etc.

### Exporting a Video

1. Switch to **Animation mode** in the toolbar
2. Build your animation (add keyframes, video clips, etc.)
3. Tap the **Export button**
4. Choose your **resolution**: 720p, 1080p, or 1440p
5. Tap **Export**
6. A progress bar appears — don't close the app while it's rendering
7. When it's done, the Share Sheet appears to save or send the video

### Free Credits

- **Free users**: Start with 5 export credits
- **Pro subscribers**: Unlimited exports
- Sign in with Apple to get bonus credits (and they sync across your devices via iCloud)
- You'll see your remaining credits in the export sheet

---

## 10. User Settings — Account & Subscription

Tap the **gear icon** in the top-right toolbar to open your account screen:

- **Sign in with Apple** — link your Apple ID to sync credits and subscription across devices
- **Pro status** — see if you're subscribed and how many exports you have left
- **Restore Purchases** — if you subscribed on another device
- **Support** — links to FAQs and help
- **App version info**

---

## 11. Auto-Save & Session Restore

Protato saves your work automatically:

- **Every 60 seconds**: your scene is saved on your device
- **When you switch away**: the current state is saved
- **Next time you open the app**: you pick up right where you left off

No need to manually save anything.

---

## 12. Quick Reference

### Where Everything Is on iOS

| Feature | How to Get There |
|---------|-----------------|
| Aspect ratio | Settings sheet → **Ratio** tab |
| Camera zoom / FOV | Settings sheet → **FOV** tab |
| Choose a device model | Settings sheet → **Model** tab, or tap Devices button on canvas |
| Background color / gradient / image | Settings sheet → **Background** tab |
| Lighting presets & adjustments | Settings sheet → **Lighting** tab |
| Screen gloss / material | Settings sheet → **Material** tab |
| Import a screenshot / video | Settings sheet → **Media** tab |
| Save / load a scene | Settings sheet → **Presets** tab |
| Device position (transform) | Settings sheet → **Transform** tab |
| Shadow settings | Settings sheet → **Shadow** tab |
| Add or switch devices | **Devices button** (📱 icon) above the canvas |
| Add text | **Add Text (T+) button** above the canvas |
| Toggle composition grid | **Grid button** (⊞) above the canvas |
| Switch interaction mode | **Orbit / Pan / Text** picker above the canvas |
| Switch Photo / Animation mode | **Toolbar center toggle** |
| Account & subscription | **Gear icon** (top-right toolbar) |
| Export image or video | **Export button** (top-right toolbar) |
| Timeline (in Animation mode) | Bottom of the screen |
| Text editor (in Text mode) | Bottom panel that slides up |

### Free vs Pro

| | Free | Pro |
|---|---|---|
| Exports | 5 credits | Unlimited |
| Sign in | Optional (more credits) | Not required |
| All features | ✓ | ✓ |
| Device sync | — | iCloud |

---

*Protato for iOS — Version 1.0 | App Store ID: 6761607577*
