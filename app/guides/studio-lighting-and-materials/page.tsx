import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"
import type { Metadata } from "next"
import GuideBreadcrumb from "../guide-breadcrumb"
import Script from "next/script"

export const metadata: Metadata = {
    title: "How to Get Professional 3D Lighting on Your Mockup | Protato Guide",
    description:
        "Learn how to light your 3D device mockups like a pro. Compare Studio, Dramatic, and Flat presets, adjust per-light sliders, and control screen gloss for premium results.",
    openGraph: {
        type: "article",
        title: "How to Get Professional 3D Lighting on Your Mockup | Protato Guide",
        description:
            "Learn how to light your 3D device mockups like a pro. Compare Studio, Dramatic, and Flat presets, adjust per-light sliders, and control screen gloss for premium results.",
        images: [{ url: `https://protato.app/og?title=${encodeURIComponent("How to get professional 3D lighting on your mockup")}`, width: 1200, height: 630 }],
    },
}

export default function Guide04() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            {/* IMAGE BRIEF: Add a lighting comparison showing one identical device mockup in Studio, Dramatic, and Flat lighting. Keep the screen and camera angle fixed so viewers can see the material, reflection, and shadow differences. */}

            <GuideBreadcrumb title="How to get professional 3D lighting on your mockup." />

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 04
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to get professional 3D lighting on your mockup.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The difference between a quick mockup and a premium visual is light. Protato gives you a full studio lighting rig with presets, per-light sliders, and physically based materials — no 3D knowledge required.
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
                        The same device mockup with three different lighting treatments — Studio, Dramatic, and Flat — plus a custom material setup that makes the screen look glossy or matte.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Lighting tab (presets + per-light sliders), Material tab (metallic, roughness, clearcoat, specular), IBL intensity, shadow controls, and real-time preview.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Lighting and material controls are identical on iPhone and Mac. On Mac, the left sidebar gives you a dedicated lighting section. On iPhone, open the Settings sheet and swipe to the Lighting tab.
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
                    title="Start with a basic mockup."
                    description={[
                        "Set up a simple device mockup — pick an iPhone or iPad, import your screenshot, and choose a neutral background like a subtle gradient or solid color.",
                        "Leave the lighting on the default Studio preset for now. The goal is to start with something decent and then make it look premium.",
                    ]}
                />
                <Step
                    number="02"
                    title="Try each lighting preset."
                    description={[
                        "Open the Lighting settings. On iPhone, tap Settings then swipe to the Lighting tab. On Mac, find Lighting in the left sidebar.",
                        "Tap through the three presets and watch the scene update instantly:",
                    ]}
                    items={[
                        "Studio — balanced, even lighting. Good for clean App Store screenshots and product shots.",
                        "Dramatic — strong contrasts with deeper shadows. Great for hero images and social media where you want the device to pop.",
                        "Flat — soft, diffused light. Ideal for documentation and technical shots where clarity matters more than drama.",
                    ]}
                />
                <Step
                    number="03"
                    title="Fine-tune individual lights."
                    description={[
                        "After picking a preset, use the per-light sliders to adjust each light source independently:",
                    ]}
                    items={[
                        "Key — the main light. Raise it to brighten the front of the device.",
                        "Fill — fills in shadows on the opposite side. Lower for more contrast, raise for a softer look.",
                        "Rim — adds a highlight along the edge of the device. Great for separating the phone from the background.",
                        "Back — lights the device from behind. Creates a halo effect when combined with a dark background.",
                        "Exposure — global brightness. Adjust this last after setting your individual lights.",
                        "IBL Intensity — controls how strongly the environment map reflects on the device surface. Higher values give more realistic reflections.",
                    ]}
                />
                <Step
                    number="04"
                    title="Adjust the device material."
                    description={[
                        "Go to the Material settings. These control how the device screen and body reflect light:",
                    ]}
                    items={[
                        "Metallic — makes the surface look like glass (higher) or plastic (lower).",
                        "Roughness — higher values scatter light for a matte finish; lower values give a smooth, mirror-like reflection.",
                        "Glow (Emissive) — simulates screen brightness. Raise this to make the display feel lit and vibrant.",
                        "Clearcoat — adds a glossy top layer like a glass screen protector. Combine with low roughness for a premium look.",
                        "Shine (Specular) — controls how sharp and bright reflections appear on the surface.",
                    ]}
                >
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Use the quick presets to jump between common setups: <strong>Glossy</strong> for that fresh-out-of-the-box look, <strong>Matte</strong> for a subtle, professional finish, or <strong>Default</strong> to reset.
                    </p>
                </Step>
                <Step
                    number="05"
                    title="Tweak the shadow and export."
                    description={[
                        "Go to the Shadow settings. Adjust Opacity to make the shadow darker or lighter, and Radius to control how soft or sharp it is. A softer shadow (higher radius) feels more natural and premium.",
                        "If your background is transparent (set to None), the shadow is still rendered — great for compositing the device into other designs.",
                        "Export your image. Compare it side by side with the default mockup from step 1. The lighting and material work transforms a flat screenshot into a visual that looks like Apple's own marketing material.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Build on the polished look.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to build a multi-device scene with iPhone, iPad, and MacBook."
                        description="Apply consistent lighting across multiple devices for a cohesive ecosystem shot."
                        href="/guides/multi-device-scene"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Add feature callouts and headlines that complement your polished lighting."
                        href="/guides/text-overlays-and-branding"
                    />
                    <ContinueCard
                        title="How to create a product reveal video with keyframe animation."
                        description="Animate your beautifully lit scene — the lighting carries through into every frame of your video."
                        href="/guides/product-reveal-video"
                    />
                </div>
            </div>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "How to polish your mockup with studio lighting and materials.",
                        "description": "The same device mockup with three different lighting treatments — Studio, Dramatic, and Flat — plus a custom material setup that makes the screen look glossy or matte.",
                        "totalTime": "PT10M",
                        "tool": { "@type": "HowToTool", "name": "Protato" },
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": "Start with a basic mockup.",
                                "text": "Set up a simple device mockup — pick an iPhone or iPad, import your screenshot, and choose a neutral background. Leave lighting on the default Studio preset."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": "Try each lighting preset.",
                                "text": "Open Lighting settings and tap through Studio (balanced), Dramatic (strong contrasts), and Flat (soft, diffused) presets. The scene updates instantly."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": "Fine-tune individual lights.",
                                "text": "Use per-light sliders to adjust Key, Fill, Rim, and Back lights independently. Adjust Exposure for global brightness and IBL Intensity for environment reflections."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": "Adjust the device material.",
                                "text": "Go to Material settings and control Metallic, Roughness, Glow (Emissive), Clearcoat, and Shine (Specular). Use quick presets for Glossy, Matte, or Default finishes."
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": "Tweak the shadow and export.",
                                "text": "Adjust shadow Opacity and Radius for a softer or sharper shadow. Export your image and compare with the default mockup — the lighting and material work transforms the result."
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
