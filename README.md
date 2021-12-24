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
const { default: sentry } = require('@zenweb/sentry');

app.setup(sentry({ dsn: 'xxxxx' }));

app.start();
```
