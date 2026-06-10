import Link from "next/link"
import { Button } from "@/components/ui/button"
import { iosAppId, macAppId } from "@/app/config"

export default function Guide02() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                    How-to guide 02
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                How to build a multi-device scene with iPhone, iPad, and MacBook.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                One device is a screenshot. Multiple devices tell a story. Place iPhone, iPad, and MacBook in the same scene to create ecosystem hero shots, feature comparisons, or product family visuals.
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
                        A three-device scene with an iPhone, iPad, and MacBook, each showing different screens, positioned in a balanced composition, exported as a single image.
                    </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
                    <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                        What you&apos;ll use
                    </p>
                    <p className="text-base leading-relaxed">
                        Device list (add/remove), model picker, transform controls, media import per device, camera orbit/pan, and still export.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-border/60 bg-secondary/30 p-5">
                <p className="text-sm text-muted-foreground flex-1">
                    Multi-device scenes work best on Mac, where the three-column layout gives you full control over each device&apos;s position. You can start on iPhone and sync via iCloud.
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
                    title="Start with a single device and set your canvas."
                    description={[
                        "Open Protato and pick your primary device — the one that will anchor the composition. iPhone is a natural starting point, but you can start with any model.",
                        "Set the aspect ratio to a wide canvas like 16:9 so you have room to place multiple devices without crowding. Choose a solid or gradient background that gives the scene depth.",
                    ]}
                />
                <Step
                    number="02"
                    title="Add a second and third device to the scene."
                    description={[
                        "On Mac: In the right inspector (Devices mode), click the + button below the device list. A sheet opens where you can choose the next model — pick an iPad or a different iPhone color variant.",
                        "On iPhone: Tap the Devices button (phone icon above the canvas), then tap + to add another device.",
                        "Each new device appears in the scene with its own position, rotation, and screen content. They stack on top of each other initially — you will arrange them next.",
                    ]}
                />
                <Step
                    number="03"
                    title="Position each device using transform controls."
                    description={[
                        "Select a device by tapping it on the canvas or clicking it in the device list. In the Transform section, adjust:",
                    ]}
                    items={[
                        "Scale — make secondary devices smaller to create depth (e.g., iPad at 0.8x, MacBook at 0.6x)",
                        "Yaw — rotate devices slightly toward each other for a natural conversation layout",
                        "Pitch — tilt devices at matching angles for a consistent look",
                        "Offset X/Y/Z — nudge each device into its final position without moving the camera",
                    ]}
                />
                <Step
                    number="04"
                    title="Import screenshots onto each device."
                    description={[
                        "Select a device, open the Media tab in settings, and import a screenshot. Each device can show a different screen — use this to highlight different features or views of your product.",
                        "On Mac, you can also drag and drop images directly from Finder onto individual devices. Repeat for every device in your scene.",
                    ]}
                />
                <Step
                    number="05"
                    title="Adjust the camera and export."
                    description={[
                        "Use Orbit mode to find the best camera angle that captures all devices in a balanced frame. Switch to Pan mode to fine-tune individual device positions if something feels off.",
                        "Once the composition looks right, tap Export. Choose PNG for transparency (useful if you want to composite the scene later) or JPEG for a ready-to-use file.",
                        "The result is a single, polished multi-device hero shot — perfect for landing pages, pitch decks, or ecosystem marketing.",
                    ]}
                />
            </div>

            <hr className="my-16 border-border/40" />

            <div>
                <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-6">
                    Continue
                </p>
                <p className="text-lg font-semibold mb-6">
                    Take the scene further.
                </p>
                <div className="space-y-4">
                    <ContinueCard
                        title="How to create a product reveal video with keyframe animation."
                        description="Animate the multi-device scene — orbit the camera, reveal each device, and export a cinematic product video."
                        href="/guides/product-reveal-video"
                    />
                    <ContinueCard
                        title="How to polish your mockup with studio lighting and materials."
                        description="Make every device in the scene look consistent with shared lighting presets and material tweaks."
                        href="/guides/studio-lighting-and-materials"
                    />
                    <ContinueCard
                        title="How to add text overlays and branding to your mockups."
                        description="Label each device with feature callouts and add a hero headline that anchors the entire scene."
                        href="/guides/text-overlays-and-branding"
                    />
                </div>
            </div>

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
