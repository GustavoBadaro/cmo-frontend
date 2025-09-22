import { Locale, Phone } from "@/shared/icons";
import { cx } from "class-variance-authority";

import Link from "next/link";

interface Props {
  data: {
    address: {
      content: string;
      url_google?: string;
    };
    phone?: string;
  };
}

export async function ContactFooter({ data }: Props) {
  const cleanPhone = data?.phone?.replace(/\D/g, "");

  return (
    <div className="flex flex-col gap-3">
      <strong className="font-medium text-xs text-[#E4E2DD]">
        Onde estamos
      </strong>

      <div className="flex items-start gap-3 leading-[1.6]">
        <Locale className="mt-1" color="#6D94E9" />
        <Link
          href={data.address?.url_google ?? "#"}
          target="_blank"
          className={cx([
            "text-[#E8E9F8]",
            !data.address?.url_google
              ? "pointer-events-none !cursor-default"
              : "hover:underline",
          ])}
          aria-disabled={!!data.address?.url_google}
        >
          {data.address.content.split("\n").map((line, i) => (
            <p key={i} className="text-inherit">
              {line}
            </p>
          ))}
        </Link>
      </div>

      {cleanPhone && (
        <div className="flex items-center gap-3">
          <Phone color="#6D94E9" />
          <Link
            href={`tel:+55${cleanPhone}`}
            target="_blank"
            className={cx(["text-[#E8E9F8] hover:underline"])}
          >
            {data.phone}
          </Link>
        </div>
      )}
    </div>
  );
}
