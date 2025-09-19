import { ComponentImageCTA } from "@/core/types/strapi";
import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import Image from "next/image";

interface Props {
  data: ComponentImageCTA;
}

export function ImageCTA({ data }: Props) {
  return (
    <section className="bg-white py-20 max-lg:py-10">
      <div
        className={cx([
          "layout px-15 gap-28 centralize",
          "max-lg:flex-col-reverse max-lg:gap-12 max-lg:px-6",
        ])}
      >
        <div className="flex flex-col gap-6">
          {data.icon && (
            <Image
              src={data.icon.url}
              alt={data.icon.alternativeText ?? ""}
              width={data.icon.width}
              height={data.icon.height}
              loading="lazy"
              className={cx([
                "max-w-[120px] max-h-[120px] object-contain",
                "max-lg:max-w-[90px] max-lg:max-h-[90px]",
              ])}
            />
          )}
          <h2
            className={cx([
              "text-[2.5rem] leading-[1.2] font-semibold tracking-wide",
              "max-lg:text-2xl max-lg:leading-none",
            ])}
          >
            {data.title}
          </h2>

          {data.description && (
            <p className="max-w-[440px] text-xl tracking-wide opacity-60">
              {data.description}
            </p>
          )}

          {data.button && (
            <Button href={data.button.url} target={data.button.target}>
              {data.button.label}
            </Button>
          )}
        </div>

        <figure
          className={cx([
            "max-w-[504px] min-w-[504px] h-full",
            "block relative overflow-hidden",
            "max-lg:min-w-0",
          ])}
        >
          <Image
            src={data.image.url}
            alt={data.image.alternativeText ?? ""}
            width={data.image.width}
            height={data.image.height}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
