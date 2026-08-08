import renderErrorPage from "../error/error";

const render404 = () =>
  renderErrorPage({
    code: "404",
    message: "Не туда попали",
    linkUrl: "/",
    linkText: "Назад к чатам",
  });

export default render404;
