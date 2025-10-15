import { css, type SerializedStyles } from '@emotion/react';
import type { ArrayElementOf } from '../../types';

export type CreateVarStore<T extends string> = {
  use: (key: T) => string;
  css: (vars: {
    [key in T]: ArrayElementOf<Parameters<typeof css>>;
  }) => SerializedStyles;
};
