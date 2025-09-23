import { cx } from "class-variance-authority";
import { ComponentMenuLink } from "@/core/types/strapi";
import Link from "next/link";

interface Props {
  title: string;
  links: ComponentMenuLink[];
}

export async function GroupMenuFooter({ title, links }: Props) {
  return (
    <div className="flex flex-col gap-2.5">
      <strong className="font-semibold text-white">{title}</strong>
      <nav className={cx(["mt-6 flex flex-col gap-4"])}>
        {links.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target={item.target}
            className={cx(["text-sm text-[#E4E2DD] hover:underline"])}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
