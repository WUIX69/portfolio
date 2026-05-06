"use client"

import { useState } from "react"
import Link from "next/link"
import { CodeXml, Mail, Menu, FileDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/config/navigation"

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <CodeXml className="size-5" />,
  mail: <Mail className="size-5" />,
}

const TopNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeNavLinkId, setActiveNavLinkId] = useState("home")

  const handleNavLinkClick = (linkId: string) => {
    setActiveNavLinkId(linkId)
    setIsMobileMenuOpen(false)
  }

  const handleNavLinkKeyDown = (
    event: React.KeyboardEvent,
    linkId: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleNavLinkClick(linkId)
    }
  }

  const headerIconLinks = SOCIAL_LINKS.filter(
    (socialLink) =>
      socialLink.iconName === "github" || socialLink.iconName === "mail"
  )

  return (
    <nav
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-background/80 px-6 py-4 shadow-md backdrop-blur-md md:px-8"
      aria-label="Main navigation"
    >
      <Link
        href="#home"
        className="text-xl font-extrabold tracking-tighter text-primary"
        onClick={() => handleNavLinkClick("home")}
      >
        Jonathan L.
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
            aria-current={
              activeNavLinkId === navLink.id ? "page" : undefined
            }
          >
            {navLink.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button
          asChild
          className="rounded-full px-4 text-sm font-bold shadow-md"
        >
          <a href="#" aria-label="Download resume">
            <FileDown className="size-4 md:hidden" />
            <span className="hidden md:inline">Resume</span>
            <span className="md:hidden">Resume</span>
          </a>
        </Button>

        <div className="hidden gap-1 md:flex">
          {headerIconLinks.map((iconLink) => (
            <Button
              key={iconLink.label}
              variant="ghost"
              size="icon"
              className="rounded-full text-primary hover:bg-accent"
              asChild
            >
              <a
                href={iconLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={iconLink.label}
              >
                {ICON_MAP[iconLink.iconName]}
              </a>
            </Button>
          ))}
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-primary md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left text-lg font-extrabold tracking-tighter text-primary">
                Jonathan L.
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
                  onKeyDown={(event) =>
                    handleNavLinkKeyDown(event, navLink.id)
                  }
                  tabIndex={0}
                  aria-current={
                    activeNavLinkId === navLink.id ? "page" : undefined
                  }
                >
                  {navLink.label}
                </a>
              ))}

              <div className="my-4 h-px bg-border" aria-hidden="true" />

              <div className="flex gap-2 px-4">
                {headerIconLinks.map((iconLink) => (
                  <Button
                    key={iconLink.label}
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-primary hover:bg-accent"
                    asChild
                  >
                    <a
                      href={iconLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={iconLink.label}
                    >
                      {ICON_MAP[iconLink.iconName]}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export { TopNavBar }
