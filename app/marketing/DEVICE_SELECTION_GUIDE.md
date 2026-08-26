# Protato - Device Selection Guide

How to pick and customize device models for your 3D mockups using the UI (macOS vs iOS/iPadOS).

---

## 📱 macOS: Opening the Device Picker

1. **Click the + (Add Device) button** in the top toolbar → "Add Device"
2. **Device selection sheet** slides up from the bottom showing all 22 models
3. **Categories**:
   - iPhone 17 Pro Max (6.9", titanium frame)
   - iPhone 17 (6.3", aluminum frame)
   - iPhone 17 Air (6.6", ultra-thin)
   - iPhone 15 Pro Max (6.7", previous flagship)
   - iPad A16 (11")
   - MacBook Pro 14 (14.2")

## 📱 iOS/iPadOS: Opening the Device Picker

- **Tap the + (Add) button** in the toolbar → "Add Device"
- **Device selection sheet** slides up from the bottom
- **Tap any model** to add it to the scene
- **Use Apple Pencil** → tap device thumbnail for quicker selection

## 🎨 Color & Finish Selection

Each device model comes in multiple color variants with distinct finishes:

| Device | Color Options | Finish | Tag |
|--------|--------------|--------|-----|
| **iPhone 17 Pro Max** | Cosmic Orange, Deep Blue, Silver | Matte titanium / Brushed titanium | `ip17promaxorange`, `ip17promaxblue`, `ip17promaxsilver` |
| **iPhone 17** | White, Black, Mist Blue, Lavender, Sage | Matte glass + aluminum | `ip17white`, `ip17black`, `ip17blue`, `ip17lavender`, `ip17sage` |
| **iPhone 17 Air** | Cloud White, Light Gold, Sky Blue, Space Black | Matte glass + aluminum | `ip17airwhite`, `ip17airgold`, `ip17airskyblue`, `ip17airblack` |
| **iPhone 15 Pro Max** | White Titanium, Black Titanium, Natural Titanium, Blue Titanium | Brushed titanium | `ip15promaxwhite`, `ip15promaxblack`, `ip15promaxnatural`, `ip15promaxblue` |

### macOS: How to Change Device Color

- **Select device** → inspectors panel shows **Color swatches** below the 3D preview
- **Click any swatch** → instant color swap on the rendered device
- **Tag reference** → use the `tag` value in code or script for programmatic selection
- **Marketing names** → hover over color for descriptive label (e.g., "Bold. Vibrant. Unmistakable.")

### iOS/iPadOS: How to Change Device Color

- **Tap the device** in the 3D scene → color swatches appear in the bottom inspector
- **Tap any swatch** → instant color swap
- **Color tags** → tap the tag name to copy to clipboard
- **Marketing names** → press and hold color for descriptive tooltip

## 🔍 Quick Reference Card

| Category | Count | Models |
|----------|-------|--------|
| iPhone 17 Pro Max | 3 | Orange, Blue, Silver |
| iPhone 17 | 5 | White, Black, Blue, Lavender, Sage |
| iPhone 17 Air | 4 | White, Gold, Sky Blue, Space Black |
| iPhone 15 Pro Max | 4 | White, Black, Natural, Blue Titanium |
| iPad | 1 | Silver |
| MacBook Pro | 1 | Space Black |
| **Total** | **22** | — |

## 💡 Pro Tips (macOS)

- **Swap colors mid-scene** → duplicate a device, change its color, animate the transition between poses
- **Use Dynamic Island** → all iPhone 17 models include the Dynamic Island cutout; ensure overlay content avoids the pill-shaped area
- **Screen content fit** → after adding video/image to device screen, use the `.fill/.fit/.stretch` modes in the Screen Content inspector for proper framing
- **MacBook pitch** → MacBook Pro 14 has -19.5° pitch offset for realistic lid-opening angle; adjust camera FOV if the keyboard deck is partially hidden

## 💡 Pro Tips (iOS/iPadOS)

- **Double-tap device** → quick color swap without opening inspector
- **Pinch to resize** → device model in 3D view while changing colors
- **Swipe left/right** → cycle through color options for the selected device
- **Apple Pencil** → tap and hold color swatch for descriptive label

## 🛠️ UI Elements Referenced (macOS)

- **+ (Add Device)** toolbar button → top-right of main window
- Device selection **sheet** (bottom-slide-up)
- **Color swatches** in inspector panel (right side)
- **Tag** display next to each model name (for copying/pasting)
- **Marketing name** tooltip on color hover

## 🛠️ UI Elements Referenced (iOS/iPadOS)

- **+ (Add)** toolbar button → top of screen
- Device selection **sheet** (bottom-slide-up)
- **Color swatches** in bottom inspector panel
- **Tag** tap-to-copy on model selection
- **Marketing name** press-and-hold tooltip
- **Apple Pencil** → tap device for color options