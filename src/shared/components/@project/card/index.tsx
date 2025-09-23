import { cx } from "class-variance-authority";
import { VariationsProject } from "../variations";
import { Bed, Ruler } from "@/shared/icons";
import { CategoryProject } from "../category";
import { StrapiFile, StrapiProject } from "@/core/types/strapi";
import { CarouselCardProject } from "./carousel";

interface Props {
  data: StrapiProject;
  className?: string;
}

export function CardProject({ data, className }: Props) {
  const getImages = (): StrapiFile[] => {
    const images: StrapiFile[] = [];

    if (data.thumbnail) {
      images.push(data.thumbnail);
    }

    if (data.gallery.length > 0) {
      data.gallery.forEach((item) => images.push(item.image));
    }

    const unique = new Map<number, StrapiFile>();
    images.forEach((img) => unique.set(img.id, img));

    return Array.from(unique.values());
  };

  return (
    <div className={cx(["max-w-[295px] w-full", className])}>
      <figure
        className={cx([
          "w-[295px] aspect-[1/0.85] relative overflow-hidden rounded-xl",
          "bg-neutral-200",
        ])}
      >
        <CarouselCardProject images={getImages()} />
        <div className="absolute top-2.5 left-2.5 flex">
          {data.categories?.map((item, index) => {
            // Exbir apenas duas categorias
            if (index > 1) return;

            return (
              <CategoryProject
                key={item.id}
                style={{
                  color: item.text_color,
                  backgroundColor: item.bg_color,
                }}
              >
                {item.name}
              </CategoryProject>
            );
          })}
        </div>
      </figure>

      <div className="flex flex-col gap-1.5">
        <strong className="font-medium tracking-wide">{data.name}</strong>
        <span className="text-sm opacity-60">Setor</span>
      </div>

      <VariationsProject
        items={[
          {
            icon: <Ruler color="black" className="opacity-40" />,
            text: data.variations.sizes,
          },
          {
            icon: <Bed color="black" className="opacity-40" />,
            text: data.variations.bedrooms,
          },
        ]}
      />
    </div>
  );
}
