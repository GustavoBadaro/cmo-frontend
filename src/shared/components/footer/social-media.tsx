import { Facebook, Instagram, Youtube } from "@/shared/icons";
import { cx } from "class-variance-authority";
import Link from "next/link";
import styles from "./styles.module.css";

interface Props {
  data: {
    facebook_url?: string;
    instagram_url?: string;
    youtube_url?: string;
  };
}

export async function SocialMediaFooter({ data }: Props) {
  const socialMedia = [
    { title: "Facebook", icon: <Facebook />, url: data?.facebook_url },
    { title: "Instagram", icon: <Instagram />, url: data?.instagram_url },
    { title: "Youtube", icon: <Youtube />, url: data?.youtube_url },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      <strong className="font-medium text-xs text-[#E4E2DD]">
        Acompanhe a CMO
      </strong>
      <ul className={cx(["flex items-center gap-4", styles["listing-links"]])}>
        {socialMedia.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url ?? "/"}
              target="_blank"
              aria-label={item.title}
              title={item.title}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
