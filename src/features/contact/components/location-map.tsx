import Image from "next/image"
import { MapPin } from "lucide-react"

interface LocationMapProps {
  location: string
}

const LocationMap = ({ location }: LocationMapProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-primary/5 md:col-span-2 md:row-span-1">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKTeQTucN-zU1ZCU06obKXAv_CZK35Ny1cghYQpcrP-L0E2TfDvQr1p7khopUbMfS0RP2qbWjI1aJyRgf9vJAhmTI86X4JNHlKp_DEFzIFt66fQfzr723cHMp8hoLU7GdbSm4VIDq_t9H6GHKP8vDF7L34X-p5Xuck_zs9ze1i6ka6kllH6ch71kO58SJ9RSKeCBfpCyWgWzKaROQZNOgqbtnyEQ6hdhgFp86hiqU1Jh7uteIPAyYTVKQIVD97YTxoqLl-W6CCjgQy"
        alt="Silicon Valley Map"
        fill
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      <div className="absolute bottom-6 left-6 max-w-[80%] rounded-xl border border-border bg-card/80 p-4 shadow-xl backdrop-blur-md">
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
