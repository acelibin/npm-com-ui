# 如何开发一个npm组件

### 1. 安装 vue-cli

> 注意：如果有旧版本（1.x 或 2.x），则需要先卸载 `npm uninstall vue-cli -g` 后再安装新版，否则会报错。

```bash
npm install -g @vue/cli
```
### 2. 创建项目

```bash
vue create npm-com-ui
```

### 3. 修改项目结构

(1) 把 src 中的 components 提取到项目根目录，作为组件源代码文件夹。

(2) 把 src 改为 examples 作为引入组件的示例。

(3) 修改项目中的默认配置，即入口文件路径。原始路径为 src，改为 examples 后需要在 `vue.config.js` 中修改方可正常运行。

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 新增修改配置，参考：https://cli.vuejs.org/zh/config/#pages
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
})
```

此时项目结构如下：

> 全局安装 `npm i mddir -g`，然后在项目根路径执行 `mddir` 即可生成如下目录结构

```
|-- npm-com-ui
    |-- components
    |   |-- css
    |   |   |-- demo.scss
    |   |-- lib
    |       |-- demo
    |           |-- index.js
    |           |-- src
    |               |-- main.vue
    |-- examples
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets
    |       |-- logo.png
    |-- public
        |-- favicon.ico
        |-- index.html
    |-- .gitignore
    |-- README.md
    |-- babel.config.js
    |-- jsconfig.json
    |-- package-lock.json
    |-- package.json
    |-- vue.config.js
    |-- yarn.lock
```

### 4. 编写组件代码

> 当组件使用其他工具例如 sass 的时候，需要手动额外添加依赖 `npm i sass sass-loader -D`。

```js
// components/lib/demo/src/main.vue
<template>
  <h1>This is a demo component.</h1>
</template>

<script>
export default {
  // name 必不可少，此 name 即实际项目中引入的组件名字
  name: 'demo-component'
}
</script>
```

```js
// components/lib/demo/index.js
import Demo from './src/main.vue'

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo
```

样式文件直接在 demo.scss 中编写即可。

### 5. 在 examples 中引入调试

(1) 修改 main.js 文件，引入新建的组件

```js
// 此为按需引入模式，后续讲到全部引入
import '../components/css/demo.scss';
import Demo from '../components/lib/demo/index.js';
Vue.use(Demo);
```

### 6. 提取 css 文件到 dist

### 7. 修改项目配置

> 注意组件需要同时支持**全部引入**和**按需引入**
### 8. 发布到 npm


### 9. 编写组件库文档


---
以下是项目初始化时默认文件↓↓↓
---
# npm-com-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
