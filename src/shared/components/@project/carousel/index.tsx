import { ComponentCarouselProjects } from "@/core/types/strapi";
import { SplideCarouselProjects } from "./carousel";

interface Props {
  data: ComponentCarouselProjects;
}

export function CarouselProjects({ data }: Props) {
  return (
    <section className="w-full py-10">
      <SplideCarouselProjects title={data.title} data={data.projects} />
    </section>
  );
}
