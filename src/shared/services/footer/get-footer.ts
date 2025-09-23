import { fetcher } from "@/core/api/fetcher";
import { GetFooterDto } from "./get-footer.dto";

import qs from "qs";

export async function getFooter() {
  try {
    const query = qs.stringify({
      populate: {
        logo: true,
        links_policy: true,
        social_media: true,
        law: true,
        group_links: {
          populate: ["links"],
        },
        contact: {
          populate: ["address"],
        },
      },
    });

    const response = await fetcher<GetFooterDto>(`/footer?${query}`);

    return response;
  } catch (err) {
    console.error("[Strapi error] Error getFooter: ", err);
  }
}
