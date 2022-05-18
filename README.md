# Z-Index Manager

Managing the maximum value of zIndex

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
$ npm install @artifriends/zindex-manager
```



## People

The original author of @artifriends/zindex-manager is [MushStory](https://github.com/MushStory)



## License

 [MIT](LICENSE)