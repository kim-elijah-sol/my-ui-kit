import { type ComponentPropsWithRef, type ReactNode } from 'react';
import type { PickRequired } from '../_utils/types';

export type RadioProps = PickRequired<
  Omit<ComponentPropsWithRef<'input'>, 'type' | 'onChange'>,
  'id'
> & {
  onChange?: (checked: boolean) => void;
};

export type RadioComponent = (props: RadioProps) => ReactNode;
