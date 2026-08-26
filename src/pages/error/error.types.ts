export type ErrorPageContext = {
  code: string;
  message: string;
  linkUrl: string;
  linkText: string;
};

export type RenderErrorPage = (context: ErrorPageContext) => string;
