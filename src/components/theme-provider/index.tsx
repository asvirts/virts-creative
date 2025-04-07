"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

const initialState: {
  theme: Theme
  setTheme: (theme: Theme) => void
} = {
  theme: "system",
  setTheme: () => null
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  attribute = "data-theme",
  enableSystem = false,
  disableTransitionOnChange = false
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    // Remove old data-theme attribute
    root.removeAttribute(attribute)

    // Add new data-theme attribute
    let appliedTheme = theme

    if (theme === "system" && enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"
      appliedTheme = systemTheme
    }

    // Add transition blocker if configured
    if (disableTransitionOnChange) {
      document.documentElement.classList.add("[&_*]:!transition-none")

      // Remove the no-transitions class after a short delay
      setTimeout(() => {
        document.documentElement.classList.remove("[&_*]:!transition-none")
      }, 100)
    }

    // Apply the theme
    root.setAttribute(attribute, appliedTheme)
  }, [theme, attribute, disableTransitionOnChange, enableSystem])

  // Listen for system theme changes if using system theme
  useEffect(() => {
    if (!enableSystem) return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      if (theme === "system") {
        document.documentElement.setAttribute(
          attribute,
          mediaQuery.matches ? "dark" : "light"
        )
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [attribute, enableSystem, theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => setTheme(newTheme)
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
