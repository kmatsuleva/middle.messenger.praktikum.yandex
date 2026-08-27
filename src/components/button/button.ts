import ButtonModel from "./buttonModel";
import ButtonView from "./buttonView";
import ButtonController from "./buttonController";

import "./button.scss";

export function renderButton() {
  const model = new ButtonModel();
  const view = new ButtonView();

  return new ButtonController(model, view);
}
