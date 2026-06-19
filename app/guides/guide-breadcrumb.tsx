import Link from "next/link"
import Script from "next/script"

export default function GuideBreadcrumb({ title }: { title: string }) {
    const items = [
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: title, href: "" },
    ]

    return (
        <>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
                <ol className="flex items-center gap-2">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            {i > 0 && (
                                <span className="text-muted-foreground/40 select-none">/</span>
                            )}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-foreground transition-colors">
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                                    {item.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": items.map((item, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "name": item.name,
                            ...(item.href ? { "item": `https://protato.app${item.href}` } : {}),
                        })),
                    }),
                }}
            />
        </>
    )
}
