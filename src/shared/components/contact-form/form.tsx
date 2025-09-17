import { cx } from "class-variance-authority";
import { InputContactForm } from "./input";

export function FormContactForm() {
  return (
    <form
      className={cx([
        "w-fit px-5 py-4 rounded-full flex gap-3 bg-[#00375A]",
        "max-md:w-full max-md:py-6 max-md:flex-col max-md:rounded-4xl",
      ])}
    >
      <InputContactForm placeholder="Nome" />
      <InputContactForm placeholder="Celular" />
      <InputContactForm placeholder="E-mail" />
      <button
        type="submit"
        className={cx([
          "px-6 py-4 rounded-full bg-secondary-500 whitespace-nowrap",
          "text-sm text-white font-medium text-center hover:bg-secondary-400",
          "max-md:py-3",
        ])}
      >
        Compre seu imóvel
      </button>
    </form>
  );
}
