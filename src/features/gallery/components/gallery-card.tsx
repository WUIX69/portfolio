import Image from "next/image"
import { cn } from "@/lib/utils"
import { type GalleryItem } from "@/types/gallery"

interface GalleryCardProps {
  item: GalleryItem
  className?: string
}

const GalleryCard = ({ item, className }: GalleryCardProps) => {
  return (
    <div
      className={cn(
        "group relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl",
        className
      )}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Dark overlay that appears on hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm font-medium text-white/80">{item.description}</p>
      </div>
    </div>
  )
}

export { GalleryCard }
