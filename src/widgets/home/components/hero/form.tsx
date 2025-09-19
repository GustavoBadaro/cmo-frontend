"use client";

import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { CheckboxHeroHome } from "./checkbox";
import { Home, Star, Work } from "@/shared/icons";
import { SelectCheckbox } from "@/ui/select-checkbox";
import { Locale } from "@/shared/icons/locale";
import { Dolar } from "@/shared/icons/dolar";
import { Ruler } from "@/shared/icons/ruler";
import { Bed } from "@/shared/icons/bed";

export function FormHeroHome() {
  return (
    <form className={cx(["mt-6 flex flex-col gap-6 overflow-hidden"])}>
      <div className="px-8 flex items-stretch gap-2 max-md:overflow-auto">
        <CheckboxHeroHome label="Lançamento" icon={<Star />} />
        <CheckboxHeroHome label="Em obras" icon={<Work />} />
        <CheckboxHeroHome label="Pronto para morar" icon={<Home />} />
      </div>

      <div className="px-8 flex flex-col gap-3">
        <SelectCheckbox
          placeholder="Bairro"
          className="w-full"
          onChevron={false}
          options={[
            { title: "Jardim das Flores", value: "Jardim das Flores" },
            { title: "Vila Nova", value: "Vila Nova" },
            { title: "Santa Cecília", value: "Santa Cecília" },
            { title: "Boa Vista", value: "Boa Vista" },
            { title: "Morada do Sol", value: "Morada do Sol" },
            { title: "Vila Rica", value: "Vila Rica" },
            { title: "Cidade Jardim", value: "Cidade Jardim" },
            { title: "Parque das Águas", value: "Parque das Águas" },
            { title: "Jardim América", value: "Jardim América" },
            { title: "Alto da Serra", value: "Alto da Serra" },
            { title: "Vila Esperança", value: "Vila Esperança" },
            {
              title: "Residencial Bela Vista",
              value: "Residencial Bela Vista",
            },
            { title: "Centro", value: "Centro" },
            { title: "Parque dos Ipês", value: "Parque dos Ipês" },
            { title: "Jardim Europa", value: "Jardim Europa" },
          ]}
          icon={<Locale color="#6D94E9" />}
        />
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          <SelectCheckbox
            placeholder="Metragem"
            icon={<Ruler color="#6D94E9" />}
            className="w-full"
            options={[{ title: "Teste", value: "Teste" }]}
          />

          <SelectCheckbox
            placeholder="Quartos"
            icon={<Bed color="#6D94E9" />}
            className="flex-1 w-full"
            options={[{ title: "Teste", value: "Teste" }]}
          />

          <SelectCheckbox
            placeholder="Valor"
            icon={<Dolar color="#6D94E9" />}
            className="w-full max-md:hidden"
            options={[{ title: "Teste", value: "Teste" }]}
          />
        </div>
      </div>

      <div className="px-8">
        <Button type="submit" variant="secondary" className="max-md:w-full">
          Buscar
        </Button>
      </div>
    </form>
  );
}
