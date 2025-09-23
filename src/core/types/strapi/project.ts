import { ComponentVariations } from "./components/variations";
import { StrapiCategory } from "./category";
import { StrapiFile } from "./file";

export interface StrapiProject {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  categories?: StrapiCategory[];
  featured_image: StrapiFile;
  thumbnail?: StrapiFile;
  variations: ComponentVariations;
  gallery: Array<{
    area: string;
    image: StrapiFile;
  }>;
}
