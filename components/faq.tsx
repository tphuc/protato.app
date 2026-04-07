
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
You can import screenshots or videos, adjust lighting and materials, and export polished images or animations—without using complex 3D software.`,
  },
  {
    id: "skills",
    question: "Do I need 3D experience to use Protato?",
    answer: `No — Protato is designed to be visual and intuitive.
You can create professional-looking mockups without learning traditional 3D tools like Blender or Cinema 4D.`,
  },
  {
    id: "devices",
    question: "What devices are supported?",
    answer: `Protato includes a curated library of modern iPhone models with accurate hardware details.
More devices and updates are added over time.`,
  },
  {
    id: "sync",
    question: "Does Protato sync across iPhone and Mac?",
    answer: `Yes — your projects and presets can sync across devices using iCloud, so you can start on one device and continue on another.`,
  },
  {
    id: "performance",
    question: "Will it run smoothly on my device?",
    answer: `Protato is built with Apple technologies like RealityKit and Metal for smooth, real-time rendering.
Performance may vary depending on your device, but most modern iPhones and Macs handle it comfortably.`,
  },
  {
    id: "offline",
    question: "Does Protato work offline?",
    answer: `Yes — most editing features work offline.
You only need an internet connection for things like syncing or downloading new assets.`,
  },
  {
    id: "pricing",
    question: "Is there a free version?",
    answer: `Yes. Protato includes a free version with limited credits.`
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