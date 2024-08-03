module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  // 继承某些已有的规则
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // 如果你在使用 TypeScript
    "plugin:react-hooks/recommended",
    "prettier" // 一定要放在最后，以关闭与 Prettier 冲突的 ESLint 规则
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  // 指定如何解析语法
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier"],
  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": "error",

    "@typescript-eslint/no-explicit-any": "off" // 禁止使用 any 类型
  }
};
