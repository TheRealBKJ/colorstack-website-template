import Link from "next/link"
import { NAVIGATION_LINKS } from "@/lib/constants"

const Navigation = () => {
  return (
    <div className="flex gap-10 text-xl font-bold">
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Navigation
