import { createVarStore } from '@ui-kit/utils';

export const checkboxColorStore = createVarStore<
  'hover' | 'checked' | 'disabled-checked' | 'disabled-unchecked'
>();
