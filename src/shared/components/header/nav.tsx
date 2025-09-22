"use client";

import { ComponentMenuLink } from "@/core/types/strapi";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  links: ComponentMenuLink[];
}

export function NavigationHeader({ links }: Props) {
  const pathname = usePathname();

  return (
    <nav className="flex">
      {links.map((item) => {
        const isActive = pathname === item.url;

        return (
          <Link
            key={item.url}
            href={item.url}
            target={item.target}
            className={cx(
              "font-semibold text-sm text-center tracking-wide transition-colors",
              "px-4 py-6.5 relative before:content-[''] before:w-1/2 before:h-1 ",
              "before:absolute before:bg-secondary-500 before:top-0 before:left-1/2",
              "before:-translate-x-1/2 before:rounded-b-2xl before:opacity-0",
              "before:transition-opacity",
              isActive
                ? "text-secondary-500 before:opacity-100"
                : "text-support-gray hover:text-brand-blue"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
