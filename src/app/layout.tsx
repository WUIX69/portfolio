import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TopNavBar } from "@/components/layout/top-nav-bar"
import { Footer } from "@/components/layout/footer"
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

export const metadata: Metadata = {
  title: "Jonathan L. — Jr. Full Stack Developer",
  description:
    "Portfolio of Jonathan L. Violeta — Jr. Full Stack Developer with 2+ years of experience building scalable web applications. Bridging robust backend systems with intuitive user interfaces.",
  openGraph: {
    title: "Jonathan L. — Jr. Full Stack Developer",
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
      <body className="flex min-h-screen flex-col bg-background pt-[72px] text-foreground">
        <ThemeProvider>
          <TopNavBar />
          <main className="mx-auto w-full max-w-[1440px] flex-grow px-6 py-16 md:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
