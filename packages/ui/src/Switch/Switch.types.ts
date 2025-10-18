import React, { type ReactNode } from 'react';
import { type SwitchLabelComponent } from './Label';
import { type SwitchRootComponent } from './Root';

type SwitchOnChangeEvent = (checked: boolean) => void;

export type SwitchSize = 'sm' | 'md' | 'lg';

type SwitchSizeProps = Partial<Record<'size', SwitchSize>>;

export type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: SwitchOnChangeEvent;
  disabled?: boolean;

  id?: string;
  className?: string;
  name?: string;
  style?: React.CSSProperties;
} & SwitchSizeProps;

export type SwitchComponent = (props: SwitchProps) => ReactNode;

export type SwitchType = SwitchComponent & {
  Root: SwitchRootComponent;
  Label: SwitchLabelComponent;
};
