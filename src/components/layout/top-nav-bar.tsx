"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, FileDown } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAVIGATION_LINKS } from "@/config/navigation"
import { HERO_DATA } from "@/data/portfolio"
import { ThemeToggle } from "./theme-toggle"

const TopNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeNavLinkId, setActiveNavLinkId] = useState("home")

  const handleNavLinkClick = (linkId: string) => {
    setActiveNavLinkId(linkId)
    setIsMobileMenuOpen(false)
  }

  const handleNavLinkKeyDown = (event: React.KeyboardEvent, linkId: string) => {
    if (event.key === "Enter" || event.key === " ") {
      handleNavLinkClick(linkId)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background/80 px-6 py-4 shadow-md backdrop-blur-md md:px-8"
      aria-label="Main navigation"
    >
      <Link
        href="#home"
        className="text-xl font-extrabold tracking-tighter text-primary"
        onClick={() => handleNavLinkClick("home")}
      >
        Jonathan.Dev
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        {NAVIGATION_LINKS.map((navLink) => (
          <a
            key={navLink.id}
            href={navLink.href}
            className={cn(
              "rounded-md px-2 py-1 text-sm font-bold tracking-tight transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
              activeNavLinkId === navLink.id
                ? "border-b-2 border-primary pb-0.5 text-primary"
                : "text-muted-foreground"
            )}
            onClick={() => handleNavLinkClick(navLink.id)}
            onKeyDown={(event) => handleNavLinkKeyDown(event, navLink.id)}
            tabIndex={0}
            aria-current={activeNavLinkId === navLink.id ? "page" : undefined}
          >
            {navLink.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <Button
          asChild
          className="hidden rounded-full px-4 text-sm font-bold shadow-md md:inline-flex"
        >
          <a href={HERO_DATA.resumeHref} download aria-label="Download resume">
            <span className="hidden md:inline">Resume</span>
          </a>
        </Button>

        <ThemeToggle />

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-primary md:hidden"
              aria-label="Open navigation menu"
            >
              <span className="sr-only">Toggle menu</span>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-extrabold tracking-tighter text-primary">
                Jonathan.Dev
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {NAVIGATION_LINKS.map((navLink) => (
                <a
                  key={navLink.id}
                  href={navLink.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-bold tracking-tight transition-colors hover:bg-accent hover:text-accent-foreground",
                    activeNavLinkId === navLink.id
                      ? "bg-accent text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => handleNavLinkClick(navLink.id)}
                  onKeyDown={(event) => handleNavLinkKeyDown(event, navLink.id)}
                  tabIndex={0}
                  aria-current={
                    activeNavLinkId === navLink.id ? "page" : undefined
                  }
                >
                  {navLink.label}
                </a>
              ))}
              <div className="mt-4 px-2">
                <Button
                  asChild
                  className="w-full rounded-xl py-6 font-bold shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a
                    href={HERO_DATA.resumeHref}
                    download
                    aria-label="Download resume"
                    className="flex items-center justify-center gap-2"
                  >
                    <FileDown className="size-5" />
                    <span>Download Resume</span>
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export { TopNavBar }
