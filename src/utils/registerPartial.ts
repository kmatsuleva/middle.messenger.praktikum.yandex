import Handlebars from "handlebars";
import type { RegisterPartial } from "./registerPartial.types";

export const registerPartial: RegisterPartial = (name, template) => {
  Handlebars.registerPartial(name, template);
} 