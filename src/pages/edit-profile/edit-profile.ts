import Handlebars from "handlebars";
import template from "./edit-profile.hbs?raw";

import "../../layouts/profile/profile";
import "../../components/avatar/avatar";
import "../../components/profile-field/profile-field";
import "../../components/button/button";

const renderEditProfilePage = () => Handlebars.compile(template)({});

export default renderEditProfilePage;
