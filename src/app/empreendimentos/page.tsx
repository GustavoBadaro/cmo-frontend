import { ListingProjects } from "@/widgets/empreendimentos/components/listing";
import { MapProjects } from "@/widgets/empreendimentos/components/map";
import { getProjects } from "@/widgets/empreendimentos/services/get-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empreendimentos",
};

export default async function EmpreendimentosPage() {
  const projects = await getProjects();

  if (!projects) {
    return <>Error 500</>;
  }

  return (
    <>
      <MapProjects />
      <ListingProjects data={projects.data} meta={projects.meta} />
    </>
  );
}
