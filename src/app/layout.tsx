import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { Metadata, Viewport } from "next"

import "./globals.css"
import { ThemeProvider } from "@/context/theme-provider"
import { MobileMenuProvider } from "@/context/mobile-menu"
import { TopNavBar } from "@/components/layout/top-nav-bar"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/shared/scroll-to-top"
import { cn } from "@/lib/utils"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Jonathan.Dev — Jr. Full Stack Developer",
  description:
    "Portfolio of Jonathan L. Violeta — Jr. Full Stack Developer with 2+ years of experience building scalable web applications. Bridging robust backend systems with intuitive user interfaces.",
  openGraph: {
    title: "Jonathan.Dev — Jr. Full Stack Developer",
    description:
      "Portfolio of Jonathan L. Violeta — Jr. Full Stack Developer with 2+ years of experience building scalable web applications.",
    type: "website",
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        plusJakartaSans.variable,
        inter.variable,
        jetbrainsMono.variable,
        "antialiased"
      )}
    >
      <body className="flex min-h-screen flex-col bg-background pt-[96px] text-foreground">
        <ThemeProvider>
          <MobileMenuProvider>
            <TopNavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ScrollToTop />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
