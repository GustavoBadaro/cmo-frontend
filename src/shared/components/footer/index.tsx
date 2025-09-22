import { getFooter } from "@/shared/services/footer/get-footer";
import { cx } from "class-variance-authority";
import { SocialMediaFooter } from "./social-media";
import { ContactFooter } from "./contact";

import Link from "next/link";
import Image from "next/image";
import { PoliciesFooter } from "./policies";

export async function Footer() {
  const footer = await getFooter();

  return (
    <footer className={cx(["w-full py-16 bg-brand-blue"])}>
      <div className="layout flex items-center justify-between">
        <div className="flex flex-col gap-8">
          <Link href="/">
            {footer?.data.logo && (
              <Image
                src={footer?.data.logo.url}
                width={footer.data.logo.width}
                height={footer.data.logo.height}
                alt="CMO Construtura"
                quality={100}
                loading="eager"
                className="max-w-[100px] h-auto object-contain"
              />
            )}
          </Link>

          {footer?.data.social_media && (
            <SocialMediaFooter data={footer?.data.social_media} />
          )}

          {footer?.data.contact && (
            <ContactFooter data={footer?.data.contact} />
          )}
        </div>
      </div>

      {footer?.data.links_policy && (
        <div className="layout mt-8 pt-8 border-t border-white/15 max-lg:px-0">
          <PoliciesFooter data={footer?.data.links_policy} />
        </div>
      )}
    </footer>
  );
}
