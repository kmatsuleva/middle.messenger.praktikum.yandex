import { registerPartial } from "../../utils/registerPartial";
import template from "./error.hbs?raw";

import "../link/link";
import "./error.scss";

registerPartial("error", template);
