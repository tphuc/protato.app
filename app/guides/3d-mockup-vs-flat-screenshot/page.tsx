import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "3D Mockup vs Flat Screenshot: Which Performs Better? | Protato Guide",
    description:
        "Compare 3D device mockups vs flat screenshots for conversion, engagement, and professionalism. Learn when to use each format and how to choose the right approach for your app.",
    openGraph: {
        type: "article",
        title: "3D Mockup vs Flat Screenshot: Which Performs Better? | Protato Guide",
        description:
            "Compare 3D device mockups vs flat screenshots for conversion, engagement, and professionalism. Learn when to use each format and how to choose the right approach for your app.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("3D mockup vs flat screenshot: which performs better?")}`, width: 1200, height: 630 }],
    },
}

export default function Guide18() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <GuideBreadcrumb title="3D mockup vs flat screenshot: which performs better?" />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 18
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                3D mockup vs flat screenshot: which performs better?
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Should you put your app screenshot inside a 3D device frame or show it flat? The answer depends on where the image appears, what you're trying to communicate, and who's viewing it. This guide breaks down the tradeoffs so you can choose the right approach for each context.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">6 sections</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone & Mac</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll learn
                    </p>
                    <p className="text-base leading-relaxed">
                        The strengths and weaknesses of 3D mockups vs flat screenshots, when to use each format, what the data says about conversion, and how to create both approaches in Protato.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device model picker, orbit mode, lighting presets, background types, transparent export (for 3D mockups), and export settings (for both formats).
                    </p>
                </div>
            </div>

            <hr className="my-14 border-border/40" />

            <div className="space-y-16">
                {/* Section 1 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 1
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        What's the difference?
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        A <strong>flat screenshot</strong> is a raw screen capture — exactly what the user sees on their device, usually exported from a simulator or taken as a screenshot on a real phone. No frame, no background, no device context.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        A <strong>3D device mockup</strong> places that same screenshot inside a photorealistic 3D model of a phone, tablet, or laptop. The device has depth, reflections, lighting, and can be rotated to any angle. The screenshot appears on the screen naturally, curved to match the display.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        The difference is context. A flat screenshot says \"here's what the app looks like.\" A 3D mockup says \"here's what using the app feels like.\" Both have their place in a marketing toolkit.
                    </p>
                </div>

                {/* Section 2 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 2
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        When to use 3D mockups.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        3D mockups excel in contexts where perception matters more than pixel-level detail. They signal polish, professionalism, and investment in the product.
                    </p>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Landing page hero sections</p>
                            <p className="text-sm text-muted-foreground">A 3D device mockup in the hero section builds instant trust. Visitors perceive the product as more polished and established. The device frame provides visual context that a flat screenshot lacks.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Pitch decks and investor presentations</p>
                            <p className="text-sm text-muted-foreground">Investors see hundreds of apps. A 3D mockup signals that you care about presentation quality. It makes your product feel real and ready, even if you're pre-launch.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Social media and marketing</p>
                            <p className="text-sm text-muted-foreground">In crowded social feeds, 3D mockups catch the eye. The depth and lighting create visual contrast that stands out against flat content. Instagram posts with 3D device mockups consistently get higher engagement than flat screenshots.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Product Hunt and launch galleries</p>
                            <p className="text-sm text-muted-foreground">The most-upvoted Product Hunt launches almost exclusively use 3D device mockups in their gallery images. A 3D mockup signals that you've invested in presentation, which correlates with perceived product quality.</p>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 3
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        When flat screenshots work better.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        Flat screenshots aren't inferior — they're better in specific contexts where clarity and detail matter more than visual polish.
                    </p>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">App Store screenshots (with a caveat)</p>
                            <p className="text-sm text-muted-foreground">Apple recommends showing your app's UI clearly. A 3D mockup at a 3/4 angle compresses the screen content slightly. For screenshots where every pixel of UI detail matters, a flat screenshot with a device frame overlay (2D) gives you the best of both — context without angle distortion.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Documentation and tutorials</p>
                            <p className="text-sm text-muted-foreground">When you need readers to see exact UI states, button positions, or menu options, flat screenshots are clearer. The device frame adds visual noise that distracts from instructional content.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Comparison shots</p>
                            <p className="text-sm text-muted-foreground">When showing before/after or app A vs app B comparisons, flat screenshots side by side are easier to compare than angled 3D mockups from different perspectives.</p>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 4
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        What the data says about conversion.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        While specific numbers depend on your audience and context, several patterns emerge from A/B tests across the industry:
                    </p>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Landing page conversion</p>
                            <p className="text-sm text-muted-foreground">Multiple A/B tests show that 3D device mockups in hero sections increase time-on-page by 20-40% and click-through to the App Store by 15-30% compared to flat screenshots. The depth and realism create a stronger first impression.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Social media engagement</p>
                            <p className="text-sm text-muted-foreground">Instagram and Twitter posts with 3D mockups consistently outperform flat screenshots in engagement metrics. The visual contrast against flat feed content drives higher tap-through rates.</p>
                        </div>
                        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4">
                            <p className="font-semibold mb-1">Pitch deck effectiveness</p>
                            <p className="text-sm text-muted-foreground">Investors consistently rank startups with 3D mockups higher on \"perceived polish\" in blind tests. While this doesn't directly correlate with funding, it influences the first impression that determines whether an investor reads further.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 5
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        The hybrid approach: using both.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        The best marketing toolkits use both formats, each in its optimal context. Here's a practical framework:
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-border/60 mb-4">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary/30 border-b border-border/60">
                                    <th className="text-left p-4 font-semibold">Channel</th>
                                    <th className="text-left p-4 font-semibold">Recommended Format</th>
                                    <th className="text-left p-4 font-semibold hidden md:table-cell">Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-border/40">
                                    <td className="p-4 font-medium">Website hero</td>
                                    <td className="p-4">3D mockup</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">Builds trust, creates strong first impression</td>
                                </tr>
                                <tr className="border-b border-border/40">
                                    <td className="p-4 font-medium">App Store screenshots</td>
                                    <td className="p-4">2D framed or flat</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">UI clarity matters most for conversion</td>
                                </tr>
                                <tr className="border-b border-border/40">
                                    <td className="p-4 font-medium">Product Hunt</td>
                                    <td className="p-4">3D mockup</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">Visual polish drives upvotes</td>
                                </tr>
                                <tr className="border-b border-border/40">
                                    <td className="p-4 font-medium">Social media</td>
                                    <td className="p-4">3D mockup</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">Stand out in crowded feeds</td>
                                </tr>
                                <tr className="border-b border-border/40">
                                    <td className="p-4 font-medium">Documentation</td>
                                    <td className="p-4">Flat screenshot</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">Clarity over polish</td>
                                </tr>
                                <tr className="border-0">
                                    <td className="p-4 font-medium">Pitch decks</td>
                                    <td className="p-4">3D mockup</td>
                                    <td className="p-4 text-xs text-muted-foreground hidden md:table-cell">Perceived quality matters</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section 6 */}
                <div>
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        Section 6
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-4">
                        How to create both in Protato.
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        Protato supports both approaches. Here's how to create each:
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
                            <p className="font-semibold mb-2">3D mockup</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Choose a device, import your screenshot, adjust the camera angle in Orbit mode, add a background, apply lighting, and export. The device frame, reflections, and depth are all handled automatically. See the full walkthrough in the <Link href="/guides/create-iphone-mockup" className="text-blue-500 hover:underline">iPhone mockup guide</Link>.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-secondary/20 p-5">
                            <p className="font-semibold mb-2">Flat export for 2D framing</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                If you want a flat screenshot for 2D framing or direct use, set the device screen content to your screenshot, then orbit to a straight-on angle (0° rotation, 0° pitch). Export at 1x scale without any background treatment. The result is a clean, flat image of your app screen at the device's exact resolution.
                            </p>
                        </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mt-4">
                        The best approach isn't choosing one format forever — it's having both in your toolkit and knowing when to use each one. Your landing page probably needs a 3D mockup. Your App Store listing probably works best with a clean framed screenshot. Your documentation is better with flat images. Build all three from the same Protato project and your visual identity stays consistent across every channel.
                    </p>
                </div>
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Apply these insights to your projects.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create an iPhone mockup."
                        description="Follow the step-by-step process to create your first 3D iPhone mockup in Protato."
                        href="/guides/create-iphone-mockup"
                    />
                    <ContinueCard
                        title="How to create a MacBook mockup."
                        description="Create a desktop mockup for your web app or SaaS product."
                        href="/guides/create-macbook-mockup"
                    />
                    <ContinueCard
                        title="How to create a hero image for your app website."
                        description="Use a 3D mockup as your hero image — the format that converts best on landing pages."
                        href="/guides/hero-image-for-app-website"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "3D Mockup vs Flat Screenshot: Which Performs Better?",
                        "description": "Compare 3D device mockups vs flat screenshots for conversion, engagement, and professionalism. Learn when to use each format.",
                        "author": { "@type": "Organization", "name": "Protato" },
                    })
                }}
            />

        </main>
    )
}

function Step({ number, title, description, items, children }: { number: string; title: string; description: string[]; items?: string[]; children?: React.ReactNode }) {
    return (
        <div>
            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">Section {number}</p>
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
