# widsom_breed

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 自动导入
See [Vue的按需组件自动导入。](https://www.npmjs.com/package/unplugin-vue-components).
See [按需访问成千上万的图标作为组件。](https://www.npmjs.com/package/unplugin-icons).
``` sh
Components({
  // relative paths to the directory to search for components.
  // 要搜索组件的目录的相对路径
  dirs: ['src/components'],

  // valid file extensions for components.
  // 组件的有效文件扩展名。
  extensions: ['vue'],

  // Glob patterns to match file names to be detected as components.
  // When specified, the `dirs` and `extensions` options will be ignored.
  // 与要检测为组件的文件名相匹配的全局模式。
  // 指定时，将忽略“目录”和“扩展名”选项。
  globs: ['src/components/*.{vue}'],

  // search for subdirectories
  // 搜索子目录
  deep: true,

  // resolvers for custom components
  // 自定义组件的解析器
  resolvers: [],

  // generate `components.d.ts` global declarations,
  // also accepts a path for custom filename
  // default: `true` if package typescript is installed
  // 生成`components.d.ts`全局声明，
  // 还接受自定义文件名的路径
  // 默认值：如果安装了包typescript，则为true
  dts: false,

  // Allow subdirectories as namespace prefix for components.
  // 允许子目录作为组件的命名空间前缀。
  directoryAsNamespace: false,

  // Collapse same prefixes (camel-sensitive) of folders and components
  // to prevent duplication inside namespaced component name.
  // works when `directoryAsNamespace: true`
  // 折叠文件夹和组件的相同前缀（区分骆驼色）
  // 以防止名称空间组件名称内的重复。
  // 当`directoryAsNamespace:true时工作`
  collapseSamePrefixes: false,

  // Subdirectory paths for ignoring namespace prefixes.
  // works when `directoryAsNamespace: true`
  // 用于忽略命名空间前缀的子目录路径。
  // 当`directoryAsNamespace:true时工作`
  globalNamespaces: [],

  // auto import for directives
  // default: `true` for Vue 3, `false` for Vue 2
  // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
  // To install Babel, run: `npm install -D @babel/parser`
  //指令的自动导入
  // 默认值：Vue 3为“true”，Vue 2为“false”
  // 需要Babel为Vue 2进行转换，由于性能问题，默认情况下会禁用它。
  // 要安装Babel，请运行：`npm-install-D@Babel/parser`
  directives: true,

  // Transform path before resolving
  // 解析前转换路径
  importPathTransform: v => v,

  // Allow for components to override other components with the same name
  // 允许零部件替代具有相同名称的其他零部件
  allowOverrides: false,

  // filters for transforming targets
  // 用于变换目标的过滤器
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  // Vue version of project. It will detect automatically if not specified.
  // Acceptable value: 2 | 2.7 | 3
  // 项目的Vue版本。如果未指定，它将自动检测。
  // 可接受值：2|2.7|3
  version: 2.7,

  // Only provide types of components in library (registered globally)
  // 仅提供库中的组件类型（全局注册）
  types: []
})
```

## tailwind.config.js postcss.config.js
/* eslint-disable */
阻止报红警告

## 配置.prettierrc.json
- .prettierrc.json
module.exports = {
    printWidth: 80,                    //（默认值）单行代码超出 80 个字符自动换行
    tabWidth: 2,                       //（默认值）一个 tab 键缩进相当于 2 个空格
    useTabs: true,                     // 行缩进使用 tab 键代替空格
    semi: false,                       //（默认值）语句的末尾加上分号
    singleQuote: true,                 // 使用单引号
    quoteProps: 'as-needed',           //（默认值）仅仅当必须的时候才会加上双引号
    jsxSingleQuote: true,              // 在 JSX 中使用单引号
    trailingComma: 'all',              // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
    bracketSpacing: true,              //（默认值）在括号和对象的文字之间加上一个空格
    jsxBracketSameLine: true,          // 把 > 符号放在多行的 JSX 元素的最后一行
    arrowParens: 'avoid',              // 当箭头函数中只有一个参数的时候可以忽略括弧
    htmlWhitespaceSensitivity: 'ignore', // vue template 中的结束标签结尾尖括号掉到了下一行
    vueIndentScriptAndStyle: false,    //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
    embeddedLanguageFormatting: 'auto', //（默认值）允许自动格式化内嵌的代码块
};

## 
问题1：eslint和prettier都可以管控代码风格，此时可能会出现冲突。目前已经有了非常成熟的解决方案，即 eslint-config-prettier + eslint-plugin-prettier。

eslint-config-prettier：关闭eslint中与prettier相互冲突的规则。

eslint-plugin-prettier：eslint使用prettier规则来美化代码风格。

在 .eslintrc.js中extends的最后添加一个配置，此时prettier和eslint便可以无冲突协作，保存时候也能自动修复并格式化代码了。

extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 增加的配置
],
问题2：eslint解析.vue 文件中的template无效。eslint-plugin-vue是对.vue 文件进行代码校验的插件,插件一些扩展如下。个人项目里面用的vue3，选用的plugin:vue/vue3-recommended。

plugin:vue/base：基础
plugin:vue/essential：预防错误的（用于 Vue 2.x）
plugin:vue/recommended：推荐的，最小化任意选择和认知开销（用于 Vue 2.x）；
plugin:vue/strongly-recommended：强烈推荐，提高可读性（用于 Vue 2.x）；
plugin:vue/vue3-essential：（用于 Vue 3.x）
plugin:vue/vue3-strongly-recommended：（用于 Vue 3.x）
plugin:vue/vue3-recommended：（用于 Vue 3.x）
配置eslint-plugin-vue插件和extends后，template校验还是会失效，此时需要再配置和eslint-plugin-vue插件对应的解析器vue-eslint-parser。vue-eslint-parser能解析 template的内容，但不会解析JS，因此需要再配置一个解析器@typescript-eslint/parser。

vue-eslint-parser：配置在外面，eslint能解析<template>标签中的内容

@typescript-eslint/parser：配置在parserOptions中用来解析vue文件中<script>标签中的代码。

具体配置如下：

parser: 'vue-eslint-parser', // 解析<template>标签中的内容
 parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser', // 解析vue文件中<script>标签内容
    sourceType: 'module',
},
问题3： 可以采用如下命令检测.eslintrc.js文件中是否有未安装的插件，确保插件全部安装后eslint才可起作用。

npx eslint 文件名
配置.editorconfig文件
.editorConfig专注于统一编辑器编码风格配置,对多种类型的单文件进行简单的格式化。它提供的配置参数很少，具体如下所示。
```
# 已经是顶层配置文件，不必继续向上搜索
root = true
[*]
# 编码字符集
charset = utf-8
# 缩进风格是空格
indent_style = space
# 一个缩进占用两个空格，因没有设置tab_with，一个Tab占用2列
indent_size = 2
# 换行符 lf
end_of_line = lf
# 文件以一个空白行结尾
insert_final_newline = true
# 去除行首的任意空白字符
trim_trailing_whitespace = true
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
### 可以看到 .editorConfig 和 .prettierrc会存在一些重复的配置，比如都提供缩进的配置参数。建议在实际应用中将二者参数设置为一致。一些注意事项如下：

### 不同编辑器的配置存在差异，vscode 这类编辑器，需要自行安装 editorconfig 插件

### 编辑器的行为会与 .editorconfig 文件中定义的一致，其优先级比编辑器自身的设置要高。比如编辑器vscode中，当.editorConfig中indent_size和settings.json中editor.tabSize同时配置Tab空格数， indent_size优先生效。

### .editorconfig配置缩进时，优先级没有.eslintrc.js文件中的高，但两者并不冲突，配合使用可以使代码风格更加优雅。

