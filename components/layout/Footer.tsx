import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 p-8">
      <img src={siteConfig.logo} alt="Logo" className="h-18" />
      <div className="flex gap-6">
        <Link href={`mailto:${siteConfig.socials.email}`}>
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </Link>
        <Link href={siteConfig.socials.instagram} target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </Link>
        <Link href={siteConfig.socials.linkedin} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        © 2025 {siteConfig.chapterName}. All Rights Reserved.
      </p>
    </footer>
  );
}
