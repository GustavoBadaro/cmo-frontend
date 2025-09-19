import { StrapiFile } from "@/core/types/strapi";

export interface HeaderLink {
  label: string;
  target: string;
  url: string;
}

export interface GetHeaderDto {
  data: {
    id: number;
    document: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: StrapiFile;
    links: HeaderLink[];
  };
}
