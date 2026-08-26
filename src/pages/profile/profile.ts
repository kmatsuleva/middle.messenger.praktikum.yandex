import Handlebars from "handlebars";
import template from "./profile.hbs?raw";

import "../../layouts/profile/profile";
import "../../components/avatar/avatar";
import "../../components/profile-field/profile-field";
import "../../components/link/link";

import type { RenderPage } from "../../main.types";

const renderProfilePage: RenderPage = () => Handlebars.compile(template)({});

export default renderProfilePage;
