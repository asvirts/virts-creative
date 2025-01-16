import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/Navbar"
import { Analytics } from "@vercel/analytics/react"

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
      <body
        className={`${helvetica.className} container mx-auto py-5 px-4 lg:px-0`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
