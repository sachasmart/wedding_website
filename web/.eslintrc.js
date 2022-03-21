module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  // plugins: ["prettier"],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "no-console": "warn",
    "prettier/prettier": "warn",
    "prefer-const": "warn",
    "vue/sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: false,
        minKeys: 2,
        natural: false,
      },
    ],
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "OTHER_DIRECTIVES",
          "TWO_WAY_BINDING",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
        alphabetical: false,
      },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": [
      "warn",
      {
        // "allow": ["arrowFunctions"]
      },
    ],
    
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  
};
