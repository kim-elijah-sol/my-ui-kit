import type { ReactNode } from 'react';

export type SliderColor = 'black' | 'blue';

type SliderColorProps = Partial<Record<'color', SliderColor>>;

export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  defaultValue?: number;
  max?: number;
  min?: number;
  step?: number;
  disabled?: boolean;
} & SliderColorProps;

export type SliderComponent = (props: SliderProps) => ReactNode;
