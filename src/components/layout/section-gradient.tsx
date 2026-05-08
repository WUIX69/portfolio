import { cn } from "@/lib/utils"

interface SectionGradientProps {
  side: "left" | "right"
  className?: string
}

const SectionGradient = ({ side, className }: SectionGradientProps) => {
  return (
    <div
      className={cn(
        "absolute -z-20 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none",
        side === "left" ? "-left-80 top-1/2 -translate-y-1/2" : "-right-80 top-1/2 -translate-y-1/2",
        className
      )}
      aria-hidden="true"
    />
  )
}

export { SectionGradient }
