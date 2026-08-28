import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
    title: "How to Add Text Overlays and Branding to Mockups | Protato Guide",
    description:
        "Add headlines, feature callouts, and branding to your device mockups. Control fonts, gradient fills, layer placement behind or in front of the device, and fade animations.",
    openGraph: {
        type: "article",
        title: "How to Add Text Overlays and Branding to Mockups | Protato Guide",
        description:
            "Add headlines, feature callouts, and branding to your device mockups. Control fonts, gradient fills, layer placement behind or in front of the device, and fade animations.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to add text overlays and branding to your mockups")}`, width: 1200, height: 630 }],
    },
}

export default function Guide05() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to add text overlays and branding to your mockups." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 05
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to add text overlays and branding to your mockups.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A device mockup shows your product. Text tells your story. Add headlines, feature callouts, and branding to your scene — then control every detail from font choice to gradient fill, layer position, and fade animation.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">5 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone 17 Pro Max & MacBook Pro 14"</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A device mockup with a layered text composition — a gradient headline in front of the device, a subtle subheading behind it, and feature labels with custom fonts and colors.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Add Text button, Text Editor panel (font, weight, color/gradient, stroke, alignment, scale, rotation, opacity, placement), Text mode for canvas interaction, and Text mode for layer placement (Behind Phone / In Front of Phone).
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Text editing is available on both iPhone and Mac. On Mac, the right inspector switches to Text mode with a full editor. On iPhone, the Text Editor panel slides up from the bottom when you add or select text.
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
                    title="Set up your device mockup first."
                    description={[
                        "Start with a completed device mockup — import your screenshot, set the background, and adjust lighting. Text is the last layer of polish, so get the visual foundation right first.",
                        "Choose a background that gives text room to breathe. A gradient or mesh background with some negative space works well for text overlays. The Studio lighting preset provides balanced light that's flattering for text readability.",
                    ]}
                />
                <Step
                    number="02"
                    title="Add your first headline."
                    description={[
                        "Tap the Add Text button (T icon in the toolbar on Mac, T+ above the canvas on iPhone). A text label appears on the canvas with placeholder text, and the editor opens.",
                        "Tap the text directly and type your headline — something benefit-driven that summarizes what the screenshot shows (e.g., \"Track Every Expense\" or \"Design in 3D\"). Keep it under 6 words for readability at small sizes.",
                        "In the Style tab, choose a font family — System for clean modern, Rounded for friendly, Serif for premium, or Monospaced for technical. Adjust the weight (9 options from Ultra Light to Black) and tracking (letter spacing) to match your brand.",
                    ]}
                />
                <Step
                    number="03"
                    title="Style the text with color and stroke."
                    description={[
                        "Go to the Color tab. Choose a solid fill that contrasts with your background, or tap Gradient to create a multi-color text effect — useful for hero headlines that need to stand out.",
                        "For extra emphasis, enable Stroke in the Stroke tab. This adds an outline around each letter. Adjust the width and pick a stroke color that complements the fill.",
                        "The preview updates in real time, so experiment freely — you can always reset from the Presets tab.",
                        "Consider the Dramatic lighting preset when choosing text colors — strong shadows require higher contrast fill colors for readability.",
                    ]}
                />
                <Step
                    number="04"
                    title="Position the text in front or behind the device."
                    description={[
                        "Open the Layout tab (on iPhone) or find the placement controls in the right inspector (on Mac). Here you control where the text sits in the 3D space:",
                    ]}
                    items={[
                        "X / Y — move the text left, right, up, or down on screen",
                        "Scale — make text bigger or smaller (0.2x to 4x)",
                        "Rotation — spin the text from -180° to 180°",
                        "Opacity — fade the text from invisible (0) to solid (1)",
                        "Placement — choose Behind Phone or In Front of Phone. Text behind the device creates depth; text in front works as a clear headline or caption. Consider the Design-Curious Maker persona — they often prefer text in front for immediate readability.",
                    ]}
                />
                <Step
                    number="05"
                    title="Add supporting text and layer the composition."
                    description={[
                        "Add a second text element — a subheading or feature label. Make it smaller, lighter in weight, and position it below or beside the headline.",
                        "Use placement strategically: put the main headline in front and supporting copy behind the device for a sophisticated layered look. The Agency PM persona appreciates this consistent approach across multiple deliverables.",
                        "If you are in Animation mode, text can also fade in and out. Select a text element and adjust its opacity at different keyframes — it fades automatically between them.",
                        "Export as an image or video. The text becomes a permanent part of the composition, just like the device and background.",
                        "Consider the Bootstrapped Founder persona — they need consistent branded templates across campaigns, so use the same font and gradient settings for all social media visuals.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Layer on more polish.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create a product reveal video with keyframe animation."
                        description="Animate your text — make headlines fade in and callouts appear at specific moments in your timeline."
                        href="/guides/product-reveal-video"
                    />
                    <ContinueCard
                        title="How to polish your mockup with studio lighting and materials."
                        description="Make sure your text is easy to read against any background by dialing in the right lighting."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Label each device in a multi-device scene with feature callouts for a complete marketing asset."
                        href="/guides/multi-device-scene"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to add text overlays and branding to your mockups.",
                        "description": "A device mockup with a layered text composition — a gradient headline in front of the device, a subtle subheading behind it, and feature labels with custom fonts and colors.",
                        "totalTime": "PT10M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Set up your device mockup first.",
                                "text": "Start with a completed device mockup — import your screenshot, set the background, and adjust lighting. Choose a background with negative space for text placement."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Add your first headline.",
                                "text": "Tap the Add Text button. Type a benefit-driven headline. In the Style tab, choose a font family (System, Rounded, Serif, or Monospaced), adjust weight and tracking."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Style the text with color and stroke.",
                                "text": "Go to the Color tab for solid fill or multi-stop gradient. Enable Stroke to add an outline around letters. The preview updates in real time."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Position the text in front or behind the device.",
                                "text": "Use the Layout tab to control X/Y position, Scale, Rotation, Opacity, and Placement (Behind Phone or In Front of Phone) for depth and hierarchy."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Add supporting text and layer the composition.",
                                "text": "Add a second text element — smaller, lighter weight. Use placement strategically. In Animation mode, text can fade in and out across keyframes. Export as image or video."
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}

function Step({ number, title, description, items }: { number: string; title: string; description: string[]; items?: string[] }) {
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
