import React, { ReactNode } from 'react';
import { SiwtchRootComponent } from './Root';

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
};
