import Handlebars from "handlebars";
import template from "./login.hbs?raw";

import "../../layouts/centered/centered";
import "../../components/auth-card/auth-card";
import "../../components/form-group/form-group";
import "../../components/button/button";

import "./login.scss";

const renderLoginPage = () => Handlebars.compile(template)({});

export default renderLoginPage;
