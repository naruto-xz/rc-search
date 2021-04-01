<h1 align="center">Welcome to rc-search 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/rc-search" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/rc-search.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> search ui component for react

### 🏠 [Homepage](https://github.com/naruto-xz/rc-search)

## Install

```sh
npm install rc-search
```

## Usage
```js
import Search from 'rc-search';
import 'rc-search/lib/index.css'

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

👤 **xiaozhi**


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/naruto-xz/rc-search/issues). You can also take a look at the [contributing guide](git@github.com:naruto-xz/rc-search/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!