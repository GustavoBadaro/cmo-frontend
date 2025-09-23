"use client";

import { Button } from "@/ui/button";
import { cx } from "class-variance-authority";
import { CheckboxHeroHome } from "./checkbox";
import { Multiselect } from "@/ui/multiselect";
import { Bed, Dolar, Home, Locale, Ruler, Star, Work } from "@/shared/icons";
import { Select } from "@/ui/select";

export function FormHeroHome() {
  return (
    <form className={cx(["mt-6 flex flex-col gap-6 max-md:overflow-x-hidden"])}>
      <div className="px-8 flex items-stretch gap-2 max-md:overflow-auto">
        <CheckboxHeroHome label="Lançamento" icon={<Star />} />
        <CheckboxHeroHome label="Em obras" icon={<Work />} />
        <CheckboxHeroHome label="Pronto para morar" icon={<Home />} />
      </div>

      <div className="px-8 flex flex-col gap-3">
        <Multiselect
          label="Bairro"
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
          placeholder="Procure por bairro"
          onSearch
        />
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          <Select
            label="Metragem"
            icon={<Ruler color="#6D94E9" />}
            className="w-full"
            options={[
              { title: "Até 50m²", value: "50" },
              { title: "De 50m² a 75m²", value: "75" },
              { title: "De 75m² a 95m²", value: "95" },
              { title: "De 95m² a 115m²", value: "115" },
              { title: "Acima de 115m²", value: "116" },
            ]}
          />

          <Select
            label="Quartos"
            icon={<Bed color="#6D94E9" />}
            className="flex-1 w-full"
            options={[
              { title: "1 quarto", value: "1" },
              { title: "2 quarto", value: "2" },
              { title: "3 quarto", value: "3" },
              { title: "Penthouses", value: "penthouse" },
            ]}
          />

          <Select
            label="Preço"
            icon={<Dolar color="#6D94E9" />}
            className="w-full max-md:hidden"
            options={[{ title: "null", value: "null" }]}
          />
        </div>
      </div>

      <div className="px-8">
        <Button
          type="submit"
          variant="secondary"
          className="max-md:w-full max-md:bg-brand-blue"
        >
          Buscar
        </Button>
      </div>
    </form>
  );
}
