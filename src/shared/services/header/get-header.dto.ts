import { StrapiFile } from "@/core/types/strapi";
import { ComponentMenuLink } from "@/core/types/strapi";

export interface GetHeaderDto {
  data: {
    id: number;
    document: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: StrapiFile;
    links: ComponentMenuLink[];
  };
}
