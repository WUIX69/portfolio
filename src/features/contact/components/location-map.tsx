import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocationMapProps {
  location: string
  className?: string
}

const LocationMap = ({ location, className }: LocationMapProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-lg shadow-primary/5 md:col-span-2 md:row-span-1",
        className
      )}
    >
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=R262%2BRQ9,Santa%20Maria,Bulacan&output=embed"
        className="opacity-100 transition-all duration-700"
      ></iframe>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="absolute right-6 bottom-6 left-6 rounded-xl border border-border bg-card/80 p-4 shadow-xl backdrop-blur-md">
        <div className="mb-1 flex items-center gap-2">
          <MapPin className="size-4 text-primary" />
          <span className="font-sans text-sm font-bold text-foreground">
            {location}
          </span>
        </div>
        <p className="font-sans text-xs text-muted-foreground">
          Available for worldwide remote collaboration
        </p>
      </div>
    </div>
  )
}

export { LocationMap }
