import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type CheckboxColor = 'black' | 'blue';

type CheckboxColorProps = Partial<Record<'color', CheckboxColor>>;

export type CheckboxProps = Omit<ComponentPropsWithRef<'input'>, 'type'>
  & CheckboxColorProps;

export type CheckboxComponent = (props: CheckboxProps) => ReactNode;
