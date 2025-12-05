import { Prefix, createVarStore } from '@ui-kit/utils';

type SwitchColorProperties
  = | Prefix<'background', '' | '-hover' | '-disabled'>
    | 'outline-focus';
export const switchColorStore = createVarStore<
  | Prefix<'checked-', SwitchColorProperties>
  | Prefix<'unchecked-', SwitchColorProperties>
>('ui-kit-switch');
