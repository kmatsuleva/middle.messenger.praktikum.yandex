import Handlebars from "handlebars";
import template from "./change-password.hbs?raw";

import "../../layouts/profile/profile";
import "../../components/avatar/avatar";
import "../../components/profile-field/profile-field";
import "../../components/button/button";

import type { RenderPage } from "../../main.types";

const renderChangePasswordPage: RenderPage = () => Handlebars.compile(template)({});

export default renderChangePasswordPage;
