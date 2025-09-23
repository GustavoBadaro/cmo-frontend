import {
  ComponentCarouselProjects,
  ComponentFeaturedProject,
  ComponentSimpleCTA,
} from "@/core/types/strapi";
import { HomeComponents } from "../../services/get-home.dto";
import { FeaturedProject } from "@/shared/components/@project/featured";
import { SimpleCTA } from "@/shared/components/simple-cta";
import { ComponentImageCTA } from "@/core/types/strapi/components/image-cta";
import { ImageCTA } from "@/shared/components/image-cta";
import { CarouselProjects } from "@/shared/components/@project/carousel";

interface Props {
  components: HomeComponents;
}

export function DisplayHome({ components }: Props) {
  return components.map((item) => {
    if (item.__component === "components.carousel-projects") {
      return (
        <CarouselProjects
          key={`${item.__component}-${item.id}`}
          data={item as ComponentCarouselProjects}
        />
      );
    }

    if (item.__component === "components.featured-project") {
      return (
        <FeaturedProject
          key={`${item.__component}-${item.id}`}
          data={item as ComponentFeaturedProject}
        />
      );
    }

    if (item.__component === "components.simple-cta") {
      return (
        <SimpleCTA
          key={`${item.__component}-${item.id}`}
          data={item as ComponentSimpleCTA}
        />
      );
    }

    if (item.__component === "components.image-cta") {
      return (
        <ImageCTA
          key={`${item.__component}-${item.id}`}
          data={item as ComponentImageCTA}
        />
      );
    }

    return null;
  });
}
