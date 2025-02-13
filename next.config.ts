import MillionLint from "@million/lint"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "67wvo3jvf7.ufs.sh",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

export default MillionLint.next({
  enabled: true,
  rsc: true
})(nextConfig)
