import { Package } from "lucide-react"

const HeroStatusOverlay = () => {
  return (
    <div className="absolute bottom-8 left-8 max-w-[250px] rounded-2xl border border-border bg-card/90 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-2 flex items-center gap-3">
        <Package className="size-5 text-primary" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight">
          System Status
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full w-3/4 rounded-full bg-primary" />
      </div>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        Deployment successful in 1.2s
      </p>
    </div>
  )
}

export { HeroStatusOverlay }
