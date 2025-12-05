import { createVarStore, Prefix } from '@ui-kit/utils';

export const inputColorStore = createVarStore<
  | Prefix<'border', '' | Prefix<'-', 'hover' | 'focus'>>
  | Prefix<'background', '' | Prefix<'-', 'hover' | 'focus' | 'disabled'>>
>('ui-kit-input');
