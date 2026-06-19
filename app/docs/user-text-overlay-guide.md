# Text Overlay Guide

Text overlays let you add titles, labels, and callouts to your scene. Text can appear behind or in front of the device.

## Adding Text

Tap the **Add Text** button (toolbar, "Aa" icon). A new text item appears at the center of the canvas. The interaction mode automatically switches to **Text mode** and the inspector panel shows text editing controls.

## Text Properties

| Property | Options |
|---|---|
| **Placement** | Behind Phone (renders behind device in 3D) or In Front (renders on top) |
| **Font Family** | System, Rounded, Serif, Monospaced |
| **Font Weight** | Ultra Light through Black (9 levels) |
| **Font Size** | Adjustable slider |
| **Color** | Customizable with color picker |
| **Position** | X, Y position on the canvas |
| **Opacity** | 0.0 – 1.0 transparency |
| **Rotation** | Rotation angle in degrees |
| **Scale** | Additional scale multiplier |

## Behind vs. In Front

- **Behind Phone**: Text renders behind the phone in 3D space. Good for backdrop titles, watermark-style text, or background labels
- **In Front**: Text renders on top of the phone. Good for callouts, feature labels, headlines, and annotations

During export, text is composited in the correct order automatically.

## Text and Animation

Text items appear in the timeline as a **Text track** (below the device tracks). Each text item has:

- A **start time** and **duration** on the timeline — you can trim when text appears and disappears
- **Transition curves** for fade/entry animation (same easing curves as device blocks)
- The text position and opacity update per frame during animation playback and export

Text can be animated alongside devices for coordinated motion graphics.

## Inline Editing

When a text item is selected, the right sidebar shows the inline editor:

1. **Text field** — type or edit the content
2. **Font controls** — family, weight, size
3. **Color picker** — text color
4. **Position controls** — X, Y sliders
5. **Rotation and scale** — fine-tune the transform
6. **Delete button** — remove the text item

Changes update the canvas in real time.

## Multiple Text Items

You can add multiple text items to a scene. Each one is independently:

- Positioned (different X, Y on the canvas)
- Styled (different fonts, sizes, colors)
- Timed (different positions on the timeline)
- Placed (behind or in front of the device)

Text items stack in the order they were created. Select a text item by tapping it on the canvas or in the Text panel list.

## Tips

- Use **behind** text for hero titles that frame the device
- Use **in front** text for feature callouts and labels
- Keep text readable against the background — add a text shadow or choose contrasting colors
- Animate text with transitions for professional motion graphics
- Export with transparent background to composite text in your video editor
