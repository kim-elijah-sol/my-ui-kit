import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type RadioColor = 'black' | 'blue';

type RadioColorProps = Partial<Record<'color', RadioColor>>;

export type RadioProps = Omit<ComponentPropsWithRef<'input'>, 'type'> &
  RadioColorProps;

export type RadioComponent = (props: RadioProps) => ReactNode;
