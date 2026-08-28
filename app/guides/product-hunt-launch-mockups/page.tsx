import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { iosAppId, macAppId } from "@/app/config";
import { Button } from "@/components/ui/button";
import GuideBreadcrumb from "../guide-breadcrumb";

export const metadata: Metadata = {
  title: "How to Create Product Hunt Mockups for Your Launch | Protato",
  description:
    "Create Product Hunt launch images that explain your product at a glance. Plan your gallery, build clear 3D app mockups, and export launch-ready assets in six steps.",
  openGraph: {
    type: "article",
    title: "How to Create Product Hunt Mockups for Your Launch | Protato",
    description:
      "Plan, create, and export polished Product Hunt mockups that communicate your product clearly on launch day.",
    images: [
      {
        url: `https://protato.app/og?title=${encodeURIComponent("How to create Product Hunt mockups for your launch")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const steps = [
  {
    title: "Plan a gallery that tells one product story.",
    text: "Your launch gallery should answer three questions quickly: what is this product, what can I do with it, and why should I care? Start with six to eight frames. Give every image one job instead of trying to explain every feature at once.",
    items: [
      "Frame 1: the primary outcome and your strongest visual.",
      "Frames 2–4: the key workflow or feature that makes the outcome real.",
      "Frames 5–6: supporting proof, a secondary use case, or the product in context.",
      "Final frame: a concise invitation to try the product or visit your site.",
    ],
  },
  {
    title: "Choose the one screen that makes the launch understandable.",
    text: "Do not begin with a settings screen, dashboard overview, or a dense collage. Pick the moment where a new visitor can immediately recognize the value: a finished result, a meaningful before-and-after, or the core action in progress. Capture it cleanly before bringing it into your mockup scene.",
  },
  {
    title: "Build a clear hero mockup.",
    text: "Create your first scene around the strongest screen. Use a device that matches where the product lives, leave enough negative space for the product to breathe, and keep the device large enough that the UI still reads on a smaller screen.",
    items: [
      "Use a straight-on or gentle three-quarter camera angle when UI details matter.",
      "Choose a simple solid, gradient, or mesh background that supports—not competes with—your interface.",
      "Use Studio lighting for balanced clarity; reserve dramatic lighting for a deliberate visual mood.",
      "Add one benefit-led headline, ideally short enough to scan in a second.",
    ],
  },
  {
    title: "Create variations without losing visual consistency.",
    text: "Reuse the same background family, type treatment, and lighting across the gallery. Vary the app screen, camera angle, or device arrangement only when it helps the next frame make a new point. A consistent system makes a young product look intentional while helping visitors understand that every image belongs to the same story.",
  },
  {
    title: "Add motion only when it explains the interaction.",
    text: "A short product video can be useful for a workflow that is difficult to understand in a still image. Keep the motion restrained: show one action, one result, and a readable screen. A rotating device by itself is decoration; a clear screen recording inside the device is a demonstration.",
  },
  {
    title:
      "Export, review at small size, and publish the clearest frames first.",
    text: "Export high-resolution JPEG or PNG assets, then inspect them at the approximate size people will see in a feed. If the headline disappears or the screen looks busy, simplify the composition before launch. Put the hero visual first, follow with the proof, and keep a consistent order between your Product Hunt page, launch post, and website.",
  },
];

export default function ProductHuntLaunchMockupsGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <GuideBreadcrumb title="How to create Product Hunt mockups for your launch" />

      <div className="mb-4">
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
          How-to guide 19
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
        How to create Product Hunt mockups for your launch.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Product Hunt visitors decide quickly whether they understand a product.
        These launch mockup principles help you build a gallery that
        communicates the value of your app before someone reads the full
        description.
      </p>
      <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">6 steps</span>
        <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
        <span>iPhone &amp; Mac</span>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What you&apos;ll build
          </p>
          <p className="text-base leading-relaxed">
            A focused launch-gallery system: a hero mockup, supporting product
            shots, and an optional motion asset that all tell the same product
            story.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What you&apos;ll use
          </p>
          <p className="text-base leading-relaxed">
            Your strongest product screens, Protato device mockups, camera and
            lighting controls, text overlays, and image or video export.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-muted-foreground">
          Use Protato to turn your app screens into a consistent Product Hunt
          launch gallery, then reuse the assets on your website and social
          launch posts.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
            <Button className="text-sm"> Download iOS app</Button>
          </Link>
          <Link href={`https://apps.apple.com/app/protato/id${macAppId}`}>
            <Button className="text-sm" variant="outline">
               Download macOS app
            </Button>
          </Link>
        </div>
      </div>

      <hr className="my-14 border-border/40" />
      <div className="space-y-16">
        {steps.map((step, index) => (
          <section key={step.title}>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              {step.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {step.text}
            </p>
            {step.items && (
              <ul className="mt-4 ml-5 space-y-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="list-disc text-base leading-relaxed text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <hr className="my-16 border-border/40" />
      <section>
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Continue
        </p>
        <p className="mb-6 text-lg font-semibold">
          Build out the rest of your launch kit.
        </p>
        <div className="space-y-4">
          <ContinueCard
            title="How to create social media graphics for your app launch"
            description="Adapt the same visual system for Instagram, LinkedIn, X, and more."
            href="/guides/social-media-graphics-app-launch"
          />
          <ContinueCard
            title="How to make an app promo video in minutes"
            description="Create a simple motion asset from a screen recording and 3D device scene."
            href="/guides/make-app-promo-video"
          />
          <ContinueCard
            title="How to create a hero image for your app website"
            description="Use the same hero screen to make your landing page feel visually connected to your launch."
            href="/guides/hero-image-for-app-website"
          />
        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Create Product Hunt Mockups for Your Launch",
            description:
              "Plan, create, and export a focused Product Hunt launch gallery using app screens and 3D device mockups.",
            tool: { "@type": "HowToTool", name: "Protato" },
            step: steps.map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.title,
              text: step.text,
            })),
          }),
        }}
      />
    </main>
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
      className="group block rounded-2xl border border-border/60 bg-secondary/20 p-5 transition-all hover:border-border hover:bg-secondary/40"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
