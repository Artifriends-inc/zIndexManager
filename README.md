# Z-Index Manager

Managing the maximum value of zIndex



 [![NPM Version][npm-version-image]][npm-url]

 [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

 [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```javascript
import {zIndexManager} from "../zIndexManager/zIndexManager.js";

this.zIndexManager = zIndexManager.getInstance(currentPageURL);

console.log(this.zIndexManager.getZIndex()); // 1000

this.zIndexManager.setZIndex(2);

console.log(this.zIndexManager.getZIndex()); // 1002

```



## Installation

Installation is done using the

```shell
$ npm install zindex-manager
```



## People

The original author of Z-Index Manager is [MushStory](https://github.com/MushStory)



## License

 [MIT](LICENSE)



[npm-downloads-image]: https://badgen.net/npm/dm/zindex-manage
[npm-downloads-url]: https://npmcharts.com/compare/zindex-manager?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/zindex-manager
[npm-install-size-url]: https://packagephobia.com/result?p=zindex-manager
[npm-url]: https://npmjs.org/package/zindex-manager
[npm-version-image]: https://badgen.net/npm/v/zindex-manager