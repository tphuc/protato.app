import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { iosAppId, macAppId } from "@/app/config";
import { Button } from "@/components/ui/button";
import GuideBreadcrumb from "../guide-breadcrumb";

export const metadata: Metadata = {
  title: "How to Make App Store Screenshots for a Subscription App | Protato",
  description:
    "Create App Store screenshots for a subscription app that explain the ongoing value before a visitor reaches your paywall. Includes a practical six-frame story and design checklist.",
  openGraph: {
    type: "article",
    title: "How to Make App Store Screenshots for a Subscription App | Protato",
    description:
      "Plan App Store screenshots that make a subscription app's value, features, and free-trial promise easy to understand.",
    images: [
      {
        url: `https://protato.app/og?title=${encodeURIComponent("App Store screenshots for a subscription app")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const steps = [
  [
    "Lead with the outcome, not the subscription.",
    "People open an App Store page to decide whether your app will help them. Your first screenshot should show the result they want, paired with a short, specific benefit. Avoid making price, a paywall, or an account screen the hero image unless pricing itself is the product's main differentiator.",
  ],
  [
    "Show the core experience before the upgrade moment.",
    "Use your next two or three screenshots to show the workflow someone gets excited about: the plan they can follow, the progress they can make, the content they can unlock, or the task they can finish faster. Each frame should make sense on its own while moving the story forward.",
  ],
  [
    "Make premium value concrete.",
    "Subscription products need to show why the relationship continues after the first session. Dedicate a frame to the premium feature or ongoing benefit that customers return for. Use a real screen and a plain-language headline; vague claims such as ‘Unlock more’ are weaker than a clear promise about what becomes possible.",
  ],
  [
    "Use a paywall screenshot only as supporting evidence.",
    "A well-designed paywall can communicate trial length, plan choice, and product confidence, but it rarely explains why the app is worth downloading. If you include it, place it after the value story. Keep price and trial language accurate, easy to read, and consistent with the offering a visitor will see in the app.",
  ],
  [
    "Design for clarity at thumbnail size.",
    "Store screenshots are often viewed small. Use a single focal point, large text, high contrast, and enough empty space around the device. Do not rely on users reading tiny feature lists or deciphering a complex dashboard. A 3D mockup can add visual polish, but use a straight-on or lightly angled view when interface detail matters.",
  ],
  [
    "Check the sequence against your actual conversion path.",
    "Before exporting, review the gallery beside your onboarding, paywall, and website message. The promised result, premium feature, free trial, and visuals should agree. Then export at the correct App Store dimensions and test alternate first frames through Product Page Optimization when you have enough traffic to learn from the result.",
  ],
] as const;

export default function SubscriptionAppScreenshotsGuide() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* IMAGE BRIEF: Add a six-frame App Store gallery preview for a subscription app: outcome-led hero, core workflow, result, premium feature, supporting proof, and a clear trial/upgrade frame. Keep each headline large and readable. */}
      <GuideBreadcrumb title="How to make App Store screenshots for a subscription app" />
      <div className="mb-4">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          How-to guide 20
        </span>
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        How to make App Store screenshots for a subscription app.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        For subscription apps, great screenshots explain the lasting value first
        and the upgrade second. Use this six-step structure to make your
        product&apos;s promise feel clear before a visitor reaches a free trial
        or paywall.
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
          <p className="leading-relaxed">
            A six-frame App Store screenshot sequence that clearly introduces
            the result, the core experience, and the reason to subscribe.
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What you&apos;ll use
          </p>
          <p className="leading-relaxed">
            Your most meaningful app screens, benefit-led headlines, Protato
            mockup scenes, and App Store-ready export settings.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-muted-foreground">
          Build a reusable visual system in Protato, then adapt it for your App
          Store listing, landing page, free-trial announcement, and launch
          graphics.
        </p>
        <div className="flex shrink-0 gap-3">
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
        {steps.map(([title, text], index) => (
          <section key={title}>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {text}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-2xl border border-border/60 bg-secondary/20 p-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          A simple six-screenshot sequence
        </h2>
        <ol className="mt-4 ml-5 space-y-2">
          <li className="list-decimal text-muted-foreground">
            The headline outcome your subscriber wants.
          </li>
          <li className="list-decimal text-muted-foreground">
            The core action that makes the outcome possible.
          </li>
          <li className="list-decimal text-muted-foreground">
            A satisfying result, progress view, or transformation.
          </li>
          <li className="list-decimal text-muted-foreground">
            The premium feature that creates recurring value.
          </li>
          <li className="list-decimal text-muted-foreground">
            A credible supporting proof point, such as personalization or a
            valuable content library.
          </li>
          <li className="list-decimal text-muted-foreground">
            An accurate trial or upgrade invitation, if it helps complete the
            story.
          </li>
        </ol>
      </section>

      <hr className="my-16 border-border/40" />
      <section>
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Continue
        </p>
        <div className="space-y-4">
          <Card
            title="App Store screenshot sizes and requirements"
            description="Export your finished gallery at the correct dimensions and file settings."
            href="/guides/app-store-screenshot-sizes"
          />
          <Card
            title="How to make App Store screenshots that convert"
            description="Learn the foundational workflow for creating the visual system behind your screenshot set."
            href="/guides/your-first-app-store-screenshot"
          />
          <Card
            title="How to add text overlays and branding"
            description="Give every screenshot a readable benefit-led headline that stays on-brand."
            href="/guides/text-overlays-and-branding"
          />
        </div>
      </section>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Make App Store Screenshots for a Subscription App",
            description:
              "A six-step method for planning App Store screenshots that communicate a subscription app's lasting value.",
            tool: { "@type": "HowToTool", name: "Protato" },
            step: steps.map(([name, text], position) => ({
              "@type": "HowToStep",
              position: position + 1,
              name,
              text,
            })),
          }),
        }}
      />
    </main>
  );
}

function Card({
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
