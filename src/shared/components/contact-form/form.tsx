import { cx } from "class-variance-authority";
import { InputContactForm } from "./input";
import { Mail, Phone, UserCicle } from "@/shared/icons";

export function FormContactForm() {
  return (
    <form
      className={cx([
        "max-w-[700px] w-fit px-5 py-4 rounded-full flex gap-3 bg-[#00375A]",
        "max-md:w-full max-md:py-6 max-md:flex-col max-md:rounded-4xl",
      ])}
    >
      <InputContactForm placeholder="Nome" icon={<UserCicle />} />
      <InputContactForm placeholder="Celular" icon={<Phone />} />
      <InputContactForm placeholder="E-mail" icon={<Mail />} />
      <button
        type="submit"
        className={cx([
          "px-6 py-3 rounded-full bg-secondary-500 whitespace-nowrap",
          "text-sm text-white font-medium text-center hover:bg-secondary-400",
        ])}
      >
        Compre seu imóvel
      </button>
    </form>
  );
}
