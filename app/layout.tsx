import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "./components/Navbar"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from "next/dynamic"

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

const Ankle = dynamic(() => import("./components/Ankle"), {
  loading: () => <div className="w-full bg-yellow-500 h-[300px]" />
})

const Footer = dynamic(() => import("./components/Footer"))

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <link
              rel="preconnect"
              href="https://67wvo3jvf7.ufs.sh"
              crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
          </>
        )}
      </head>
      {process.env.NODE_ENV === "production" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
      <body className={`${helvetica.className}`}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Ankle />
        <Footer />
      </body>
    </html>
  )
}
