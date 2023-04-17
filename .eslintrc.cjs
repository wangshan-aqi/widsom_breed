/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 添加组件命名忽略规则
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"], //需要忽略的组件名
      },
    ],
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: false,
      },
    ],
  },
  overrides: [
    //这里是添加的代码
    {
      files: ["src/views/index.vue", "src/views/**/index.vue"], // 匹配views和二级目录中的index.vue
      rules: {
        "vue/multi-word-component-names": "off",
      }, //给上面匹配的文件指定规则
    },
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
