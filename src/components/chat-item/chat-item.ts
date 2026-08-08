import { registerPartial } from "../../utils/registerPartial";
import template from "./chat-item.hbs?raw";

import "../avatar/avatar";
import "./chat-item.scss";

registerPartial("chat-item", template);
