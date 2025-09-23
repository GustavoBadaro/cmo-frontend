import { StrapiMeta, StrapiProject } from "@/core/types/strapi";
import { CardProject } from "@/shared/components/@project/card";
import { SelectCheckbox } from "@/ui/select-checkbox";

interface Props {
  data: StrapiProject[];
  meta: StrapiMeta;
}

export function ListingProjects({ data, meta }: Props) {
  return (
    <section className="w-full py-10 bg-white">
      <div className="layout">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            {meta.pagination.total} empreendimentos
          </h2>

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
          {data.map((item) => (
            <CardProject key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
