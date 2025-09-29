import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type TextareaVariant = 'border' | 'solid' | 'bottom-border';

type TextareaVariantProps = Partial<Record<'variant', TextareaVariant>>;

export type TextareaProps = ComponentPropsWithRef<'textarea'> &
  TextareaVariantProps;

export type TextareaComponent = (props: TextareaProps) => ReactNode;
