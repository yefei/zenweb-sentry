import { NodeOptions } from '@sentry/node';

export type SentryOptions = NodeOptions;

export declare function setup(core: Core, options?: SentryOptions): void;
