# hello-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1、在template中<img>中写图片的本地相对路径可以正确加载图片，但将图片的路径写在js中无法加载图片。
 原因是模版中有图片解析器，放在模版会被webpack打包。而写在js里只是字符串webpack不会处理。
 可以将图片放在最外层的static文件夹。或者使用import或require引入。

2、重构时采用本地json假数据，通过模拟接口获取数据。需要在dev-server文件中进行修改将所需的post、get等方法写入。
3、采用本地json，图片地址仍为本地相对路径时仍存在1中的问题，遂采用网络图片地址。

