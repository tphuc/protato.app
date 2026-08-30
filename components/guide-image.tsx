import Image from "next/image"

type GuideImageProps = {
  src: string
  alt: string
  caption?: string
  priority?: boolean
}

/**
 * A consistent, accessible screenshot block for product guides.
 *
 * Store guide screenshots under public/guides/<guide-slug>/, then pass the
 * public path here (for example: /guides/app-store-screenshots/step-01.webp).
 */
export function GuideImage({ src, alt, caption, priority = false }: GuideImageProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-2xl border border-border/60 bg-secondary/20">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 720px, calc(100vw - 3rem)"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
