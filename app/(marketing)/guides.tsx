import Link from "next/link"

const featuredGuides = [
    {
        category: "Getting started",
        title: "Your first App Store screenshot",
        description:
            "Create a device mockup with your screenshot, add a background and headline, and export a finished image in six steps.",
        href: "/guides/your-first-app-store-screenshot",
    },
    {
        category: "Platform",
        title: "How to create an iPhone mockup",
        description:
            "Choose the right iPhone model, import your screenshot, adjust lighting, and export a polished 3D device image.",
        href: "/guides/create-iphone-mockup",
    },
    {
        category: "Reference",
        title: "App Store screenshot sizes 2026",
        description:
            "Complete reference for every required dimension and format spec for iPhone, iPad, and Google Play.",
        href: "/guides/app-store-screenshot-sizes",
    },
    {
        category: "Workflow",
        title: "Scene presets & templates",
        description:
            "Save your full scene — devices, camera angle, lighting, and materials — as a reusable preset for consistent campaigns.",
        href: "/guides/mockups-for-product-hunt",
    },
    {
        category: "Web",
        title: "SaaS landing page mockups",
        description:
            "Build hero shots, feature mockups, and ecosystem images ready for web dev handoff.",
        href: "/guides/mockups-for-saas-landing-page",
    },
    {
        category: "Marketing",
        title: "Social media launch graphics",
        description:
            "Design a complete social launch kit for Instagram, Twitter, and LinkedIn from one master mockup.",
        href: "/guides/social-media-graphics-app-launch",
    },
    {
        category: "Web",
        title: "Hero image for your app website",
        description:
            "Design a scroll-stopping hero with a 3D device mockup, branded overlay, and export optimized for web.",
        href: "/guides/hero-image-for-app-website",
    },
    {
        category: "Video",
        title: "App promo video in minutes",
        description:
            "Create a cinematic promo video with keyframe animation, camera orbits, screen recordings, and timed text overlays.",
        href: "/guides/make-app-promo-video",
    },
]

export default function Guides() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="max-w-2xl mb-16">
                    <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
                        Guides
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Step-by-step walkthroughs
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                        From your first mockup to launch-ready assets — follow along with your Protato project open.
                    </p>
                </div>

                <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                    {featuredGuides.map((guide) => (
                        <Link
                            key={guide.href}
                            href={guide.href}
                            className="group block rounded-3xl bg-secondary p-6 hover:bg-secondary/80 transition-colors"
                        >
                            <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                                {guide.category}
                            </p>
                            <h3 className="text-lg font-semibold tracking-tight group-hover:text-foreground transition-colors">
                                {guide.title}
                            </h3>
                            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                                {guide.description}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/guides"
                        className="inline-flex items-center gap-2 text-lg font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        Browse all 18 guides
                        <span className="text-sm" aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
