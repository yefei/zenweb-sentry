/**
 * Sentry 模块
 * 并且使用 app.setup('@zenweb/sentry', { dsn: 'xxxxx' }) 启用模块
 */
'use strict';

const debug = require('debug')('zenweb:sentry');
const Sentry = require('@sentry/node');

/**
 * @param {import('zenweb').Core} core 
 * @param {Sentry.NodeOptions} options
 */
function sentry(core, options) {
  const app = core.koa;
  debug('options: %o', options);
  Sentry.init(options);
  app.on('error', (err, ctx) => {
    if (ctx) {
      Sentry.withScope(scope => {
        scope.addEventProcessor(event => Sentry.Handlers.parseRequest(event, ctx.request));
        Sentry.captureException(err);
      });
    } else {
      Sentry.captureException(err);
    }
  });
}

module.exports = sentry;
