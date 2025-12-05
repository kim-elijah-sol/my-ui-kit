import { createVarStore } from '@ui-kit/utils';

export const radioColorStore = createVarStore<
  'hover' | 'checked' | 'disabled-checked' | 'disabled-unchecked'
>();
