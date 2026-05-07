import { Package } from "lucide-react"

const HeroStatusOverlay = () => {
  return (
    <div className="absolute bottom-8 left-8 max-w-[250px] rounded-2xl border border-primary/10 bg-card/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="mb-2 flex items-center gap-3">
        <Package className="size-5 text-primary" aria-hidden="true" />
        <span className="font-sans text-sm font-bold tracking-tight text-foreground">
          System Status
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary/20">
        <div className="h-full w-3/4 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Deployment successful in 1.2s
      </p>
    </div>
  )
}

export { HeroStatusOverlay }
