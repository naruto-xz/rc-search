module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],  //规则继承
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    "indent": [2, 2], // 控制缩进为2
    "eqeqeq": 1,// 警告使用全等
    "no-console": 0, //不禁用consoles
    "no-debugger": 1, //警告debugger
    "no-var": 2, //对var禁止
    // "semi": 1, //强制使用分号
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 'error', //一行结束后面有空格就发出警告
    // "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "no-underscore-dangle": 0, //标识符不能以_开头或结尾
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-redeclare": 2, //禁止重复声明变量
    "no-undef": 2, //不能有未定义的变量
    "space-before-function-parent": 0, //在function和()之间不需要预留空格,
  },
};
