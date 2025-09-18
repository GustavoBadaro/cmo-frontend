import { ContactForm } from "@/shared/components/contact-form";
import { DisplayHome } from "@/widgets/home/components/display";
import { HeroHome } from "@/widgets/home/components/hero";
import { getHome } from "@/widgets/home/services/get-home";

export default async function Home() {
  const home = await getHome();

  if (!home) {
    return <>Error 500</>;
  }

  return (
    <>
      <HeroHome image={home.data.image_main} />
      <ContactForm />
      <DisplayHome components={home.data.components} />
    </>
  );
}
