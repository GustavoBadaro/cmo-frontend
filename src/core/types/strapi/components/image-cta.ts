import { StrapiFile } from "../file";
import { ComponentButton } from "./button";

export interface ComponentImageCTA {
  __component: "components.image-cta";
  id: number;
  icon?: StrapiFile;
  title: string;
  description?: string;
  button: ComponentButton;
  image: StrapiFile;
}
