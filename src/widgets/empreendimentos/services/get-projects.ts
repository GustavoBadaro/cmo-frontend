import { fetcher } from "@/core/api/fetcher";
import { GetProjectsDto } from "./get-projects.dto";

import qs from "qs";

export async function getProjects() {
  try {
    const query = qs.stringify({
      populate: {
        categories: true,
        thumbnail: true,
        variations: true,
        gallery: {
          populate: ["image"],
        },
      },
    });

    const response = await fetcher<GetProjectsDto>(`/projetos?${query}`);

    return response;
  } catch (err) {
    console.error("[Strapi error] Error getProjects: ", err);
  }
}
