import tseslint from "typescript-eslint";
import { defaultConfig } from "./default-config.js";
import { reactConfig } from "./react.js";
import { typescriptConfig } from "./typescript.js";
import prettierConfig from "@banjoanton/eslint-config-prettier";

export default tseslint.config(
    ...defaultConfig,
    ...reactConfig,
    ...typescriptConfig,
    ...prettierConfig
);
