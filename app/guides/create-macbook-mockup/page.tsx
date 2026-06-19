import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create a MacBook Mockup | Protato Guide",
    description:
        "Learn how to create a professional MacBook mockup for your app or website. Choose the right model, import your screenshot, adjust the camera angle, and export a polished 3D laptop image.",
    openGraph: {
        type: "article",
        title: "How to Create a MacBook Mockup | Protato Guide",
        description:
            "Learn how to create a professional MacBook mockup for your app or website. Choose the right model, import your screenshot, adjust the camera angle, and export a polished 3D laptop image.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create a MacBook mockup")}`, width: 1200, height: 630 }],
    },
}

export default function Guide17() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create a MacBook mockup." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 17
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create a MacBook mockup.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A MacBook mockup is essential for showcasing web apps, desktop software, and responsive designs. The larger screen area gives you more room to show complex interfaces, and the familiar laptop silhouette instantly signals a professional product.
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
                        A polished MacBook mockup with your website or app screenshot on the display, set against a professional background with balanced lighting — ready for landing pages, pitch decks, and marketing materials.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        MacBook Pro 14-inch model, 16:9 aspect ratio, media import, orbit mode, lighting presets, material controls, and high-resolution PNG/JPEG export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    MacBook mockups are best created on Mac, where the larger screen and precise controls make positioning easier. Open Protato for Mac and follow along.
                </p>
                <div className="flex items-center gap-3 shrink-0">
                    <Link href={`https://apps.apple.com/app/protato/id${macAppId}`}>
                        <Button className="text-sm" variant="default">
                             Download macOS app
                        </Button>
                    </Link>
                    <Link href={`https://apps.apple.com/app/protato/id${iosAppId}`}>
                        <Button className="text-sm" variant="outline">
                             Download iOS app
                        </Button>
                    </Link>
                </div>
            </div>

            <hr className="my-14 border-border/40" />

            <div className="space-y-16">
                <Step
                    number="01"
                    title="Choose the MacBook model."
                    description={[
                        "Protato includes the MacBook Pro 14-inch in Space Black. Open the Devices panel, remove the default iPhone, and add the MacBook Pro 14-inch. This is currently the only laptop model, and it matches Apple's latest design language.",
                        "The MacBook Pro has a 14-inch display with a notch and thinner bezels. When you import content, it fills the screen area correctly, accounting for the notch and rounded corners.",
                    ]}
                />
                <Step
                    number="02"
                    title="Set up a wide canvas for laptop shots."
                    description={[
                        "Laptops are wider than phones, so your canvas needs more horizontal space. Set the aspect ratio to 16:9 — this is the natural fit for a MacBook mockup and matches the laptop's display ratio.",
                        "If you're creating a MacBook mockup for a landing page hero, 16:9 at 1920 × 1080 px output is ideal. For social media, 16:9 works well for Twitter/X cards and LinkedIn posts.",
                    ]}
                />
                <Step
                    number="03"
                    title="Import your website or app screenshot."
                    description={[
                        "Open the Media tab and import your screenshot. Because the MacBook screen is larger and wider than a phone, screenshots with more horizontal content (websites, dashboards, desktop apps) look best.",
                        "The screenshot appears on the MacBook display automatically. If the aspect ratio doesn't match perfectly, use the Transform tab to adjust the scale. For websites, take a full-width browser screenshot at 1440px or wider for the best results on the 14-inch display.",
                    ]}
                />
                <Step
                    number="04"
                    title="Position the camera for the best MacBook angle."
                    description={[
                        "MacBook mockups look best from a slight top-down angle that shows both the screen and keyboard deck. This angle gives the laptop depth and makes it recognizable as a laptop rather than a floating screen.",
                        "In Orbit mode, rotate to a position where you can see about 70% screen and 30% keyboard deck. The MacBook's aluminum body reflects light beautifully at this angle.",
                        "Zoom in so the laptop fills about 70-80% of the canvas. Leave room around the edges for background treatment. In Pan mode, center the laptop in the frame.",
                    ]}
                />
                <Step
                    number="05"
                    title="Adjust lighting and materials for the larger screen."
                    description={[
                        "The MacBook's larger glass surface reflects more light than an iPhone. The Dramatic lighting preset creates beautiful reflections on the MacBook's screen and aluminum body, giving it a premium, marketing-quality look.",
                        "In the Material settings, adjust the Glow (Emissive) slider to make the screen appear brightly lit — this helps the screen content stand out against the keyboard deck. Set Clearcoat to a medium value for a realistic glass reflection on the display.",
                        "If the keyboard deck looks too dark, increase the Fill light in the Lighting settings. This is a common issue with MacBook mockups because the aluminum surface is angled away from the key light.",
                    ]}
                />
                <Step
                    number="06"
                    title="Export your MacBook mockup."
                    description={[
                        "Tap the Export button and choose your settings. For MacBook mockups used on landing pages, export at 2x resolution (3840 × 2160 px for a 1920 × 1080 px canvas) for retina display clarity.",
                        "JPEG at 90% quality is usually the best choice for MacBook mockups — the larger file size of PNG isn't necessary since you'll rarely need transparency for a laptop shot. If you do need transparency (for compositing onto a page), use PNG with the background set to None.",
                        "Your finished MacBook mockup is ideal for: landing page hero sections, SaaS website feature displays, pitch decks, social media graphics for desktop apps, and \"works on Mac\" marketing materials.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Complete your device mockup library.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create an iPhone mockup."
                        description="Pair your MacBook mockup with an iPhone mockup to show the full cross-platform experience."
                        href="/guides/create-iphone-mockup"
                    />
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Bring all your devices together in one scene for the ultimate ecosystem marketing shot."
                        href="/guides/multi-device-scene"
                    />
                    <ContinueCard
                        title="How to create mockups for your SaaS landing page."
                        description="Use your MacBook mockup as the hero image on your SaaS landing page — it's the most effective format for desktop software."
                        href="/guides/mockups-for-saas-landing-page"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create a MacBook Mockup",
                        "description": "Create a professional MacBook mockup with your website or app screenshot on a 3D laptop frame for landing pages, pitch decks, and marketing.",
                        "totalTime": "PT8M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Choose the MacBook model.", "text": "Add the MacBook Pro 14-inch in Space Black from the Devices panel. It's the only laptop model, matching Apple's latest design." },
                            { "@type": "HowToStep", "position": 2, "name": "Set up a wide canvas for laptop shots.", "text": "Set aspect ratio to 16:9. Target 1920x1080 px output for landing pages." },
                            { "@type": "HowToStep", "position": 3, "name": "Import your website or app screenshot.", "text": "Go to the Media tab and import your screenshot. Websites and dashboards look best on the wider MacBook display." },
                            { "@type": "HowToStep", "position": 4, "name": "Position the camera for the best MacBook angle.", "text": "Use Orbit mode to find a slight top-down angle showing about 70% screen and 30% keyboard deck for depth." },
                            { "@type": "HowToStep", "position": 5, "name": "Adjust lighting and materials for the larger screen.", "text": "Use Dramatic lighting preset. Increase Glow to make the screen stand out. Add Fill light if the keyboard deck is too dark." },
                            { "@type": "HowToStep", "position": 6, "name": "Export your MacBook mockup.", "text": "Export at 2x resolution for retina displays. JPEG at 90% quality for web use. PNG with transparent background for compositing." }
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
