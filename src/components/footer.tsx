import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © {new Date().getFullYear()} Virts Creative. All rights reserved.
          </p>
          <nav className="flex gap-4 md:gap-6">
            <Link href="/terms" className="text-sm font-medium underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/sitemap.xml" className="text-sm font-medium underline-offset-4 hover:underline">
              Sitemap
            </Link>
          </nav>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-gray-500 hover:text-black" />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-gray-500 hover:text-black" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-gray-500 hover:text-black" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-gray-500 hover:text-black" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

