import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type TextareaVariant = 'border' | 'solid' | 'bottom-border';

type TextareaVariantProps = Partial<Record<'variant', TextareaVariant>>;

export type TextareaColor = 'black' | 'blue';

type TextareaColorProps = Partial<Record<'color', TextareaColor>>;

export type TextareaProps = ComponentPropsWithRef<'textarea'>
  & TextareaVariantProps
  & TextareaColorProps;

export type TextareaComponent = (props: TextareaProps) => ReactNode;
