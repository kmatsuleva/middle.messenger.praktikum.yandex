import Handlebars from "handlebars";
import template from "./profile.hbs?raw";

import "../../layouts/profile/profile";
import "../../components/avatar/avatar";
import "../../components/profile-field/profile-field";
import "../../components/link/link";

const renderProfilePage = () => Handlebars.compile(template)({});

export default renderProfilePage;
