import { registerPartial } from "../../utils/registerPartial";
import template from "./chat-header.hbs?raw";

import "../avatar/avatar";
import "./chat-header.scss";

registerPartial("chat-header", template);
