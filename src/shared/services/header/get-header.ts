import { fetcher } from "@/core/api/fetcher";
import { GetHeaderDto } from "./get-header.dto";

import qs from "qs";

export async function getHeader() {
  try {
    const query = qs.stringify({
      populate: ["logo", "links"],
    });

    const response = await fetcher<GetHeaderDto>(`/header?${query}`);

    return response;
  } catch (err) {
    console.error("[Strapi error] Error getHeader: ", err);
  }
}
