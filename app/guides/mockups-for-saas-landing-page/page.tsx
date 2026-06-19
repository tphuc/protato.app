import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create Mockups for Your SaaS Landing Page | Protato Guide",
    description:
        "Create professional device mockups for your SaaS landing page. Hero section shots, feature displays, multi-device scenes, and transparent PNG export for web use.",
    openGraph: {
        type: "article",
        title: "How to Create Mockups for Your SaaS Landing Page | Protato Guide",
        description:
            "Create professional device mockups for your SaaS landing page. Hero section shots, feature displays, multi-device scenes, and transparent PNG export for web use.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create mockups for your SaaS landing page")}`, width: 1200, height: 630 }],
    },
}

export default function Guide09() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create mockups for your SaaS landing page." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 09
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create mockups for your SaaS landing page.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Your landing page mockup is the first thing visitors see. A polished 3D device shot with your app on screen builds instant credibility and shows your product in action before the visitor reads a single word.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">6 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A complete set of landing page visuals — a hero device mockup, feature section mockups, a multi-device ecosystem shot, and transparent PNGs ready for web development.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device model picker, aspect ratio presets, background types, lighting and materials, multi-device scene, transparent PNG export, and text overlays.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Landing page mockups work best as transparent PNGs that sit on top of your page background. Open Protato and follow along.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                    <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
                        <Button className="text-sm" variant="default">
                             Download iOS app
                        </Button>
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
                <Step
                    number="01"
                    title="Plan your page sections and mockup needs."
                    description={[
                        "Before opening Protato, map out which sections of your landing page need mockups. Most SaaS pages need 3-4 mockup assets:",
                    ]}
                    items={[
                        "Hero section — the primary device shot with your app's main screen, often with text overlay",
                        "Feature section — 2-3 smaller mockups showing specific features or workflows",
                        "Ecosystem shot — a multi-device scene for the \"works everywhere\" section",
                        "CTA section — a device mockup with the final call-to-action overlaid",
                    ]}
                />
                <Step
                    number="02"
                    title="Create the hero section mockup."
                    description={[
                        "The hero image is the most important visual on your page. It sits right below the headline and needs to communicate your product's value at a glance.",
                        "Set your aspect ratio to 16:9 or 4:3 — these ratios fit most page layouts without awkward cropping. Choose a device model that matches your primary platform (iPhone for mobile-first SaaS, MacBook for desktop-first).",
                        "Import your best app screen — the one that shows the core value proposition. Use the Studio lighting preset for a clean, professional look. Add a subtle gradient background that complements your brand colors.",
                        "Position the device slightly off-center if you plan to add text beside it, or centered if the device is the hero element itself.",
                    ]}
                />
                <Step
                    number="03"
                    title="Build feature section mockups."
                    description={[
                        "Feature sections typically show 2-3 different screens or workflows. Each mockup should highlight a different capability.",
                        "Create a new project (or duplicate your hero project) for each feature shot. Use the same aspect ratio and background style across all features for visual consistency.",
                        "Import the relevant screen for each feature. Adjust the camera angle slightly for each one — a 15-degree variation between shots creates visual interest while maintaining consistency.",
                        "Add text labels or callouts using the text overlay tool. Keep labels short — 2-3 words that describe the feature benefit.",
                    ]}
                />
                <Step
                    number="04"
                    title="Create a multi-device ecosystem shot."
                    description={[
                        "A multi-device scene communicates that your product works across platforms. This is especially effective for SaaS products with iPhone, iPad, and web apps.",
                        "Follow the multi-device scene workflow: add an iPhone as the primary device, then add an iPad and MacBook as secondary devices. Import relevant screenshots onto each.",
                        "Arrange the devices in a diagonal or staggered layout — all three in a straight line looks flat. Use the Transform controls to vary the scale and yaw of each device.",
                        "Apply a consistent background across all devices. A solid brand color or subtle gradient works best for landing pages — busy backgrounds distract from the content.",
                    ]}
                />
                <Step
                    number="05"
                    title="Export transparent PNGs for web integration."
                    description={[
                        "For landing pages, transparent PNGs give your development team the most flexibility. The device and shadow render cleanly, and your page background shows through.",
                        "Set the background to None in the Background tab. The checkerboard pattern indicates transparency. Adjust the shadow Opacity and Radius so it blends naturally onto your page's actual background.",
                        "Export at 2x or 3x quality scale for retina displays. Name each file clearly: hero-device.png, feature-1.png, ecosystem.png. Your developer will thank you.",
                        "If your page background is a solid color, you can also export with that matching color as the background — this produces a smaller file size since there's no alpha channel. Just make sure the color is an exact match.",
                    ]}
                />
                <Step
                    number="06"
                    title="Optimize for page speed and responsiveness."
                    description={[
                        "Landing page performance matters for SEO and conversion. Large mockup images can slow down your page if not optimized.",
                        "Export at the actual display size — don't export a 3x image and scale it down in CSS. If your hero section shows the mockup at 600px wide, export at 1200px (2x) or 1800px (3x) for retina support.",
                        "Convert PNGs to WebP or AVIF for production if your page builder supports it. These formats are 25-35% smaller than PNG with the same quality. Keep JPEG quality at 80-90% for a good quality-to-size ratio.",
                        "Use responsive image attributes (srcset) or your framework's image component to serve different resolutions for different screen sizes. A phone doesn't need a 3x desktop-size image.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Polish your landing page visuals.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to export transparent PNG mockups."
                        description="Master the exact export settings for transparent-background mockups that layer perfectly onto your page design."
                        href="/guides/export-transparent-png-mockups"
                    />
                    <ContinueCard
                        title="How to create mockups for your Product Hunt launch."
                        description="Repurpose your landing page hero mockup for Product Hunt — keep your visual identity consistent across channels."
                        href="/guides/mockups-for-product-hunt"
                    />
                    <ContinueCard
                        title="How to create a hero image for your app website."
                        description="Deep-dive into hero section composition — the single most important visual on your page."
                        href="/guides/hero-image-for-app-website"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create Mockups for Your SaaS Landing Page",
                        "description": "Create professional device mockups for your SaaS landing page including hero, features, ecosystem, and transparent PNG exports.",
                        "totalTime": "PT20M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Plan your page sections and mockup needs.", "text": "Map out which sections need mockups: hero, features, ecosystem shot, and CTA section." },
                            { "@type": "HowToStep", "position": 2, "name": "Create the hero section mockup.", "text": "Set aspect ratio to 16:9 or 4:3. Choose a device matching your primary platform. Use Studio lighting and a brand-complementing background." },
                            { "@type": "HowToStep", "position": 3, "name": "Build feature section mockups.", "text": "Create separate projects for each feature. Use consistent aspect ratio and background. Vary camera angles slightly between shots." },
                            { "@type": "HowToStep", "position": 4, "name": "Create a multi-device ecosystem shot.", "text": "Add iPhone, iPad, and MacBook. Arrange in a staggered layout. Use consistent lighting and background across all devices." },
                            { "@type": "HowToStep", "position": 5, "name": "Export transparent PNGs for web integration.", "text": "Set background to None. Export at 2x or 3x for retina displays. Name files clearly for your developer." },
                            { "@type": "HowToStep", "position": 6, "name": "Optimize for page speed and responsiveness.", "text": "Export at actual display size. Consider WebP or AVIF conversion. Use responsive image attributes for different screen sizes." }
                        ]
                    })
                }}
            />

        </main>
    )
}

function Step({ number, title, description, items, children }: { number: string; title: string; description: string[]; items?: string[]; children?: React.ReactNode }) {
    return (
        <div>
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">Step {number}</p>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">{title}</h2>
            <div className="space-y-4">
                {description.map((p, i) => (
                    <p key={i} className="text-base text-muted-foreground leading-relaxed">{p}</p>
                ))}
                {items && (
                    <ul className="space-y-2 ml-5">
                        {items.map((item, i) => (
                            <li key={i} className="text-base text-muted-foreground leading-relaxed list-disc">{item}</li>
                        ))}
                    </ul>
                )}
                {children}
            </div>
        </div>
    )
}

function ContinueCard({ title, description, href }: { title: string; description: string; href: string }) {
    return (
        <Link href={href} className="group block rounded-2xl border border-border/60 bg-secondary/20 p-5 hover:bg-secondary/40 hover:border-border transition-all">
            <h3 className="font-semibold group-hover:text-foreground transition-colors">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </Link>
    )
}
