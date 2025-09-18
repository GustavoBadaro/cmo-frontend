import { StrapiFile } from "@/core/types/strapi";
import {
  ComponentFeaturedProject,
  ComponentSimpleCTA,
} from "@/core/types/strapi";

export type HomeComponents = [ComponentSimpleCTA | ComponentFeaturedProject];

export interface GetHomeDto {
  data: {
    id: number;
    document: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image_main: StrapiFile;
    components: HomeComponents;
  };
}
