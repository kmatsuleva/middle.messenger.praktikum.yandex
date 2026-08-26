/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-dollar-variable"],
      },
    ],
    "selector-class-pattern": null
  },
};
