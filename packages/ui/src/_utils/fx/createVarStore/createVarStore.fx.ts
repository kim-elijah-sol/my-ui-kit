import { css } from '@emotion/react';
import { CreateVarStore } from './createVarStore.types';

const prefix = 'ui-kit';

export const createVarStore = <T extends string>(): CreateVarStore<T> => {
  return {
    use: (key) => {
      return `var(--${prefix}-${key})`;
    },
    css: (vars) => {
      const cssVars = Object.entries(vars).reduce((acc, [_key, value]) => {
        const key = `--${prefix}-${_key}`;

        acc[key] = value;
        return acc;
      }, {} as Record<string, any>);

      return css(cssVars);
    },
  };
};
