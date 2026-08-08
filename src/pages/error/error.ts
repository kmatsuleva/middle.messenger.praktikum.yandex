import Handlebars from "handlebars";
import template from "./error.hbs?raw";

import "../../layouts/centered/centered";
import "../../components/error/error";

const renderErrorPage = (context: any) => Handlebars.compile(template)(context);

export default renderErrorPage;
