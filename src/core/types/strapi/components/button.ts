export interface ComponentButton {
  __component: "components.button";
  id: number;
  label: string;
  url: string;
  target: "_self" | "_blank" | "_parent";
}
