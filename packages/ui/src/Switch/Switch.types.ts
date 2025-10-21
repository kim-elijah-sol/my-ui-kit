import React, { type ReactNode } from 'react';
import type { CommonSizeProps } from '../common/types';
import { type SwitchLabelComponent } from './Label';
import { type SwitchRootComponent } from './Root';

type SwitchOnChangeEvent = (checked: boolean) => void;

export type SwitchProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: SwitchOnChangeEvent;
  disabled?: boolean;

  id?: string;
  className?: string;
  name?: string;
  style?: React.CSSProperties;
} & CommonSizeProps;

export type SwitchComponent = (props: SwitchProps) => ReactNode;

export type SwitchType = SwitchComponent & {
  Root: SwitchRootComponent;
  Label: SwitchLabelComponent;
};
