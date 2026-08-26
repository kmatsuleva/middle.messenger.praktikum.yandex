import Handlebars from "handlebars";
import template from "./error.hbs?raw";

import "../../layouts/centered/centered";
import "../../components/error/error";

import type { RenderErrorPage } from "./error.types";

const renderErrorPage: RenderErrorPage = (context) =>
  Handlebars.compile(template)(context);

export default renderErrorPage;
