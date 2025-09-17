import { ContactForm } from "@/shared/components/contact-form";
import { Simulate } from "@/shared/components/simulate";
import { FeaturedProjectHome } from "@/widgets/home/components/featured-project";
import { HeroHome } from "@/widgets/home/components/hero";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ContactForm />
      <FeaturedProjectHome />
      <FeaturedProjectHome reverse />
      <Simulate />
    </>
  );
}
