import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full mx-auto bg-yellow-50">
      <div className="container flex flex-col gap-8 mx-auto py-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left items-start gap-2">
            <h2 className="text-4xl font-bold text-dark">Contact</h2>
            <p className="text-light">andrew@virts.dev</p>
            <p className="text-light">Lafayette, LA, USA</p>
          </div>
          <div>
            <Link href="/">
              <Image
                src="/virts-logo.svg"
                alt="Virts Creative Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
        <hr className="border-light" />
        <div className="py-4 text-sm text-light">
          <p>© 2025 Virts Creative</p>
        </div>
      </div>
    </div>
  )
}
