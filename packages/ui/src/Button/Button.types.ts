import { ComponentPropsWithRef } from 'react';
import { WithCssProp } from '../type/WithCssProp';

export type ButtonVariant = 'primary' | 'border' | 'dashed' | 'text' | 'link';

type ButtonVariantProps = {
  variant?: ButtonVariant;
};

export type ButtonProps = WithCssProp<ComponentPropsWithRef<'button'>> &
  ButtonVariantProps;
