# Protato - Overlays Guide

How to add text, images, shapes, and stickers to your scene with per-property animation using the UI (macOS vs iOS/iPadOS).

---

## ➕ macOS: Adding Overlays

### Step 1: Open Overlay Browser (macOS)
- **Click the + (Add Overlay) button** in the toolbar → overlay type selector appears
- **OR** → Select an existing clip in timeline → **right-click** → "Add Overlay"

### Step 2: Select Content Type (macOS)
Four options appear in the modal dialog:

| Content Type | Icon | Use Case |
|--------------|------|----------|
| **Text** | Tt | Titles, captions, lower thirds, call-to-action text |
| **Image** | ✕ | Logos, watermarks, product photos on screen |
| **Shape** | □ | Geometric frames, decorative borders, highlight boxes |
| **Sticker** | 🎨 | Pre-made icons, emoji, decorative elements |

### Step 3: Place Overlay in Scene (macOS)
- **Click your chosen type** → overlay appears in center of 3D preview
- **Drag to reposition** → move behind or in front of the device
- **Resize handles** → drag corners to scale the overlay (option-drag for constrained)

## 📱 iOS/iPadOS: Adding Overlays

### Step 1: Open Overlay Browser (iOS/iPadOS)
- **Tap the + (Add Overlay) button** in the toolbar → overlay type selector appears
- **OR** → Select an existing clip in timeline → **tap and hold** → "Add Overlay"

### Step 2: Select Content Type (iOS/iPadOS)
Four options appear in the modal sheet:

| Content Type | Icon | Use Case |
|--------------|------|----------|
| **Text** | Tt | Titles, captions, lower thirds, call-to-action text |
| **Image** | ✕ | Logos, watermarks, product photos on screen |
| **Shape** | □ | Geometric frames, decorative borders, highlight boxes |
| **Sticker** | 🎨 | Pre-made icons, emoji, decorative elements |

### Step 3: Place Overlay in Scene (iOS/iPadOS)
- **Tap your chosen type** → overlay appears in center of 3D preview
- **Drag to reposition** → move behind or in front of the device (touch drag)
- **Resize** → pinch-to-zoom to scale, drag edges to resize

## 📝 macOS: Text Overlays

### Text Input (macOS)
- **Click the text field** in the overlay inspector → type your caption
- **Default text**: "Your text here"
- **Real-time preview** → updates instantly in 3D view

### Font Selection (macOS)
- **Click the font dropdown** → scrollable list of available fonts
- **Search field** → type font name to filter (e.g., "Helvetica", "Bold")
- **Font sizes** → numeric input or drag slider 8–128pt
- **Pro tip**: System fonts available; custom fonts require project export

### Per-Character Animation (macOS)
- **Enable "Character Animation" toggle** → each character gets its own keyframe track
- **Animate individual letters** → move, rotate, scale per character over time
- **Curve picker** → select transition curve per character (Linear, Ease In, Ease Out, Spring)
- **Use case**: "Typewriter effect", letter-by-letter reveal, word fade-in

### Text Animation Per Frame (macOS)
- **Timeline keyframes** → position X/Y, scale X/Y, rotation, opacity per character
- **Add keyframe** → click the diamond icon next to any property at current playhead position
- **Move playhead** → adjust property value → keyframe auto-updates
- **Copy/paste keyframes** → Option-drag any keyframe to duplicate

### Blend Modes (macOS)
- **Blend mode dropdown** → four options:
  - **Normal** → standard overlay (default)
  - **Multiply** → darkens underlying device screen; good for shadows/tints
  - **Screen** → lightens/glows; good for light leaks, flare effects
  - **Overlay** → combines multiply and screen; increases contrast
- **Real-time preview** → see effect update as you switch modes

### Depth Positioning (macOS)
- **Behind Devices toggle** → overlay renders behind 3D device model
- **In Front of Devices toggle** → overlay renders on top of device screen area
- **Use case**: Text behind device for "in-scene" captions vs. floating captions

## 📱 iOS/iPadOS: Text Overlays

### Text Input (iOS/iPadOS)
- **Tap the text field** in the overlay inspector → type your caption
- **Default text**: "Your text here"
- **Real-time preview** → updates in 3D view

### Font Selection (iOS/iPadOS)
- **Tap the font dropdown** → scrollable list of available fonts
- **Search field** → type font name to filter (e.g., "Helvetica", "Bold")
- **Font sizes** → scroll through size list or drag slider 8–128pt

### Per-Character Animation (iOS/iPadOS)
- **Enable "Character Animation" toggle** → each character gets its own keyframe track
- **Animate individual letters** → move, rotate, scale per character over time
- **Curve options** → scroll through: Linear, Ease In, Ease Out, Ease In-Out, Spring
- **Use case**: "Typewriter effect", letter-by-letter reveal

### Text Animation Per Frame (iOS/iPadOS)
- **Timeline keyframes** → position X/Y, scale X/Y, rotation, opacity per character
- **Add keyframe** → tap diamond icon next to property at current playhead
- **Move playhead** → adjust property value → keyframe auto-updates
- **Copy/paste keyframes** → tap and hold keyframe → "Copy" then "Paste"

### Blend Modes (iOS/iPadOS)
- **Blend mode dropdown** → four options:
  - **Normal** → standard overlay (default)
  - **Multiply** → darkens underlying device screen
  - **Screen** → lightens/glows
  - **Overlay** → combines multiply and screen
- **Real-time preview** → see effect as you switch modes

### Depth Positioning (iOS/iPadOS)
- **Behind Devices toggle** → overlay renders behind 3D device model
- **In Front of Devices toggle** → overlay renders on top of device screen area
- **Use case**: Text behind device for captions vs. floating captions

## 🖼️ macOS: Image Overlays

### Image Import (macOS)
- **Drag image file** onto canvas OR
- **Select "Image" overlay type** → file browser appears
- **Supported**: PNG (transparent), JPEG, HEIC, PNG

### Image Transform (macOS)
- **Drag corners** → resize while maintaining aspect ratio (Shift-drag for constrained)
- **Drag interior** → reposition within scene
- **Rotation handle** (top outside corner) → drag to rotate

### Image Blend Modes (macOS)
- Same four options as text: Normal, Multiply, Screen, Overlay
- **Use Multiply** on logos → creates tinted imprint on device screen
- **Use Screen** on glows → adds light emission effect

### Image Opacity (macOS)
- **Opacity slider** → 0% (invisible) to 100% (opaque)
- **Keyframeable** → animate opacity fade-in/out over timeline (click diamond icon)

## 📱 iOS/iPadOS: Image Overlays

### Image Import (iOS/iPadOS)
- **Drag image file** onto canvas OR
- **Select "Image" overlay type** → file browser sheet appears
- **Supported**: PNG (transparent), JPEG, HEIC, PNG

### Image Transform (iOS/iPadOS)
- **Drag corners** → resize while maintaining aspect ratio (pinch to constrain)
- **Drag interior** → reposition within scene (touch drag)
- **Rotation handle** → drag to rotate (circular handle)

### Image Blend Modes (iOS/iPadOS)
- Same four options as text: Normal, Multiply, Screen, Overlay
- **Use Multiply** on logos → creates tinted imprint on device screen

### Image Opacity (iOS/iPadOS)
- **Opacity slider** → 0% (invisible) to 100% (opaque)
- **Keyframeable** → animate opacity fade-in/out over timeline (tap keyframe icon)

## 🔲 macOS: Shape Overlays

### Shape Types (macOS)
- **Rectangle** (default) → square/rectangle frame
- **Rounded Rectangle** → corners radius controllable
- **Circle** → perfect circle shape
- **Triangle** → geometric accent
- **Polygon** → custom-sided shape (3–8 sides)

### Shape Fill & Stroke (macOS)
- **Fill color picker** → solid color or gradient
- **Stroke width** → numeric input (0–50px)
- **Stroke color** → separate from fill color
- **Opacity** → separate from fill opacity (0–100%)

### Shape Keyframe Animation (macOS)
- **Animate position** → move shape across timeline
- **Animate scale** → grow/shrink shape over time
- **Animate rotation** → spin shape
- **Animate fill color** → color transition over duration
- **Animate stroke width** → expand/shrink border

### Depth Positioning (macOS)
- **Behind Devices / In Front of Devices** → same toggle as text/image overlays

## 📱 iOS/iPadOS: Shape Overlays

### Shape Types (iOS/iPadOS)
- **Rectangle** (default) → square/rectangle frame
- **Rounded Rectangle** → corners radius controllable
- **Circle** → perfect circle shape
- **Triangle** → geometric accent
- **Polygon** → custom-sided shape (3–8 sides)

### Shape Fill & Stroke (iOS/iPadOS)
- **Fill color picker** → select solid color or gradient
- **Stroke width** → scroll numeric input (0–50px)
- **Stroke color** → separate from fill color
- **Opacity** → separate from fill opacity (0–100%)

### Shape Keyframe Animation (iOS/iPadOS)
- **Animate position** → move shape across timeline
- **Animate scale** → grow/shrink shape over time
- **Animate rotation** → spin shape
- **Animate fill color** → color transition over duration
- **Animate stroke width** → expand/shrink border

### Depth Positioning (iOS/iPadOS)
- **Behind Devices / In Front of Devices** → same toggle as text/image overlays

## 🎨 macOS: Sticker Overlays

### Sticker Library (macOS)
- **Click sticker type** → opens scrollable library of pre-made icons
- **Categories**: Arrows, symbols, emoji, UI icons, decorative elements
- **Search** → type keyword (e.g., "play", "like", "heart", "arrow")
- **Click any sticker** → appears on canvas, ready for placement

### Sticker Transform (macOS)
- **Resize** → drag corners, same as image overlays
- **Rotate** → drag rotation handle
- **Color tint** → some stickers have adjustable tint color (color well)

### Animation (macOS)
- Same keyframe system as shape/text
- **Position/scale/rotation** per-property keyframes
- **Fade in/out** via opacity keyframes

## 📱 iOS/iPadOS: Sticker Overlays

### Sticker Library (iOS/iPadOS)
- **Tap sticker type** → opens scrollable library of pre-made icons
- **Categories**: Arrows, symbols, emoji, UI icons, decorative elements
- **Search** → type keyword (e.g., "play", "like", "heart", "arrow")
- **Tap any sticker** → appears on canvas, ready for placement

### Sticker Transform (iOS/iPadOS)
- **Resize** → pinch-to-zoom, same as image overlays
- **Rotate** → drag rotation handle
- **Color tint** → some stickers have adjustable tint color

### Animation (iOS/iPadOS)
- Same keyframe system as shape/text
- **Position/scale/rotation** per-property keyframes
- **Fade in/out** via opacity keyframes

## ⏱️ macOS: Timeline Animation for All Overlay Types

### Adding Keyframes (macOS)
1. **Select overlay** in timeline → inspector properties appear
2. **Property rows**: Position X, Position Y, Scale X, Scale Y, Rotation, Opacity
3. **Click diamond icon** ▶ next to any property at current playhead position → keyframe created
4. **Move playhead** to different timestamp
5. **Adjust property value** → new keyframe created automatically; timeline interpolates between

### Copy/Paste Keyframes (macOS)
- **Option-drag** any keyframe → duplicate at new position
- **Right-click keyframe** → "Copy" then "Paste" → useful for same animation on multiple overlays

### Motion Paths (macOS)
- **Enable "Show Motion Path"** toggle in viewport
- **Visual line** appears showing overlay movement trajectory across frames
- **Drag path points** → adjust motion curve without affecting keyframe values

### Looping Overlays (macOS)
- **Select overlay** → enable "Loop" toggle
- **Result** → overlay animation repeats for scene duration
- **Use case**: rotating logo, pulsing accent, moving banner

## 📱 iOS/iPadOS: Timeline Animation for All Overlay Types

### Adding Keyframes (iOS/iPadOS)
1. **Select overlay** in timeline → inspector properties appear
2. **Property rows**: Position X, Position Y, Scale X, Scale Y, Rotation, Opacity
3. **Tap diamond icon** ▶ next to any property at current playhead → keyframe created
4. **Move playhead** to different timestamp
5. **Adjust property value** → new keyframe created automatically; timeline interpolates between

### Copy/Paste Keyframes (iOS/iPadOS)
- **Tap and hold keyframe** → "Copy" then "Paste" → useful for same animation on multiple overlays

### Motion Paths (iOS/iPadOS)
- **Enable "Show Motion Path"** toggle in viewport
- **Visual line** appears showing overlay movement trajectory across frames
- **Drag path points** → adjust motion curve without affecting keyframe values

### Looping Overlays (iOS/iPadOS)
- **Select overlay** → enable "Loop" toggle
- **Result** → overlay animation repeats for scene duration
- **Use case**: rotating logo, pulsing accent, moving banner

## 🛠️ macOS: UI Elements Referenced

- **+ (Add Overlay) button** → toolbar button to open overlay type selector
- **Overlay type modal** → dialog with four buttons: Text, Image, Shape, Sticker
- **Font dropdown** → in text overlay inspector, scrollable font list with search
- **Font size slider/numeric** → adjust text size
- **Character Animation toggle** → enables per-keyframe per-letter animation
- **Blend mode dropdown** → Normal/Multiply/Screen/Overlay options
- **Behind Devices / In Front of Devices** → depth positioning toggles (inspector switches)
- **Motion path toggle** → viewport overlay showing animation trajectory (view toggle)
- **Loop toggle** → enables animation repetition for scene duration (inspector switch)
- **Keyframe diamond icons** → click to add/remove keyframes per property (inspector)
- **Property rows** → Position X/Y, Scale X/Y, Rotation, Opacity in inspector
- **Option-drag** → duplicate keyframes
- **Right-click keyframe** → context menu with copy/paste/delete
- **Sticker library scroll** → browser with searchable icon collection (scrollable panel)
- **Sticker search field** → type keywords to find specific stickers (search field in library)

## 🛠️ iOS/iPadOS: UI Elements Referenced

- **+ (Add Overlay) button** → toolbar button to open overlay type selector
- **Overlay type modal** → sheet with four buttons: Text, Image, Shape, Sticker
- **Font dropdown** → in text overlay inspector, scrollable font list with search
- **Font size slider** → adjust text size (touch slider)
- **Character Animation toggle** → enables per-keyframe per-letter animation (toggle switch)
- **Blend mode dropdown** → Normal/Multiply/Screen/Overlay options (dropdown)
- **Behind Devices / In Front of Devices** → depth positioning toggles (inspector switches)
- **Motion path toggle** → viewport overlay showing animation trajectory (view toggle)
- **Loop toggle** → enables animation repetition for scene duration (inspector switch)
- **Keyframe diamond icons** → tap to add/remove keyframes per property (inspector tap)
- **Property rows** → Position X/Y, Scale X/Y, Rotation, Opacity in inspector
- **Option-drag** → duplicate keyframes (long-press with modifier)
- **Right-click keyframe** → context menu with copy/paste/delete (tap and hold)
- **Sticker library scroll** → browser with searchable icon collection (scrollable list)
- **Sticker search field** → type keywords to find specific stickers (search field)