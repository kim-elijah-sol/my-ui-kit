import React, { type ReactNode } from 'react';
import { type SwitchLabelComponent } from './Label';
import { type SiwtchRootComponent } from './Root';

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
};

export type SwitchComponent = (props: SwitchProps) => ReactNode;

export type SwitchType = SwitchComponent & {
  Root: SiwtchRootComponent;
  Label: SwitchLabelComponent;
};
