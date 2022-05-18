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
$ npm install zindex-maximumvalue-manager
```



## People

The original author of zindex-maximumvalue-manager is [MushStory](https://github.com/MushStory)



## License

 [MIT](LICENSE)



[npm-downloads-image]: https://badgen.net/npm/dm/zindex-maximumvalue-manager
[npm-downloads-url]: https://npmcharts.com/compare/zindex-maximumvalue-manager?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/zindex-maximumvalue-manager
[npm-install-size-url]: https://packagephobia.com/result?p=zindex-maximumvalue-manager
[npm-url]: https://npmjs.org/package/zindex-maximumvalue-manager
[npm-version-image]: https://badgen.net/npm/v/zindex-maximumvalue-manager