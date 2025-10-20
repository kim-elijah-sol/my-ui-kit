import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type InputVariant = 'border' | 'solid' | 'bottom-border';

type InputVariantProps = Partial<Record<'variant', InputVariant>>;

export type InputSize = 'sm' | 'md' | 'lg';

type InputSizeProps = Partial<Record<'size', InputSize>>;

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'size'> &
  InputVariantProps &
  InputSizeProps;

export type InputComponent = (props: InputProps) => ReactNode;
