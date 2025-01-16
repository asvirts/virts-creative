import Image from "next/image"
import Link from "next/link"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Footer() {
  return (
    <div className="w-full mx-auto bg-yellow-50 px-4">
      <div className="container flex flex-col gap-8 mx-auto py-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left items-start gap-2">
            <h2 className="text-4xl text-dark">Contact</h2>
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
        <div className="py-4 text-sm text-light flex items-center justify-between">
          <p>© 2025 Virts Creative</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://x.com/asvirts" target="_blank">
              <i className="bi bi-twitter-x text-light text-2xl"></i>
            </Link>
            <Link href="https://www.github.com/asvirts/" target="_blank">
              <i className="bi bi-github text-light text-2xl"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/andrewvirts/"
              target="_blank"
            >
              <i className="bi bi-linkedin text-light text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
