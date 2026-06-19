import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Export Transparent PNG Mockups | Protato Guide",
    description:
        "Learn how to export device mockups with transparent backgrounds in Protato. Set background to None, adjust shadow, choose PNG format, and use your mockup anywhere.",
    openGraph: {
        type: "article",
        title: "How to Export Transparent PNG Mockups | Protato Guide",
        description:
            "Learn how to export device mockups with transparent backgrounds in Protato. Set background to None, adjust shadow, choose PNG format, and use your mockup anywhere.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to export transparent PNG mockups")}`, width: 1200, height: 630 }],
    },
}

export default function Guide07() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to export transparent PNG mockups." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 07
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to export transparent PNG mockups.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A transparent PNG mockup layers cleanly onto websites, pitch decks, and social graphics — no background to cut out. Protato exports transparency when you set the background to None.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A device mockup with a fully transparent background — the phone, shadow, and text render without any backdrop, ready to drop into any design.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Background tab (None option), Shadow controls, export format picker (PNG), and the aspect ratio canvas.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Transparent export is identical on iPhone and Mac. Open Protato and follow along.
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
                    title="Set your background to None."
                    description={[
                        "Open the Background tab in the Settings sheet (iPhone) or the left sidebar (Mac). Select None as the background type.",
                        "The canvas shows a checkerboard pattern — this is the standard indicator for transparency. The checkerboard is not part of the export; it only appears in the editor so you can see where the transparent area is.",
                    ]}
                />
                <Step
                    number="02"
                    title="Adjust the device shadow."
                    description={[
                        "With a transparent background, the device shadow is still rendered. This is useful — it gives the phone depth even when composited onto another design.",
                        "Go to the Shadow tab and adjust Opacity (how dark) and Radius (how blurry). A softer shadow (higher radius) blends more naturally onto different backgrounds. If you want a completely flat device without shadow, turn the shadow off.",
                    ]}
                />
                <Step
                    number="03"
                    title="Position and light your device for compositing."
                    description={[
                        "Since the mockup will sit on top of another design, frame the device with extra space around it — leave margin so the compositing tool has room to position it.",
                        "Use a neutral camera angle (slightly tilted, not extreme) so the device looks natural in most contexts. Adjust lighting with the Studio preset for balanced, general-purpose lighting that works on any background color.",
                    ]}
                />
                <Step
                    number="04"
                    title="Export as PNG."
                    description={[
                        "Tap the Export button and choose PNG as the format. PNG is the only format that preserves transparency — JPEG does not support alpha channels.",
                        "Select your quality scale: 2x or 3x gives you a high-resolution asset that stays sharp when scaled down. The file will be larger than JPEG, but PNG with transparency is the standard for design assets.",
                        "Before exporting, verify that your background is still set to None (not Solid, Gradient, or Image). A common mistake is switching backgrounds and forgetting to change back before export.",
                    ]}
                />
                <Step
                    number="05"
                    title="Use your transparent mockup anywhere."
                    description={[
                        "The exported PNG has a transparent background around the device, shadow, and any text you placed. You can now:",
                    ]}
                    items={[
                        "Drop it into a website hero section — the device floats naturally over your page background",
                        "Place it on a colored pitch deck slide without white box edges",
                        "Composite it onto a product photo or lifestyle image in Figma, Photoshop, or Canva",
                        "Use it as an app store screenshot by placing it on a colored background in your design tool",
                        "Share it directly — the transparency makes it look professional wherever it lands",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Build on the transparent asset.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="App Store Screenshot Sizes & Requirements 2026."
                        description="Need your transparent mockup at the exact pixel dimensions for App Store upload? Check the size reference."
                        href="/guides/app-store-screenshot-sizes"
                    />
                    <ContinueCard
                        title="How to polish your mockup with studio lighting and materials."
                        description="Make sure your device looks premium from every angle before exporting the transparent version."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Text in transparent PNG exports renders cleanly — add headlines that composite onto any background."
                        href="/guides/text-overlays-and-branding"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Export Transparent PNG Mockups",
                        "description": "Export device mockups with transparent backgrounds from Protato for use in websites, pitch decks, and social graphics.",
                        "totalTime": "PT5M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Set your background to None.",
                                "text": "Open the Background tab and select None. The canvas shows a checkerboard pattern indicating the transparent area."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Adjust the device shadow.",
                                "text": "Go to Shadow settings and adjust Opacity and Radius. A softer shadow blends naturally onto different backgrounds. Turn shadow off for a completely flat device."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Position and light your device for compositing.",
                                "text": "Frame the device with extra space around it. Use a neutral camera angle and Studio lighting preset so the device looks natural in most contexts."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Export as PNG.",
                                "text": "Tap Export and choose PNG format. Select 2x or 3x quality scale. Verify the background is still set to None before exporting."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Use your transparent mockup anywhere.",
                                "text": "Drop it onto website hero sections, pitch deck slides, product photos, or app store backgrounds. The transparent PNG layers cleanly onto any design."
                            }
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
