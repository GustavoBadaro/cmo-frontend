import { ListingProjects } from "@/widgets/empreendimentos/components/listing";
import { MapProjects } from "@/widgets/empreendimentos/components/map";
import { getHome } from "@/widgets/home/services/get-home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empreendimentos",
};

export default async function Home() {
  const home = await getHome();

  if (!home) {
    return <>Error 500</>;
  }

  return (
    <>
      <MapProjects />
      <ListingProjects />
    </>
  );
}
