import { CardProject } from "@/shared/components/@project/card";
import { SelectCheckbox } from "@/ui/select-checkbox";

export function ListingProjects() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="layout">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">16 empreendimentos</h2>

          <SelectCheckbox
            placeholder="Ordenar por"
            variant="rounded"
            className="w-full"
            options={[
              { title: "Bairro", value: "bairro" },
              { title: "Status", value: "status" },
              { title: "Preço", value: "preço" },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-stretch justify-between gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <CardProject key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
