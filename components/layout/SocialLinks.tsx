import Image from "next/image"
import { SOCIAL_LINKS } from "@/lib/constants"

import email from "@/components/layout/email.png"
import insta from "@/components/layout/insta.png"
import linkedin from "@/components/layout/linkedin.png"

const socialIcons = [
  { href: SOCIAL_LINKS.email, src: email, alt: "Email" },
  { href: SOCIAL_LINKS.linkedin, src: linkedin, alt: "LinkedIn" },
  { href: SOCIAL_LINKS.instagram, src: insta, alt: "Instagram" },
]

const SocialLinks = () => {
  return (
    <div className="flex p-4 gap-2">
      {socialIcons.map((icon) => (
        <a
          key={icon.alt}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={icon.src.src}
            alt={icon.alt}
            width={50}
            height={50}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
