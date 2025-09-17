import { cx } from "class-variance-authority";
import { FormContactForm } from "./form";

export function ContactForm() {
  return (
    <section className="w-full bg-white py-10">
      <div className="layout centralize flex-col gap-6">
        <h2
          className={cx([
            "text-2xl text-center text-black font-medium",
            "leading-[1.2] tracking-wide",
          ])}
        >
          Nossos consultores estão prontos para te ajudar a{" "}
          <span className="text-secondary-500">realizar seu sonho</span>
        </h2>

        <FormContactForm />
      </div>
    </section>
  );
}
