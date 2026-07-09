export interface GalleryItem {
  id: string
  title: string
  description: string
  imageUrl: string
  variant?: "wide" | "tall" | "square"
}
