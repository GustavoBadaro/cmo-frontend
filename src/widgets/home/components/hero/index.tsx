import { cx } from "class-variance-authority";
import { FormHeroHome } from "./form";
import { StrapiFile } from "@/core/types/strapi";
import Image from "next/image";

interface Props {
  image: StrapiFile;
}

export function HeroHome({ image }: Props) {
  return (
    <section className="bg-neutral-200 relative overflow-hidden">
      <div className={cx(["layout  h-[60vh] max-h-[620px] flex items-center"])}>
        <figure className="w-full h-full absolute inset-0 z-0" aria-hidden>
          <Image
            src={image.url}
            alt=""
            width={image.width}
            height={image.height}
            aria-hidden
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden
            className="w-full h-full absolute inset-0 z-0 bg-[#001827]/20"
          />
        </figure>
        <div
          className={cx(
            "max-w-[600px] w-full p-8 rounded-2xl bg-white relative"
          )}
        >
          <h1 className={cx(["text-2xl tracking-wide font-semibold"])}>
            Que tipo de imóvel você busca?
          </h1>
          <FormHeroHome />
        </div>
      </div>
    </section>
  );
}
