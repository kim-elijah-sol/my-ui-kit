import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ReactNode,
} from 'react';

export type SwitchLabelElementType = ElementType & string;

export type SwitchLabelAsProps<T extends SwitchLabelElementType> = {
  as?: T;
};

export type SwitchLabelProps<T extends SwitchLabelElementType = 'p'> =
  ComponentPropsWithoutRef<T> & SwitchLabelAsProps<T>;

export type SwitchLabelComponent = <T extends SwitchLabelElementType = 'p'>(
  props: SwitchLabelProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => ReactNode;
