import { createVarStore } from '@ui-kit/utils';

export const buttonSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>(
  'button-size',
);
