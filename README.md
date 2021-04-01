<h1 align="center">Welcome to @aio/rc-search 👋</h1>

[![NPM version][npm-image]][npm-url]
![License][license-url]

[npm-image]: https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000
[npm-url]: https://code.mlamp.cn/cem/react-component/search
[license-url]: https://img.shields.io/badge/License-MIT-yellow.svg

> search ui component for react

## Install

```sh
npm install @aio/rc-search
```

## Usage
```js
import Search from '@aio/rc-search';

const search = (value: string)=> {
  console.log(value);
}

export default () => <Search onSearch={search}/>;
```

## API

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>String</td>
      <td>-</td>
      <td>搜索框内容</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>String</td>
      <td>请输入</td>
      <td>搜索框提示信息</td>
    </tr>
    <tr>
      <td>onSearch</td>
      <td>function(value: string)</td>
      <td>-</td>
      <td>搜索框值变化时回调</td>
    </tr>
  </tbody>
</table>

## Author

👤 **Jackie**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

