import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          50: "#fef9ed",
          100: "#fdecc6",
          200: "#fbe3aa",
          300: "#fad684",
          400: "#f9ce6c",
          500: "#f7c247",
          600: "#e1b141",
          700: "#af8a32",
          800: "#886b27",
          900: "#68511e"
        },
        dark: "#242424",
        light: "#8E8E8E"
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        instrumentSerif: ["Instrument Serif", "serif"]
      }
    }
  },
  plugins: []
} satisfies Config
