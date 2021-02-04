# zenweb-sentry
 
 zenweb sentry module

## Quick start

```bash
$ npm i @zenweb/sentry
```

app.js
```js
'use strict';

const app = module.exports = require('zenweb').create();

app.setup('@zenweb/sentry', { dsn: 'xxxxx' });

app.start();
```
