# Z-Index Manager

Managing the maximum value of zIndex



 [![NPM Version][npm-version-image]][npm-url]

 [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

 [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```javascript
import {zIndexManager} from "../../frontle/browser_modules/zindex-maximumvalue-manager/zIndexManager.js";

// get instance
const zIndexManager = zIndexManager.getInstance();

// get maximum z-index value
console.log(zIndexManager.getZIndex()); // 1000

// add maximum z-index value
zIndexManager.setZIndex(2);

console.log(zIndexManager.getZIndex()); // 1002

```



## Installation

**How to install from Frontle**

```shell
$ frontle install zindex-maximumvalue-manager
```



**How to install from Web**

For typical web projects, copy and use the code at zIndexManager.js in below repositorys

https://github.com/Artifriends-inc/zIndexManager (zIndexManager.js)



## People

The original author of zindex-maximumvalue-manager is [MushStory](https://github.com/MushStory)



## Function

#### getInstance()

Create "zIndexMaanger" object. only one object is created using a single-tone pattern

```javascript
// get instance
const zIndexManager = zIndexManager.getInstance();
```

#### 

#### getZIndex()

Get maximum z-index value

```javascript
// get maximum z-index value
console.log(zIndexManager.getZIndex()); // 1000
```

#### 

#### setZIndex()

Add maximum z-index value

```javascript
// add maximum z-index value
zIndexManager.setZIndex(2);
```



## License

 [MIT](LICENSE)



[npm-downloads-image]: https://badgen.net/npm/dm/zindex-maximumvalue-manager
[npm-downloads-url]: https://npmcharts.com/compare/zindex-maximumvalue-manager?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/zindex-maximumvalue-manager
[npm-install-size-url]: https://packagephobia.com/result?p=zindex-maximumvalue-manager
[npm-url]: https://npmjs.org/package/zindex-maximumvalue-manager
[npm-version-image]: https://badgen.net/npm/v/zindex-maximumvalue-manager
