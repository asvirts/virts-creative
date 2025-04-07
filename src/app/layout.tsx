import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://virtscreative.com"),
  title: {
    default: "Virts Creative | Web Design & Development Agency",
    template: "%s | Virts Creative"
  },
  description:
    "Professional web design, development, and branding services to help your business stand out online.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "digital agency",
    "responsive design"
  ],
  authors: [{ name: "Virts Creative" }],
  creator: "Virts Creative",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtscreative.com",
    title: "Virts Creative | Web Design & Development Agency",
    description:
      "Professional web design, development, and branding services to help your business stand out online.",
    siteName: "Virts Creative"
  },
  twitter: {
    card: "summary_large_image",
    title: "Virts Creative | Web Design & Development Agency",
    description:
      "Professional web design, development, and branding services to help your business stand out online.",
    creator: "@virtscreative"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://virtscreative.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="items-center justify-center">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
