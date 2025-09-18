import { fetcher } from "@/core/api/fetcher";
import { GetHomeDto } from "./get-home.dto";

import qs from "qs";

export async function getHome() {
  try {
    const query = qs.stringify(
      {
        populate: {
          image_main: true,
          components: {
            on: {
              "components.simple-cta": {
                populate: ["button"],
              },
              "components.featured-project": {
                populate: ["button", "image"],
              },
            },
          },
        },
      },
      { encode: false }
    );

    const response = await fetcher<GetHomeDto>(`/home?${query}`);

    return response;
  } catch (err) {
    console.error("[Strapi error] Error getHome: ", err);
  }
}
