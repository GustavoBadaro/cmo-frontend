import {
  ComponentFeaturedProject,
  ComponentSimpleCTA,
} from "@/core/types/strapi";
import { HomeComponents } from "../../services/get-home.dto";
import { FeaturedProject } from "@/shared/components/@project/featured";
import { SimpleCTA } from "@/shared/components/simple-cta";

interface Props {
  components: HomeComponents;
}

export function DisplayHome({ components }: Props) {
  return components.map((item) => {
    if (item.__component === "components.featured-project") {
      return (
        <FeaturedProject
          key={item.id}
          data={item as ComponentFeaturedProject}
        />
      );
    }

    if (item.__component === "components.simple-cta") {
      return <SimpleCTA key={item.id} data={item as ComponentSimpleCTA} />;
    }

    return null;
  });
}
