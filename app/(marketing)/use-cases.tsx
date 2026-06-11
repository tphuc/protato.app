import Link from "next/link"
import { iosAppId } from "../config"

const useCases = [
  {
    title: "iPhone mockup generator and device frames",
    description:
      "Turn raw app screenshots into framed iPhone, iPad, and MacBook marketing visuals without leaving the project. Swap devices, colors, and angles in seconds.",
    slug: "iphone-mockup-generator",
  },
  {
    title: "Multi-device scene composer",
    description:
      "Place iPhone, iPad, and MacBook in a single scene to create rich product shots, comparison visuals, or ecosystem hero images — all in real time.",
    slug: "multi-device-scene-composer",
  },
  {
    title: "App Store preview video maker",
    description:
      "Animate camera moves, record keyframes, and export smooth product reveal clips directly from your mockup scene — no video editing skills required.",
    slug: "app-store-preview-video-maker",
  },
  {
    title: "Studio lighting presets for product shots",
    description:
      "Switch between Studio, Dramatic, and Flat lighting with one tap. Fine-tune each preset to match your brand's visual tone and product aesthetic.",
    slug: "studio-lighting-presets",
  },
  {
    title: "High-res export for any channel",
    description:
      "Export images up to 4K at 1x, 2x, or 3x density and videos at 720p, 1080p, or 1440p — ready for App Store, social media, pitch decks, or print.",
    slug: "high-res-export",
  },
  {
    title: "PBR material and reflection control",
    description:
      "Adjust metallic, roughness, clearcoat, and specular on every device model. Choose from Glossy, Matte, or Default presets for photorealistic results.",
    slug: "material-and-reflection-control",
  },
  {
    title: "Scene presets and project templates",
    description:
      "Save and reuse lighting, camera, and device configurations across projects. Keep your brand look consistent from one release to the next.",
    slug: "scene-presets-and-templates",
  },
  {
    title: "Animation timeline and keyframe editing",
    description:
      "Record camera moves, layer keyframes with 5 easing curves, and create cinematic product animations that bring your mockups to life.",
    slug: "animation-timeline-keyframing",
  },
  {
    title: "iCloud sync and cross-device workflow",
    description:
      "Start a mockup on your iPhone during a commute, open it on your Mac for detailed editing, and export from either device — projects sync seamlessly.",
    slug: "icloud-sync-cross-device",
  },
  {
    title: "Offline mockup creation",
    description:
      "Create and export full-quality mockups without an internet connection. Your screenshots and projects never leave your device unless you choose to sync.",
    slug: "offline-mockup-creation",
  },
]

export default function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Feature paths
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Jump straight into the workflows that matter to you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg">
            Each use case matches a clear intent — pick the one that fits what you are building right now.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Link
              key={useCase.slug}
              href={`/blog/${useCase.slug}`}
              className="group block rounded-2xl border border-border/60 bg-secondary/30 p-6 hover:bg-secondary/60 hover:border-border transition-colors"
            >
              <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                Feature
              </p>
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-foreground transition-colors">
                {useCase.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-base leading-relaxed">
                {useCase.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href={`https://apps.apple.com/app/protato/id${iosAppId}`}
            className="inline-flex items-center gap-2 text-lg font-medium text-blue-500 hover:text-blue-600 transition-colors"
          >
            Start with the iPhone mockup generator
            <span className="text-sm" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
