import Handlebars from "handlebars";

export const registerPartial = (name: any, template: any) => {
  Handlebars.registerPartial(name, template);
};
