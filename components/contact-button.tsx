// ContactButton.tsx


import { Button } from "@/components/ui/button"

export function ContactButtonClient() {

  return (
    <a href="mailto:hello@protato.app" className="cursor-pointer py-1 font-medium text-foreground/90 hover:text-foreground">
      Contact
    </a>
  )
}