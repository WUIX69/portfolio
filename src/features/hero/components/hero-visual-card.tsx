import Image from "next/image"

import { HeroStatusOverlay } from "@/features/hero/components/hero-status-overlay"

const HeroVisualCard = () => {
  return (
    <div className="col-span-1 lg:col-span-6">
      <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-2xl lg:h-[600px]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-muted" />
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src="/images/hero-abstract.png"
            alt="Abstract software architecture visualization with floating glass panels and violet accents"
            fill
            className="object-cover opacity-90"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <HeroStatusOverlay />
        </div>
      </div>
    </div>
  )
}

export { HeroVisualCard }
