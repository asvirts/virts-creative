import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-5">
      <Link href="/">Home</Link>
      <div className="flex items-center gap-6">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
