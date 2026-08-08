import Handlebars from "handlebars";
import template from "./chats.hbs?raw";
import { chatsMock } from "./chats.mock";

import "../../layouts/chats/chats";
import "../../components/sidebar/sidebar";
import "../../components/chat-item/chat-item";
import "../../components/chat-header/chat-header";
import "../../components/message-input/message-input";

const renderChatsPage = () => Handlebars.compile(template)(chatsMock);

export default renderChatsPage;
