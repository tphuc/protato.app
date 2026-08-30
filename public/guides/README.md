# Guide screenshots

Keep screenshots for each guide in a folder named after its URL slug:

```text
public/guides/
  app-store-screenshots/
    hero.webp
    step-01-story.webp
    step-02-canvas.webp
```

Use descriptive, zero-padded filenames so screenshots remain in the guide's
reading order. Export as WebP when possible, use PNG only when sharp UI text
needs it, and include the exact UI state described by the adjacent step.

Add an image to a page with:

```tsx
<GuideImage
  src="/guides/app-store-screenshots/step-02-canvas.webp"
  alt="Protato canvas settings with portrait dimensions selected"
  caption="Choose the target canvas before arranging your device."
/>
```
