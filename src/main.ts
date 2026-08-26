import page404 from "./pages/404/404";
import page500 from "./pages/500/500";
import loginPage from "./pages/login/login";
import registerPage from "./pages/register/register";
import profilePage from "./pages/profile/profile";
import editProfilePage from "./pages/edit-profile/edit-profile";
import changePasswordPage from "./pages/change-password/change-password";
import chatsPage from "./pages/chats/chats";

import type { RouteMap } from "./main.types";

import "./styles/main.scss";

const routes: RouteMap = {
  "/": chatsPage,
  "/chats": chatsPage,
  "/profile": profilePage,
  "/profile/edit": editProfilePage,
  "/profile/change-password": changePasswordPage,
  "/login": loginPage,
  "/register": registerPage,
  "/server-error": page500,
};

const app = document.getElementById("app");

const render = (pathname: string): void => {
  if (!app) {
    return;
  }

  const renderPage = routes[pathname] ?? page404;
  app.innerHTML = renderPage();
};

const navigate = (pathname: string): void => {
  window.history.pushState({}, "", pathname);
  render(pathname);
};

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;
  const link = target?.closest<HTMLAnchorElement>("a[href]");

  if (!link) {
    return;
  }

  const href = link.getAttribute("href");

  if (href?.startsWith("http")) {
    return;
  }

  event.preventDefault();

  const pathname = href;

  if (pathname) {
    navigate(pathname);
  }
});

render(window.location.pathname);
