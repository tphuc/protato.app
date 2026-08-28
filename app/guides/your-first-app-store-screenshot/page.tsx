import Link from "next/link";
import { Button } from "@/components/ui/button";
import { iosAppId, macAppId } from "@/app/config";
import { ImageFlow } from "@/components/custom-mdx";
import { AppStore } from "@/components/icons";
import type { Metadata } from "next";
import GuideBreadcrumb from "../guide-breadcrumb";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "How to Make App Store Screenshots That Convert in 2026 | Protato",
  description:
    "Learn how to make App Store screenshots that communicate your app's value and meet Apple's upload requirements. A 7-step workflow for iPhone, from screen capture to export.",
  openGraph: {
    type: "article",
    title: "How to Make App Store Screenshots That Convert in 2026 | Protato",
    description:
      "Learn how to make App Store screenshots that communicate your app's value and meet Apple's upload requirements.",
    images: [
      {
        url: `https://protato.app/og?title=${encodeURIComponent("How to make App Store screenshots that convert")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Guide01() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* IMAGE BRIEF: Add a finished App Store screenshot hero with a readable app screen inside a mostly straight-on iPhone mockup, a large outcome-led headline, and a clean brand gradient background. Show the complete final composition. */}
      <GuideBreadcrumb title="How to make App Store screenshots that convert" />

      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
          How-to guide 01
        </span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        How to make App Store screenshots that convert.
      </h1>

      <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
        Strong App Store screenshots make the benefit of your app obvious before
        someone taps Download. This step-by-step workflow turns a raw screen
        capture into a clear, polished screenshot set—with the right device
        framing, message hierarchy, and export settings for App Store Connect.
      </p>

      <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">7 steps</span>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
        <span>iPhone</span>
      </div>

      {/* What You'll Build / Use */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
            What you&apos;ll build
          </p>
          <p className="text-base leading-relaxed">
            One clean device mockup with your screenshot on a 3D iPhone frame, a
            background treatment, a headline, and an export-ready image.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
            What you&apos;ll use
          </p>
          <p className="text-base leading-relaxed">
            Project creation, device model picker, aspect ratio, background
            styling, media import, text overlays, and still image export.
          </p>
        </div>
      </div>

      {/* CTA bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
        <p className="text-sm text-muted-foreground flex-1">
          If you want the setup path in the app now, open Protato on your iPhone
          or install it on your Mac to follow along.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
            <Button className="text-sm" variant="default">
               Download iOS app
            </Button>
          </Link>
          <Link href={`https://apps.apple.com/app/protato/id${macAppId}`}>
            <Button className="text-sm" variant="outline">
              <AppStore /> Download macOS app
            </Button>
          </Link>
        </div>
      </div>

      <hr className="my-14 border-border/40" />

      {/* Steps */}
      <div className="space-y-12">
        <div>
          <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
            Before you start
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Pick the story your screenshot set needs to tell.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Treat each screenshot as one small promise, not a collage of every
            feature. Start with the highest-value outcome your app delivers,
            then choose the screen that proves it. Your first two or three
            images matter most because they are the ones people are most likely
            to see in search and on your product page.
          </p>
          <ul className="space-y-2 ml-5">
            <li className="text-base text-muted-foreground leading-relaxed list-disc">
              <strong className="text-foreground">
                Lead with the outcome:
              </strong>{" "}
              write a short benefit-led headline, then choose a screen that
              makes the claim believable.
            </li>
            <li className="text-base text-muted-foreground leading-relaxed list-disc">
              <strong className="text-foreground">Keep one focal point:</strong>{" "}
              avoid tiny UI, competing labels, or several unrelated features in
              one frame.
            </li>
            <li className="text-base text-muted-foreground leading-relaxed list-disc">
              <strong className="text-foreground">Build a sequence:</strong>{" "}
              introduce the core value, show the key interaction, then use later
              frames for proof or secondary features.
            </li>
          </ul>
        </div>
        <Step
          number="01"
          title="Create a new project and choose a device model."
          description={[
            "Open Protato and you will see the default scene with a device already loaded. By default it shows the latest iPhone model — this is your starting anchor.",
            'If you want a different device, tap the Devices button (phone icon above the canvas), then use the + and — buttons to swap models. Choose from iPhone 17 Pro Max, iPhone 17 Air, iPad A16, MacBook Pro 14", and more.',
            "For a first tutorial, the iPhone frame is the clearest path because it matches the most common App Store screenshot workflow.",
          ]}
        />

        <Step
          number="02"
          title="Set the canvas size and choose a background."
          description={[
            "Open the Settings sheet (sliders icon in the top-left toolbar) and go to the Ratio tab. Pick a canvas shape that matches your target output — 9:16 for social stories, 16:9 for widescreen, or 1:1 for square.",
            "Next, go to the Background tab. Choose a starting background:",
          ]}
          items={[
            "None — leaves the background transparent for a clean PNG export",
            "Solid — pick a single brand color from the palette or color wheel",
            "Gradient — choose from 80+ two-color presets or create your own",
            "Mesh — smooth multi-color blended gradients for an Apple-style look",
            "Image — use a photo from your library as the backdrop",
          ]}
        />
        <ImageFlow
          images={[
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781172784/IMG_0876_jgh7dz.jpg",
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781172785/IMG_0878_xgfi0o.jpg",
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781172799/IMG_0877_qk0cp0.jpg",
          ]}
          rounded="3xl"
        />

        <Step
          number="03"
          title="Import your screenshot and fit it onto the device."
          description={[
            "Still in the Settings sheet, go to the Media tab. Tap the import button and choose your app screenshot from Photos or Files.",
            "The image appears on the device screen instantly — curved to match the display, with realistic reflections and perspective. If the crop doesn't look right, adjust the device's position using Pan mode or the Transform tab.",
            "This is where the project stops being a blank template and starts becoming a usable marketing asset.",
          ]}
        />

        <ImageFlow
          images={[
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781180699/IMG_0883_h55pll.jpg",
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781183148/IMG_0885_foznwn.jpg",
          ]}
          rounded="3xl"
        />

        <Step
          number="04"
          title="Add the headline and supporting copy."
          description={[
            "Tap the Add Text button (T+ icon) above the canvas. A text label appears and the Text Editor panel slides up from the bottom.",
            "Tap the text directly on the canvas and type your headline — something that describes the benefit shown in the screenshot.",
            "In the Text Editor, explore the tabs:",
          ]}
          items={[
            "Presets — quick font size and style presets",
            "Color — solid fill or multi-stop gradient for the text",
            "Stroke — add an outline around your text",
            "Style — choose from System, Rounded, Serif, or Monospaced fonts; adjust weight, alignment, and tracking",
            "Layout — position the text on screen, scale it, rotate it, and choose whether it appears behind or in front of the device",
          ]}
        />
        <ImageFlow
          images={[
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781172793/IMG_0882_mvd3ei.jpg",
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781172794/IMG_0880_pwafwf.jpg",
          ]}
          rounded="3xl"
        />
        <Step
          number="05"
          title="Refine spacing, hierarchy, and layer placement."
          description={[
            "Tighten the composition by switching between the Orbit and Pan modes to adjust the camera angle and device position.",
            "If you added multiple text elements, use the Layout tab's placement setting to order them — text behind the device creates depth, text in front reads as a clear headline.",
            "Toggle the Grid overlay (⊞ icon) to check alignment. Make sure the device, text, and background feel balanced as a single composition.",
          ]}
        />
        <Step
          number="06"
          title="Export the finished still image."
          description={[
            "Tap the Export button (arrow-up icon in the top toolbar). Choose your format — PNG for transparent backgrounds, JPEG for smaller file sizes.",
            "Select the quality scale: 1x, 2x, or 3x. Higher scales produce sharper, larger images suitable for App Store and print.",
            "Tap Export. The iOS Share Sheet appears — save to Photos, send in Messages, AirDrop to your Mac, or upload directly to App Store Connect.",
            "This closes the loop on your first project. The same project can now grow into a full screenshot set, a localization pass, or an animated variant.",
          ]}
        />
        <ImageFlow
          images={[
            "https://res.cloudinary.com/diq74hzgo/image/upload/v1781183148/IMG_0886_gx4tks.jpg",
          ]}
          rounded="3xl"
        />
        <Step
          number="07"
          title="Verify your screenshot sizes and upload to the store."
          description={[
            "Before uploading, check that your exported image matches the required dimensions for your target device. Apple now only requires the 6.9-inch iPhone size (1320 × 2868 px) — it scales down automatically for smaller models.",
          ]}
          items={[
            'iPhone 6.9" (primary) — 1320 × 2868 px',
            'iPhone 6.7" (legacy) — 1290 × 2796 px',
            'iPad Pro 13" — 2064 × 2752 px',
            "Format — PNG, RGB, no alpha channel, under 8 MB",
            'App Store Connect — My Apps → version → Previews and Screenshots → 6.9" tab → drag files in order',
            "Google Play Console — Store presence → Main store listing → upload phone & tablet sets",
          ]}
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            Your first 2-3 screenshots appear in App Store search results. Put
            your strongest frame first. For the full size reference with every
            device class, see the{" "}
            <Link
              href="/guides/app-store-screenshot-sizes"
              className="text-blue-500 hover:underline"
            >
              App Store Screenshot Sizes guide
            </Link>
            .
          </p>
        </Step>
      </div>

      <hr className="my-16 border-border/40" />

      {/* Continue section */}
      <div>
        <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
          Continue
        </p>
        <p className="text-lg font-semibold mb-6">Keep the workflow moving.</p>

        <div className="space-y-4">
          <ContinueCard
            title="How to make a polished iPhone mockup from a raw screenshot."
            description="Take the same foundation and refine lighting, materials, and composition for a premium single-image deliverable."
            href="/guides/studio-lighting-and-materials"
          />
          <ContinueCard
            title="How to build a full App Store screenshot set in one project."
            description="Expand the same project model into a complete campaign set instead of stopping at one canvas."
            href="/guides/multi-device-scene"
          />
          <ContinueCard
            title="Project presets for first-time App Store screenshot setups."
            description="See the feature page behind project creation, default frames, and canvas options used in this guide."
            href="/guides/your-first-app-store-screenshot"
          />
        </div>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Make App Store Screenshots That Convert in 2026",
            description:
              "A seven-step workflow for turning an app screen capture into an App Store-ready screenshot with a clear benefit, polished device mockup, headline, and correct export settings.",
            totalTime: "PT10M",
            tool: { "@type": "HowToTool", name: "Protato" },
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Create a new project and choose a device model.",
                text: 'Open Protato and you will see the default scene with a device already loaded. If you want a different device, tap the Devices button and choose from iPhone 17 Pro Max, iPhone 17 Air, iPad A16, MacBook Pro 14", and more.',
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Set the canvas size and choose a background.",
                text: "Open the Settings sheet and go to the Ratio tab to pick a canvas shape. Then go to the Background tab to choose from None, Solid, Gradient, Mesh, or Image backgrounds.",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "Import your screenshot and fit it onto the device.",
                text: "In the Settings sheet, go to the Media tab and import your app screenshot from Photos or Files. The image appears on the device screen instantly with realistic reflections.",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Add the headline and supporting copy.",
                text: "Tap the Add Text button above the canvas and type your headline. Use the Text Editor to adjust font family, weight, color, gradient fill, stroke, alignment, and tracking.",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Refine spacing, hierarchy, and layer placement.",
                text: "Use Orbit and Pan modes to adjust the camera angle and device position. Use the Layout tab's placement setting to order text behind or in front of the device. Toggle the Grid overlay to check alignment.",
              },
              {
                "@type": "HowToStep",
                position: 6,
                name: "Export the finished still image.",
                text: "Tap the Export button, choose PNG or JPEG format, select quality scale (1x, 2x, or 3x), and export. The iOS Share Sheet lets you save to Photos, send in Messages, or upload to App Store Connect.",
              },
              {
                "@type": "HowToStep",
                position: 7,
                name: "Verify the screenshot size and upload it to the store.",
                text: "Verify your export uses the required dimensions for the target device, then upload the strongest frames first in App Store Connect. Use the App Store screenshot sizes guide for the current device requirements.",
              },
            ],
          }),
        }}
      />
    </main>
  );
}

function Step({
  number,
  title,
  description,
  items,
  children,
}: {
  number: string;
  title: string;
  description: string[];
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
        Step {number}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
      <div className="space-y-4">
        {description.map((p, i) => (
          <p
            key={i}
            className="text-base text-muted-foreground leading-relaxed"
          >
            {p}
          </p>
        ))}
        {items && (
          <ul className="space-y-2 ml-5">
            {items.map((item, i) => (
              <li
                key={i}
                className="text-base text-muted-foreground leading-relaxed list-disc"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
}

function ContinueCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:bg-secondary/40 hover:border-border transition-all"
    >
      <h3 className="font-semibold group-hover:text-foreground transition-colors">
        {title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
