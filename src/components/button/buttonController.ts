// координация принадлежит контроллеру
// опрделяем, какой метод модели вызвать

import type ButtonModel from "./buttonModel";
import type ButtonView from "./buttonView";

class ButtonController {
  private model: ButtonModel;
  private view: ButtonView;

  constructor(model: ButtonModel, view: ButtonView) {
    this.model = model;
    this.view = view;
  }
}

export default ButtonController;
