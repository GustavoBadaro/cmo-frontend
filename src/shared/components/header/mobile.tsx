import { GetHeaderDto } from "@/shared/services/header/get-header.dto";
import { cx } from "class-variance-authority";
import Link from "next/link";
import Image from "next/image";

interface Props {
  header?: GetHeaderDto;
}

export async function MobileHeader({ header }: Props) {
  return (
    <header className={cx(["w-full py-4 bg-white hidden max-lg:flex"])}>
      <div className="layout flex items-center justify-between">
        <button type="button">MENU</button>

        <Link href="/">
          {header?.data.logo && (
            <Image
              src={header?.data.logo.url}
              width={header.data.logo.width}
              height={header.data.logo.height}
              alt="CMO Construtura"
              quality={100}
              loading="eager"
              className="max-w-[70px] h-auto object-contain"
            />
          )}
        </Link>

        <div aria-hidden />
      </div>
    </header>
  );
}
