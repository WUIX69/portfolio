"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const startY = window.scrollY || window.pageYOffset
    if (startY === 0) return

    const duration = 600 // ms
    const startTime = performance.now()

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeInOutCubic easing
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo(0, startY * (1 - ease))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          onClick={scrollToTop}
          className={cn(
            "fixed right-8 bottom-8 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full border border-border/40 bg-background/80 text-primary shadow-lg shadow-primary/5 backdrop-blur-md transition-all duration-200 hover:border-primary/45 hover:bg-accent focus:ring-4 focus:ring-primary/10 focus:outline-none"
          )}
          aria-label="Scroll to top"
          title="Scroll to top"
          type="button"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
