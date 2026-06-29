"use client"

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
import { NAVIGATION_LINKS } from "@/data/navigation"
import { HERO_DATA } from "@/data/hero"
import { ThemeToggle } from "./theme-toggle"
import { GlimmerButton } from "@/components/shared/glimmer-button"
import { useMobileMenu } from "@/context/mobile-menu"

const TopNavBar = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeNavLinkId,
    setActiveNavLinkId,
  } = useMobileMenu()

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
      className="fixed top-4 right-4 left-4 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/40 bg-background/70 px-6 py-3 shadow-lg shadow-primary/5 backdrop-blur-md transition-all duration-300 md:px-8"
      aria-label="Main navigation"
    >
      <Link
        href="#home"
        className="text-xl font-extrabold tracking-tighter text-primary transition-opacity hover:opacity-90"
        onClick={() => handleNavLinkClick("home")}
      >
        Jonathan.Dev
      </Link>

      <div className="hidden items-center gap-4 md:flex">
        {NAVIGATION_LINKS.map((navLink) => (
          <a
            key={navLink.id}
            href={navLink.href}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-bold tracking-tight transition-all duration-300 hover:bg-accent hover:text-accent-foreground",
              activeNavLinkId === navLink.id
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:text-foreground"
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

      <div className="flex items-center gap-1 md:gap-5">
        <GlimmerButton
          href={HERO_DATA.resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume"
          className="hidden md:inline-flex"
        >
          Resume
        </GlimmerButton>

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
            <div className="flex flex-col gap-1 px-3">
              {NAVIGATION_LINKS.map((navLink) => (
                <a
                  key={navLink.id}
                  href={navLink.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-bold tracking-tight transition-colors hover:bg-accent hover:text-accent-foreground",
                    activeNavLinkId === navLink.id
                      ? "bg-accent/50 text-primary"
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
            </div>
            <div className="mt-2 flex justify-center px-4">
              <GlimmerButton
                href={HERO_DATA.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume"
                className="w-fit w-full px-8 py-3 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileDown className="size-4" />
                <span>Resume</span>
              </GlimmerButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

export { TopNavBar }
