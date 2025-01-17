import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Ankle from "./components/Ankle"
import Footer from "./components/Footer"

const helvetica = localFont({
  src: "../public/fonts/Helvetica.woff",
  variable: "--font-helvetica",
  preload: true,
  display: "swap"
})

export const metadata: Metadata = {
  title: "Virts Creative",
  description:
    "I elevate startups and small-medium businesses through design and development"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <body className={`${helvetica.className}`}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Ankle />
        <Footer />
      </body>
    </html>
  )
}
