import { ComponentMenuLink } from "@/core/types/strapi";
import { cx } from "class-variance-authority";

import Link from "next/link";

interface Props {
  data: ComponentMenuLink[];
}

export async function PoliciesFooter({ data }: Props) {
  return (
    <nav
      className={cx([
        "flex items-center justify-between gap-4 max-lg:overflow-auto",
        "max-lg:px-6 max-lg:gap-6",
      ])}
    >
      {data.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target={item.target}
          className={cx([
            "text-xs text-[#E8E9F8] hover:underline max-lg:whitespace-nowrap",
          ])}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
