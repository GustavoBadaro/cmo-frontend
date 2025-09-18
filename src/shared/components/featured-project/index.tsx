import { ComponentFeaturedProject } from "@/core/types/strapi";
import { Specifications } from "@/shared/components/specifications";
import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import Image from "next/image";

interface Props {
  data: ComponentFeaturedProject;
}

export function FeaturedProject({ data }: Props) {
  return (
    <section className="bg-white py-20 max-lg:py-10">
      <div
        className={cx([
          "layout px-15 gap-28 centralize",
          data.reverse && "flex-row-reverse",
          "max-lg:flex-col-reverse max-lg:gap-10 max-lg:px-6",
        ])}
      >
        <div className="flex flex-col gap-6 max-lg:gap-4">
          <h2
            className={cx([
              "text-[2.5rem] leading-[1.2] font-semibold tracking-wide",
              "max-lg:text-2xl max-lg:leading-none",
            ])}
          >
            {data.title}
          </h2>

          {data.description && <p>{data.description}</p>}

          <Specifications
            items={[
              { icon: undefined, text: "65 - 180m²" },
              { icon: undefined, text: "2Q - 3Q" },
            ]}
          />

          <Button href={data.button.url} target={data.button.target}>
            {data.button.label}
          </Button>
        </div>

        <figure
          className={cx([
            "max-w-[504px] min-w-[504px] h-full aspect-[1/0.925]",
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
