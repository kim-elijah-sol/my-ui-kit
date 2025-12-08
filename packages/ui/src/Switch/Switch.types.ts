import type React               from 'react';
import { type ReactNode }       from 'react';
import type { CommonSizeProps } from '../common/types';

export type SwitchColor = 'black' | 'blue';

type SwitchColorProps = Partial<Record<'color', SwitchColor>>;

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
} & CommonSizeProps
& SwitchColorProps;

export type SwitchComponent = (props: SwitchProps) => ReactNode;
