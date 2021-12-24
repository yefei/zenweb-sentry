import { SetupFunction } from '@zenweb/core';
import { init, withScope, Handlers, captureException, NodeOptions } from '@sentry/node';

interface SentryOption extends NodeOptions {}

export default function setup(option?: SentryOption): SetupFunction {
  return function sentry(setup) {
    setup.debug('option: %o', option);
    init(option);
    setup.koa.on('error', (err, ctx) => {
      if (ctx) {
        withScope(scope => {
          scope.addEventProcessor(event => Handlers.parseRequest(event, ctx.request));
          const requestId = ctx.get('x-request-id');
          requestId && scope.setTag('request_id', requestId);
          captureException(err);
        });
      } else {
        captureException(err);
      }
    });
  }
}
