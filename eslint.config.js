import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Keep browser globals
        ...globals.node, // ✅ Add Node.js globals (fixes `process` issue)
      },
    },
  },
  pluginJs.configs.recommended,
];
