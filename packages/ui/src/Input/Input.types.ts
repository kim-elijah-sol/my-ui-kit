import { type ComponentPropsWithRef, type ReactNode } from 'react';
import type { CommonSizeProps } from '../common/types';

export type InputVariant = 'border' | 'solid' | 'bottom-border';

type InputVariantProps = Partial<Record<'variant', InputVariant>>;

export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'size'> &
  InputVariantProps &
  CommonSizeProps;

export type InputComponent = (props: InputProps) => ReactNode;
