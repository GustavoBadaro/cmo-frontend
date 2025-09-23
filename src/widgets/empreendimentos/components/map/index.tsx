import { Button } from "@/ui/button";

export function MapProjects() {
  return (
    <section className="w-full h-[300px] relative">
      <figure className="centralize w-full h-full bg-neutral-200">
        Google Maps
      </figure>
      <Button className="bg-white !text-brand-blue absolute bottom-6 right-6">
        Ampliar mapa
      </Button>
    </section>
  );
}
