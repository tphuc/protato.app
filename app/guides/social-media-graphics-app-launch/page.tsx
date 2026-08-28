import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"
import React from "react"

export const metadata: Metadata = {
    title: "How to Create Social Media Graphics for Your App Launch | Protato Guide",
    description:
        "Design eye-catching social media graphics for your app launch. Create device mockups for Instagram, Twitter/X, LinkedIn, and more with consistent branding across every platform.",
    openGraph: {
        type: "article",
        title: "How to Create Social Media Graphics for Your App Launch | Protato Guide",
        description:
            "Design eye-catching social media graphics for your app launch. Create device mockups for Instagram, Twitter/X, LinkedIn, and more with consistent branding across every platform.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to create social media graphics for your app launch")}`, width: 1200, height: 630 }],
    },
}

export default function Guide12() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            {/* IMAGE BRIEF: Add a social launch-kit overview with the same app mockup adapted into square Instagram, vertical Story/Reel, wide X, and LinkedIn card formats. Use one consistent color, type, and device system. */}

            <GuideBreadcrumb title="How to create social media graphics for your app launch." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 12
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to create social media graphics for your app launch.
            </h1>

<p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                When you launch your app, you need visuals for every channel — Instagram, Twitter/X, LinkedIn, and maybe TikTok or Threads. Creating each from scratch in a different tool is exhausting. Protato lets you design one mockup and adapt it to every platform.
            </p>

            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">6 steps</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                <span>iPhone 17 Pro Max & MacBook Pro 14"</span>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll build
                    </p>
                    <p className="text-base leading-relaxed">
                        A complete social media graphics kit — Instagram post and story, Twitter/X card, LinkedIn banner, and a square shareable — all from one master device mockup.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Aspect ratio presets (Instagram post 1:1, Story 9:16, Twitter/X 16:9, LinkedIn 1.91:1), iPhone 17 Pro Max device model picker, text overlays, background types (gradient, mesh), lighting presets (Studio for professional look), transparent PNG export, and multi-device scene composition.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Social media graphics should be recognizable as your brand even without the logo. Open Protato and build your launch kit.
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
                    title="Know the sizes for each platform."
                    description={[
                        "Each social platform has different optimal dimensions. Design your master mockup at the largest canvas you need, then adapt for smaller formats:",
                        "Refer to the social-content-bank.md for the complete platform size guide — Instagram post 1080×1080 (1:1), Instagram story/TikTok 1080×1920 (9:16), Twitter/X card 1200×675 (16:9), LinkedIn post 1200×627 (1.91:1), LinkedIn banner 1584×396, Facebook post 1200×630.",
                    ]}
                    items={[
                        "Instagram post — 1080 × 1080 px (1:1 square)",
                        "Instagram story / TikTok — 1080 × 1920 px (9:16 portrait)",
                        "Twitter/X card — 1200 × 675 px (16:9 landscape)",
                        "LinkedIn post — 1200 × 627 px (roughly 1.91:1)",
                        "LinkedIn banner — 1584 × 396 px",
                        "Facebook post — 1200 × 630 px",
                    ]}
                />
                <Step
                    number="02"
                    title="Create your master device mockup."
                    description={[
                        "Start with a single high-quality device mockup that will be the centerpiece of every social graphic. Choose your primary device and import your best app screen.",
                        "Design at the largest canvas you need — 1080 × 1080 px for Instagram works well as a master since it crops easily to other formats.",
                        "Use a clean, brand-consistent background. A gradient or mesh background with your brand colors ensures the graphic is recognizable even without your logo. Apply the Studio lighting preset for a balanced, professional look. This matches the 'Carousel 3: The 3 Lighting Presets Every Mockup Needs' from social-content-bank.md.",
                        "Export this master mockup as a transparent PNG (set background to None) so you can place it onto different backgrounds for each platform without rebuilding the device shot. This matches the 'before/after' and 'transparent PNG' guidance in social-content-bank.md.",
                    ]}
                />
                <Step
                    number="03"
                    title="Design the Instagram post and story."
                    description={[
                        "Open a new project and set the aspect ratio to 1:1 for the Instagram post. Place your master device mockup (or rebuild the scene) centered in the square canvas.",
                        "Add your app name as a bold text overlay. Keep it short — one or two words maximum. Below the app name, add your tagline in a lighter weight. Position the text below the device so it reads naturally.",
                        "For the Instagram story, set the aspect ratio to 9:16. Position the device higher on the canvas to leave room for text below. Stories are viewed in full-screen on phones, so the 'Before/After' comparison from social-content-bank.md Concept 2 works well here — same screenshot, 10x the impact.",
                        "Use bright, high-contrast colors for story graphics — stories are viewed in full-screen on phones, and visibility at a glance matters more than subtlety. This aligns with the 'Design-Curious Maker' persona guidance from personas.md.",
                    ]}
                />
                <Step
                    number="04"
                    title="Design the Twitter/X card."
                    description={[
                        "Twitter cards display at 16:9 in the feed and are often the first thing people see when your tweet appears. Set your canvas to 16:9 aspect ratio.",
                        "Position the device on the left side of the frame with text on the right. This split composition works well on Twitter because the text remains readable at small sizes in the feed. This matches the 'Carousel 2: 5 Features Protato Has That Blender Doesn't' from social-content-bank.md.",
                        "Keep the text minimal — your app name and a single benefit statement. Use bold font weights and high contrast. Twitter cards are frequently viewed on mobile, so test readability at small sizes. Refer to the tweet-guidelines.md for viral tweet structure.",
                    ]}
                />
                <Step
                    number="05"
                    title="Design the LinkedIn graphic."
                    description={[
                        "LinkedIn posts display at roughly 1.91:1 (1200 × 627 px). Set your canvas to this ratio in the Ratio tab — it's close to 16:9 but slightly wider.",
                        "LinkedIn's audience prefers professional, clean visuals. Use a subtle gradient or solid background in your brand color. Avoid flashy effects or heavy shadows.",
                        "Position the device on the right side with text on the left — LinkedIn users read left-to-right, so putting the value proposition first feels natural.",
                    ]}
                />
                <Step
                    number="06"
                    title="Keep branding consistent and export."
                    description={[
                        "All your social graphics should feel like they belong to the same family. The easiest way to ensure this is to use the same device, background style, font, and lighting across every platform variant.",
                        "Export each format as JPEG at 90% quality for the best balance of image quality and file size. Social platforms compress images, so starting with a clean, sharp source matters.",
                        "Name your files with a clear convention: appname-instagram-post.jpg, appname-twitter-card.jpg, appname-linkedin-banner.jpg. This makes it easy to find the right asset when scheduling posts.",
                        "Schedule your launch posts across platforms using a tool like Buffer, Hootsuite, or Later. Post on all platforms within the same hour to maximize the impact of your launch announcement.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Amplify your launch visuals.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create mockups for your Product Hunt launch."
                        description="Your social graphics and Product Hunt gallery should tell the same visual story. Keep your device mockup consistent."
                        href="/guides/mockups-for-product-hunt"
                    />
                    <ContinueCard
                        title="How to export transparent PNG mockups."
                        description="Export your master device as a transparent PNG — place it onto different backgrounds for each platform without rebuilding the scene."
                        href="/guides/export-transparent-png-mockups"
                    />
                    <ContinueCard
                        title="How to create a hero image for your app website."
                        description="Your best social graphic can become your website's hero image — keep your visual brand consistent across every channel."
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
                        "name": "How to Create Social Media Graphics for Your App Launch",
                        "description": "Design eye-catching social media graphics for your app launch with consistent device mockups across Instagram, Twitter, LinkedIn, and more.",
                        "totalTime": "PT25M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            { "@type": "HowToStep", "position": 1, "name": "Know the sizes for each platform.", "text": "Instagram 1080x1080, Story 1080x1920, Twitter 1200x675, LinkedIn 1200x627. Design your master mockup at the largest canvas first." },
                            { "@type": "HowToStep", "position": 2, "name": "Create your master device mockup.", "text": "Design at 1080x1080 with your brand background and Studio lighting. Export as transparent PNG for reuse across platforms." },
                            { "@type": "HowToStep", "position": 3, "name": "Design the Instagram post and story.", "text": "Set ratio to 1:1 for post, 9:16 for story. Position device with text below. Use high-contrast colors for story visibility." },
                            { "@type": "HowToStep", "position": 4, "name": "Design the Twitter/X card.", "text": "Set ratio to 16:9. Split composition with device on left, text on right. Keep text minimal and bold for mobile readability." },
                            { "@type": "HowToStep", "position": 5, "name": "Design the LinkedIn graphic.", "text": "Set ratio to 1.91:1. Use professional, clean visuals with subtle gradient backgrounds. Device on right, text on left." },
                            { "@type": "HowToStep", "position": 6, "name": "Keep branding consistent and export.", "text": "Use same device, background, font, and lighting across all variants. Export as JPEG at 90% quality. Schedule posts across platforms." }
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
