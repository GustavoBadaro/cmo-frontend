import { ComponentMenuLink, StrapiFile } from "@/core/types/strapi";

export interface GetFooterDto {
  data: {
    id: number;
    document: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    logo: StrapiFile;
    contact?: {
      address: {
        content: string;
        url_google?: string;
      };
      phone?: string;
    };
    group_links?: Array<{
      id: number;
      name: string;
      links: ComponentMenuLink[];
    }>;
    links_policy: ComponentMenuLink[];
    social_media?: {
      facebook_url?: string;
      instagram_url?: string;
      youtube_url?: string;
    };
    law?: {
      name: string;
      url: string;
    };
  };
}
