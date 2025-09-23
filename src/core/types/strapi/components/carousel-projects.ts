import { StrapiProject } from "../project";

export interface ComponentCarouselProjects {
  __component: "components.carousel-projects";
  id: number;
  title: string;
  projects: StrapiProject[];
}
