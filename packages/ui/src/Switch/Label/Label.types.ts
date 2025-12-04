import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ReactNode,
} from 'react';
import type { AsProps, StringElementType } from '../../_utils/types';

export type SwitchLabelProps<T extends StringElementType = 'p'>
  = ComponentPropsWithoutRef<T> & AsProps<T>;

export type SwitchLabelComponent = <T extends StringElementType = 'p'>(
  props: SwitchLabelProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>,
) => ReactNode;
