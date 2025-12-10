import { useMemo }              from 'react';
import { useControllableState } from '@ui-kit/utils';
import clsx                     from 'clsx';
import {
  sliderWrapperClass,
  sliderTrackClass,
  sliderFillClass,
  sliderInputClass,
  sliderThumbClass,
} from './Slider.css';
import type { SliderProps } from './Slider.types';
import { sliderColorMap }   from './css/Slider.color.css';

export function Slider(props: SliderProps) {
  const {
    value: controlledValue,
    onChange,
    defaultValue = 0,
    max = 100,
    min = 0,
    step = 1,
    color = 'black',
    disabled = false,
  } = props;

  const [value, setValue] = useControllableState(controlledValue, defaultValue, onChange);

  const colorClass = useMemo(() => sliderColorMap[color], [color]);

  const percentage = useMemo(() => {
    return (((value ?? 0) - min) / (max - min)) * 100;
  }, [value, min, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className={clsx(sliderWrapperClass, colorClass)}>
      <div
        className={sliderTrackClass}
        data-disabled={disabled}
      />
      <div
        className={sliderFillClass}
        style={{ width: `${percentage}%` }}
        data-disabled={disabled}
      />
      <input
        type="range"
        className={sliderInputClass}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
      />
      <div
        className={sliderThumbClass}
        style={{ left: `${percentage}%` }}
        data-disabled={disabled}
      />
    </div>
  );
}
