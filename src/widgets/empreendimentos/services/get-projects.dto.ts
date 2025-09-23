import { StrapiMeta, StrapiProject } from "@/core/types/strapi";

export interface GetProjectsDto {
  data: StrapiProject[];
  meta: StrapiMeta;
}
