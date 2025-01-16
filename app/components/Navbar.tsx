import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="mx-auto flex justify-between items-center py-5">
        <Link href="/">Home</Link>
        <div className="flex items-center gap-6">
          <Link href="/pages/about">About</Link>
          <Link href="#">Blog</Link>
          <Link href="/pages/contact">Contact</Link>
        </div>
      </nav>
    </div>
  )
}
