/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["classes"],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
