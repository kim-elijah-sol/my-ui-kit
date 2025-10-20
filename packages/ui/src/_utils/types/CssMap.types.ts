import { type SerializedStyles } from '@emotion/react';

export type CssMap<T extends string> = Record<T, SerializedStyles>;
