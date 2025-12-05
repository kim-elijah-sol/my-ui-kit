import { createVarStore, Prefix } from '@ui-kit/utils';

export const baseButtonColorStore = createVarStore<'outline'>('base-button');

export const primaryColorStore = createVarStore<
  | 'bg'
  | 'color'
  | 'hover'
  | 'active'
  | Prefix<'disabled-', 'bg' | 'color' | 'border'>
>('primary-button');

export const borderColorStore = createVarStore<
  'border' | 'hover-border' | 'active-border' | Prefix<'disabled-', 'border'>
>('border-button');

export const ghostColorStore = createVarStore<'hover' | 'active'>('ghost-button');

export const linkColorStore = createVarStore<
  'color' | 'hover' | 'active' | 'disabled'
>('link-button');
