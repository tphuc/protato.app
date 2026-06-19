import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create a Hero Image for Your App Website | Protato Guide",
    description:
        "Design a stunning hero image for your app website using 3D device mockups. Learn composition, text integration, background choices, and export techniques for web.",
    openGraph: {
        type: "article",
        title: "How to Create a Hero Image for Your App Website | Protato Guide",
        description:
            "Design a stunning hero image for your app website using 3D device mockups. Learn composition, text integration, background choices, and export techniques for web.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create a hero image for your app website")}`, width: 1200, height: 630 }],
    },
}

export default function Guide10() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="How to create a hero image for your app website." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 10
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create a hero image for your app website.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The hero image is the first thing visitors see on your site. A great one stops the scroll, communicates your product visually, and builds trust before a single headline is read.
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
                        A production-ready hero image for your website homepage — a 3D device mockup with your app screen, branded background, headline text, and export settings optimized for the web.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Aspect ratio presets, device model picker, background types (gradient, mesh, solid), text editor, lighting presets, and PNG/JPEG export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Your hero image should work as a standalone visual even without the surrounding page content. Open Protato and design yours.
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
                    title="Understand what an effective hero image needs."
                    description={[
                        "A hero image has one job: communicate what your product does in under 3 seconds. It needs to work at every screen size — from a 6-inch phone to a 32-inch monitor — and convey professionalism and polish.",
                        "The best hero images share three qualities: a single clear focal point (the device with your app), enough context to understand what the app does, and visual polish that signals quality.",
                        "Browse successful app websites in your category. Notice how the most effective heroes use a 3D device mockup as the centerpiece, with text either beside, below, or overlaid on the image.",
                    ]}
                />
                <Step
                    number="02"
                    title="Choose the right aspect ratio and composition."
                    description={[
                        "The hero section is usually full-width with a fixed height. Design for the widest expected container — 1920 × 1080 px (16:9) is a safe target that covers most screen sizes.",
                        "Inside the canvas, decide where the device goes. Three common compositions:",
                    ]}
                    items={[
                        "Centered — device in the middle, text below it. Works well for simple, bold messaging.",
                        "Split — device on one side, text on the other. Best for conveying more information.",
                        "Offset — device positioned off-center with text wrapping around it. Creates a dynamic, modern feel.",
                    ]}
                />
                <Step
                    number="03"
                    title="Set up the device mockup."
                    description={[
                        "Pick the device model that matches your primary platform. For a mobile app, use the latest iPhone. For a desktop app, use the MacBook Pro.",
                        "Import your most impactful app screen — the one that shows your product's core value. Adjust the camera angle to show the screen clearly. A slight 3/4 angle (not straight-on) looks more natural and professional.",
                        "Choose a background that makes the device stand out. A mesh gradient (like Apple's marketing style) adds depth without distracting. If your brand has a signature color, use it as a solid background or the starting color of a gradient.",
                    ]}
                />
                <Step
                    number="04"
                    title="Add your headline and CTA as text overlays."
                    description={[
                        "If your page layout places text directly on the hero image (not beside it), add your headline and CTA as text overlays inside Protato. This keeps the hero image self-contained and easier to implement.",
                        "Keep the headline short — 3-6 words that state the core benefit. Use a bold font weight and large size so it's readable at thumbnail scale. Position the text below or beside the device, not overlapping the screen area.",
                        "Add a subtle CTA button text like \"Get Started\" or \"Try Free\" below the headline. Use the Layout tab to adjust spacing. A gradient fill on the CTA text or a stroke outline can make it stand out.",
                    ]}
                />
                <Step
                    number="05"
                    title="Light the scene for maximum impact."
                    description={[
                        "The Dramatic lighting preset creates contrast that makes the device pop against the background — ideal for hero images where you want the device to be the focal point.",
                        "If your background has strong colors, switch to the Flat preset to avoid color conflicts. The Flat preset diffuses light evenly and keeps the focus on the device and text.",
                        "Adjust the shadow Opacity to around 60-70% and Radius to a medium setting. A visible but soft shadow anchors the device in the scene and adds a premium feel.",
                    ]}
                />

                <Step
                    number="06"
                    title="Export for production."
                    description={[
                        "Export your hero image at 2x resolution for retina displays. If your hero container is 1440 × 600 px, export at 2880 × 1200 px for sharp display on high-DPI screens.",
                        "JPEG at 85% quality is usually the best balance of quality and file size for hero images. If you need a transparent background (to overlay on a gradient or pattern), use PNG instead.",
                        "Test your hero image at three sizes: full desktop (1920px wide), tablet (768px), and mobile (375px). The device and text should be clearly visible at all sizes. If the text becomes too small to read at mobile sizes, consider a separate mobile composition.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Build on your hero image.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create mockups for your SaaS landing page."
                        description="Extend your hero image into a full landing page asset set — feature mockups, ecosystem shots, and CTAs."
                        href="/guides/mockups-for-saas-landing-page"
                    />
                    <ContinueCard
                        title="How to get professional 3D lighting on your mockup."
                        description="Fine-tune the lighting on your hero device for maximum visual impact."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to showcase your app on Dribbble and Behance."
                        description="Repurpose your hero image as your Dribbble shot — the same visual works across your website and portfolio."
                        href="/guides/showcase-app-on-dribbble"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to Create a Hero Image for Your App Website",
                        "description": "Design a stunning hero image for your app website using 3D device mockups with proper composition, text integration, and export settings.",
                        "totalTime": "PT15M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Understand what an effective hero image needs.", "text": "A hero image needs a single clear focal point, enough context to show what the app does, and visual polish that signals quality." },
                            { "@type": "HowToStep", "position": 2, "name": "Choose the right aspect ratio and composition.", "text": "Design at 1920x1080 px (16:9). Choose from centered, split, or offset device placement." },
                            { "@type": "HowToStep", "position": 3, "name": "Set up the device mockup.", "text": "Pick a device matching your platform. Import your best app screen. Use a mesh gradient background that complements your brand." },
                            { "@type": "HowToStep", "position": 4, "name": "Add your headline and CTA as text overlays.", "text": "Add a 3-6 word headline below or beside the device. Use bold weight and large size. Add CTA text with gradient fill for emphasis." },
                            { "@type": "HowToStep", "position": 5, "name": "Light the scene for maximum impact.", "text": "Use Dramatic preset for contrast. Switch to Flat if background has strong colors. Set shadow Opacity to 60-70% with medium Radius." },
                            { "@type": "HowToStep", "position": 6, "name": "Export for production.", "text": "Export at 2x resolution for retina. JPEG at 85% quality for balance of quality and size. Test at desktop, tablet, and mobile sizes." }
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
