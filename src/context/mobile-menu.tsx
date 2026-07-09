"use client"

import { createContext, useContext, useState, useMemo, type ReactNode } from "react"

interface MobileMenuContextValue {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  activeNavLinkId: string
  setActiveNavLinkId: (id: string) => void
}

const MobileMenuContext = createContext<MobileMenuContextValue | undefined>(
  undefined
)

const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeNavLinkId, setActiveNavLinkId] = useState("home")

  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      activeNavLinkId,
      setActiveNavLinkId,
    }),
    [isMobileMenuOpen, activeNavLinkId]
  )

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  )
}

const useMobileMenu = () => {
  const context = useContext(MobileMenuContext)
  if (context === undefined) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider")
  }
  return context
}

export { MobileMenuProvider, useMobileMenu }
