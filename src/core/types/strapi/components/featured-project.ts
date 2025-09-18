import { StrapiFile } from "../file";
import { ComponentButton } from "./button";

export interface ComponentFeaturedProject {
  __component: "components.featured-project";
  id: number;
  reverse: boolean;
  title: string;
  description: string;
  button: ComponentButton;
  image: StrapiFile;
}
