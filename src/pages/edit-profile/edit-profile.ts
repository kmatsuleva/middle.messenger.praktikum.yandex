import Handlebars from "handlebars";
import template from "./edit-profile.hbs?raw";

import "../../layouts/profile/profile";
import "../../components/avatar/avatar";
import "../../components/profile-field/profile-field";
import "../../components/button/button";

import type { RenderPage } from "../../main.types";

const renderEditProfilePage: RenderPage = () => Handlebars.compile(template)({});

export default renderEditProfilePage;
