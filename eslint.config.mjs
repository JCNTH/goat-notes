import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Allowed to use apostrophes 
      "@typescript-eslint/no-explicit-any": "off", // Allow any type
      "@typescript-eslint/no-unused-vars": "off", // Allow unused variables
      "@typescript-eslint/no-empty-object-type": "off", // Allow empty object types
      "@typescript-eslint/no-empty-interface": "off", // Allow empty interfaces
      "@typescript-eslint/no-empty-object-type": "off", // Allow empty object types
      "@typescript-eslint/no-empty-interface": "off", // Allow empty interfaces
    },
  },
];

export default eslintConfig;
