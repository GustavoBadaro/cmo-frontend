import { ComponentButton } from "./button";

export interface ComponentSimpleCTA {
  __component: "components.simple-cta";
  id: number;
  title: string;
  description: string;
  button: ComponentButton;
}
