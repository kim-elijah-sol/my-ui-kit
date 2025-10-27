import { type ComponentPropsWithRef, type ReactNode } from 'react';
import { CommonSizeProps } from '../common/types';

export type ButtonVariant = 'primary' | 'border' | 'dashed' | 'ghost' | 'link';

type ButtonVariantProps = {
  variant?: ButtonVariant;
};

export type ButtonProps = ComponentPropsWithRef<'button'> &
  ButtonVariantProps &
  CommonSizeProps;

export type ButtonComponent = (props: ButtonProps) => ReactNode;
