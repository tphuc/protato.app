
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "what-is",
    question: "What is Protato?",
    answer: `Protato is a 3D mockup tool for iOS and macOS that lets you create high-quality device visuals in seconds.

Import screenshots or videos, place them on realistic iPhone, iPad, or MacBook models, adjust lighting and materials, and export polished images or animations — no 3D experience required.`,
  },
  {
    id: "skills",
    question: "Do I need 3D experience?",
    answer: `Not at all. Protato is built for people who have never opened Blender or Cinema 4D. The controls are intuitive, the preview is real-time, and you can go from import to export in under a minute.`,
  },
  {
    id: "devices",
    question: "What devices and models are available?",
    answer: `Protato includes a curated library of the latest iPhone models (including iPhone 17 and 17 Pro Max), iPad, and MacBook Pro — each with accurate colors, materials, and hardware details. More devices are added with every update.`,
  },
  {
    id: "export",
    question: "What can I export?",
    answer: `You can export still images (PNG/JPEG) up to 4K resolution at 1x, 2x, or 3x density, and videos at 720p, 1080p, or 1440p. Both include the transparent background option for flexible use in presentations, websites, and mockups.`,
  },
  {
    id: "sync",
    question: "Does Protato sync across my devices?",
    answer: `Yes — projects and presets sync seamlessly via iCloud. Start a mockup on your iPhone during a commute, then open it on your Mac to add animations and export.`,
  },
  {
    id: "performance",
    question: "Will it run smoothly on my device?",
    answer: `Protato is built natively with Apple's RealityKit and Metal frameworks for smooth, real-time rendering. Most modern iPhones, iPads, and Apple Silicon Macs handle it with ease.`,
  },
  {
    id: "offline",
    question: "Does Protato work offline?",
    answer: `Yes — all core editing features work fully offline. You only need an internet connection for iCloud sync and downloading new device assets.`,
  },
  {
    id: "pricing",
    question: "Is there a free version?",
    answer: `Yes. Protato includes a free tier with 5 export credits so you can try everything before committing. All features are unlocked at every tier — only the number of exports is limited.`
  },
];

export function FaqSection() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-4xl tracking-tight font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-2 bg-secondary p-6 rounded-3xl">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-2xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-md md:text-lg whitespace-pre-line">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}