import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { NavigationHeader } from "./nav";
import Link from "next/link";
import { Lock, UserCicle } from "@/shared/icons";
import { getHeader } from "@/shared/services/header/get-header";
import Image from "next/image";
import { MobileHeader } from "./mobile";

export async function Header() {
  const header = await getHeader();

  return (
    <>
      <header className={cx(["w-full bg-white max-lg:hidden"])}>
        <div className="layout flex items-center justify-between">
          <Link href="/">
            {header?.data.logo && (
              <Image
                src={header?.data.logo.url}
                width={header.data.logo.width}
                height={header.data.logo.height}
                alt="CMO Construtura"
                quality={100}
                loading="eager"
                className="max-w-[90px] h-auto object-contain"
              />
            )}
          </Link>

          <div className="flex gap-12 items-stretch">
            {!!header?.data.links.length && (
              <NavigationHeader links={header?.data.links} />
            )}

            <div className="flex gap-4 items-center">
              <Button variant="support-outline" size="sm" className="group">
                <Lock className="transition-colors group-hover:fill-secondary-400" />
                <span>Área do corretor</span>
              </Button>
              <Button variant="support" size="sm">
                <UserCicle />
                <span>Área do Cliente</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader header={header} />
    </>
  );
}
