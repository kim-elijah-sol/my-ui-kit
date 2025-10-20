import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type InputVariant = 'border' | 'solid' | 'bottom-border';

type InputVariantProps = Partial<Record<'variant', InputVariant>>;

export type InputProps = ComponentPropsWithRef<'input'> & InputVariantProps;

export type InputComponent = (props: InputProps) => ReactNode;
