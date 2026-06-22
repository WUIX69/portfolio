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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
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
            "fixed bottom-8 right-8 z-40 flex size-12 items-center justify-center rounded-full border border-border/40 bg-background/80 text-primary shadow-lg shadow-primary/5 backdrop-blur-md transition-all duration-200 hover:border-primary/45 hover:bg-accent focus:outline-none focus:ring-4 focus:ring-primary/10 cursor-pointer"
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
