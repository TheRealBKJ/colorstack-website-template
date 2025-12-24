"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between px-16 py-4 shadow bg-zinc-50 relative z-10">
      <Link href="/" className="flex items-center">
        <img src={siteConfig.logo} alt="Logo" className="h-18" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-12">
          {siteConfig.navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild data-active={pathname === link.href}>
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
