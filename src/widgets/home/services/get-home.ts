import { fetcher } from "@/core/api/fetcher";
import { GetHomeDto } from "./get-home.dto";

import qs from "qs";

export async function getHome() {
  try {
    const query = qs.stringify({
      populate: {
        image_main: true,
        components: {
          on: {
            "components.simple-cta": {
              populate: ["button"],
            },
            "components.image-cta": {
              populate: ["icon", "button", "image"],
            },
            "components.featured-project": {
              populate: ["button", "image", "variations"],
            },
            "components.carousel-projects": {
              populate: {
                projects: {
                  populate: {
                    categories: true,
                    thumbnail: true,
                    variations: true,
                    gallery: {
                      populate: ["image"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    const response = await fetcher<GetHomeDto>(`/home?${query}`);

    return response;
  } catch (err) {
    console.error("[Strapi error] Error getHome: ", err);
  }
}
