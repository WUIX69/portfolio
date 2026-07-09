"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { m } from "motion/react"
import { Button } from "@/components/ui/button"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative rounded-full text-primary hover:bg-accent"
        aria-label="Toggle theme skeleton"
      >
        <div className="size-5" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative rounded-full text-primary hover:bg-accent"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <m.div
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute"
      >
        <Sun className="size-5" />
      </m.div>
      <m.div
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Moon className="size-5" />
      </m.div>
    </Button>
  )
}
