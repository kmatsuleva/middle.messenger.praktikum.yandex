import renderErrorPage from "../error/error";

const render500 = () =>
  renderErrorPage({
    code: "500",
    message: "Мы уже фиксим",
    linkUrl: "/",
    linkText: "Назад к чатам",
  });

export default render500;
