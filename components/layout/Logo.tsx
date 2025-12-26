import Image from "next/image"
import Link from "next/link"

import chapterlogo from "@/components/layout/chapterlogo.jpeg"

interface LogoProps {
  university: string
}

const Logo = ({ university }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={chapterlogo.src}
        alt="chapter logo"
        width={100}
        height={100}
      />

      <div className="text-2xl font-bold">
        ColorStack
        <div className="text-xl text-primary">@ {university}</div>
      </div>
    </Link>
  )
}

export default Logo
