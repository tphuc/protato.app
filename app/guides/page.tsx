import Link from "next/link"

const guides = [
    {
        number: "01",
        title: "How to create your first App Store screenshot on iPhone",
        description: "The cleanest starting point. Create a device mockup with your screenshot, add a background and headline, and export a finished image.",
        steps: 7,
        device: "iPhone 17 Pro Max",
        slug: "your-first-app-store-screenshot",
    },
    {
        number: "02",
        title: "How to build a multi-device scene with iPhone, iPad, and MacBook",
        description: "Place multiple devices in one scene, position them precisely, and export a single hero shot for your landing page or pitch deck.",
        steps: 5,
        device: "iPhone 17 Pro Max, iPad A16, MacBook Pro 14\"",
        slug: "multi-device-scene",
    },
    {
        number: "03",
        title: "How to create a product reveal video with keyframe animation",
        description: "Switch to animation mode, record camera moves with keyframes, preview your clip, and export a cinematic video ready for social or App Store.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "product-reveal-video",
    },
    {
        number: "04",
        title: "How to get professional 3D lighting on your mockup",
        description: "Apply lighting presets (Studio, Dramatic, Flat), adjust individual lights, control screen gloss and reflections — and transform a flat mockup into a premium visual.",
        steps: 5,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "studio-lighting-and-materials",
    },
    {
        number: "05",
        title: "How to add text overlays and branding to your mockups",
        description: "Add headlines, captions, and branding to your scene. Style fonts, apply gradient fills, position text in front or behind devices, and animate it.",
        steps: 5,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "text-overlays-and-branding",
    },
    {
        number: "06",
        title: "App Store screenshot sizes & requirements 2026",
        description: "Complete reference for every required dimension and format spec. Includes iPhone, iPad, Google Play, and upload steps for App Store Connect.",
        steps: 6,
        device: "iPhone 17 Pro Max, iPad A16, MacBook Pro 14\"",
        slug: "app-store-screenshot-sizes",
    },
    {
        number: "07",
        title: "How to export transparent PNG mockups",
        description: "Export device mockups with a transparent background for websites, pitch decks, and compositing. Covers shadow settings, PNG format, and use cases.",
        steps: 5,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "export-transparent-png-mockups",
    },
    {
        number: "08",
        title: "How to save and reuse mockup scenes with presets",
        description: "Save your full scene — devices, camera angle, lighting, materials, and text — as a preset. Reuse it across campaigns or share as JSON with your team.",
        steps: 5,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "mockups-for-product-hunt",
    },
    {
        number: "09",
        title: "How to create mockups for your SaaS landing page",
        description: "Build a complete landing page visual set — hero section, feature mockups, ecosystem shots, and transparent PNGs ready for web dev.",
        steps: 6,
        device: "iPhone 17 Pro Max, iPad A16, MacBook Pro 14\"",
        slug: "mockups-for-saas-landing-page",
    },
    {
        number: "10",
        title: "How to create a hero image for your app website",
        description: "Design a scroll-stopping hero image with a 3D device mockup, branded text overlay, and export settings optimized for web performance.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "hero-image-for-app-website",
    },
    {
        number: "11",
        title: "How to showcase your app on Dribbble and Behance",
        description: "Present your app like a pro on Dribbble and Behance with multiple-angle device shots, presentation layouts, and annotation callouts.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "showcase-app-on-dribbble",
    },
    {
        number: "12",
        title: "How to create social media graphics for your app launch",
        description: "Design a complete social launch kit — Instagram, Twitter/X, LinkedIn, and more — from a single master device mockup with consistent branding.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "social-media-graphics-app-launch",
    },
    {
        number: "13",
        title: "How to make an app promo video in minutes",
        description: "Create a cinematic promo video with keyframe animation, camera orbits, screen recordings on the device, and timed text overlays — no video editor needed.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "make-app-promo-video",
    },
    {
        number: "14",
        title: "How to make an Instagram Reel for your app",
        description: "Design a 15-second vertical Reel with a 3D device mockup, smooth camera animation, text callouts, and a screen recording on the display.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "instagram-reel-app-mockup",
    },
    {
        number: "15",
        title: "How to create App Preview videos for the App Store",
        description: "Build 15-30 second App Preview videos that auto-play in search results. Meet Apple's requirements and boost your App Store conversion rate.",
        steps: 6,
        device: "iPhone 17 Pro Max, MacBook Pro 14\"",
        slug: "app-preview-video-app-store",
    },
    {
        number: "16",
        title: "How to create an iPhone mockup",
        description: "Make a realistic iPhone mockup from your app screenshot. Choose a device, set the right canvas, refine the camera and lighting, then export for web, social, or the App Store.",
        steps: 6,
        device: "iPhone 17 Pro Max",
        slug: "create-iphone-mockup",
    },
    {
        number: "17",
        title: "How to create a MacBook mockup",
        description: "Turn a website or desktop-app screenshot into a polished MacBook mockup for your SaaS landing page, launch assets, portfolio, or pitch deck.",
        steps: 6,
        device: "MacBook Pro 14\"",
        slug: "create-macbook-mockup",
    },
    {
        number: "18",
        title: "3D mockup vs. flat screenshot: which should you use?",
        description: "Learn when a 3D device mockup adds impact, when a flat screenshot is clearer, and how to choose the right format for App Store pages, websites, social posts, and documentation.",
        steps: 6,
        device: "iPhone & Mac",
        slug: "3d-mockup-vs-flat-screenshot",
    },
    {
        number: "19",
        title: "How to create Product Hunt mockups for your launch",
        description: "Plan a focused launch gallery, make polished app mockups that explain your product at a glance, and reuse the assets across your website and social launch campaign.",
        steps: 6,
        device: "iPhone & Mac",
        slug: "product-hunt-launch-mockups",
    },
    {
        number: "20",
        title: "How to make App Store screenshots for a subscription app",
        description: "Build a six-frame App Store screenshot sequence that explains your subscription app's outcome, ongoing value, premium features, and accurate free-trial offer.",
        steps: 6,
        device: "iPhone & Mac",
        slug: "app-store-screenshots-subscription-app",
    },
]

export default function GuidesIndex() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-20">
            <div className="mb-16">
                <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
                    Guides
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    App mockup and App Store screenshot guides
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                    Practical guides for creating App Store screenshots, device mockups, launch graphics, and app promo videos on iPhone and Mac.
                </p>
            </div>

            <div className="space-y-4">
                {guides.map((guide) => (
                    <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="group block rounded-2xl border border-border/60 bg-secondary/20 p-6 hover:bg-secondary/40 hover:border-border transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-blue-500 transition-colors shrink-0 w-12">
                                {guide.number}
                            </span>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors">
                                    {guide.title}
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    {guide.description}
                                </p>
                                <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground/70">
                                    <span>{guide.steps} steps</span>
                                    <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                                    <span>{guide.device}</span>
                                </div>
                            </div>
                            <span className="text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors shrink-0 self-center text-lg">
                                &rarr;
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
