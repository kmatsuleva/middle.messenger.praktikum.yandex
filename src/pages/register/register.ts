import Handlebars from "handlebars";
import template from "./register.hbs?raw";

import "../../layouts/centered/centered";
import "../../components/auth-card/auth-card";
import "../../components/form-group/form-group";
import "../../components/button/button";

import "./register.scss";

const renderRegisterPage = () => Handlebars.compile(template)({});

export default renderRegisterPage;
