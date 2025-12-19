import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier"; // 1. Import Prettier config

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // 2. Thêm prettierConfig vào đây để tắt các rule xung đột
  prettierConfig,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
