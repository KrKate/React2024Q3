import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import reactCompiler from "eslint-plugin-react-compiler";

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "node_modules"],

  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ["tsconfig.app.json", "tsconfig.node.json"],
    },
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    react: eslintReact,
    prettier: prettierPlugin,
    "react-compiler": reactCompiler,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...eslintConfigPrettier.rules,
    "comma-dangle": ["error", "only-multiline"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
});
