# jiango-node-sentry
 
 jiango sentry module

## Quick start

```bash
$ npm i @jiango/sentry
```

app.js
```js
'use strict';

const app = module.exports = require('..')();

app.setup('@jiango/sentry', { dsn: 'xxxxx' });

app.start();
```
