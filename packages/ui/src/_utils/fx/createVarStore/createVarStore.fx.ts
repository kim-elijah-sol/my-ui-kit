import { createVar, style } from '@vanilla-extract/css';
import { CreateVarStore }   from './createVarStore.types';

const DEFAULT_PREFIX = 'ui-kit';

export const createVarStore = <T extends string>(
  prefix: string = DEFAULT_PREFIX,
): CreateVarStore<T> => {
  const vars: Record<string, ReturnType<typeof createVar>> = {};

  const getOrCreateVar = (key: string) => {
    const varName = `${prefix}-${key}`;
    if (!vars[varName]) {
      vars[varName] = createVar(varName);
    }
    return vars[varName];
  };

  return {
    use: (key) => {
      return getOrCreateVar(key);
    },
    style: (varsToSet) => {
      const styleVars: Record<string, string> = {};
      for (const [key, value] of Object.entries(varsToSet)) {
        const cssVar = getOrCreateVar(key);
        styleVars[cssVar] = value as string;
      }
      return style({
        vars: styleVars,
      });
    },
  };
};
