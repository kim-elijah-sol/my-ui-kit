import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'border' | 'dashed' | 'text' | 'link';

type ButtonVariantProps = {
  variant?: ButtonVariant;
};

export type ButtonProps = ComponentPropsWithRef<'button'> & ButtonVariantProps;

export type ButtonComponent = (props: ButtonProps) => ReactNode;
