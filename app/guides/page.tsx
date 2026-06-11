import Link from "next/link"

const guides = [
    {
        number: "01",
        title: "How to create your first App Store screenshot on iPhone",
        description: "The cleanest starting point. Create a device mockup with your screenshot, add a background and headline, and export a finished image.",
        steps: 6,
        device: "iPhone",
        slug: "your-first-app-store-screenshot",
    },
    {
        number: "02",
        title: "How to build a multi-device scene with iPhone, iPad, and MacBook",
        description: "Place multiple devices in one scene, position them precisely, and export a single hero shot for your landing page or pitch deck.",
        steps: 5,
        device: "iPhone & Mac",
        slug: "multi-device-scene",
    },
    {
        number: "03",
        title: "How to create a product reveal video with keyframe animation",
        description: "Switch to animation mode, record camera moves with keyframes, preview your clip, and export a cinematic video ready for social or App Store.",
        steps: 6,
        device: "iPhone & Mac",
        slug: "product-reveal-video",
    },
    {
        number: "04",
        title: "How to polish your mockup with studio lighting and materials",
        description: "Apply lighting presets, adjust individual lights, control screen gloss and reflections — and transform a flat mockup into a premium visual.",
        steps: 5,
        device: "iPhone & Mac",
        slug: "studio-lighting-and-materials",
    },
    {
        number: "05",
        title: "How to add text overlays and branding to your mockups",
        description: "Add headlines, captions, and branding to your scene. Style fonts, apply gradient fills, position text in front or behind devices, and animate it.",
        steps: 5,
        device: "iPhone & Mac",
        slug: "text-overlays-and-branding",
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
                    Quickstart guides
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                    Step-by-step walkthroughs to get you from zero to production-ready mockups on iPhone and Mac.
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
