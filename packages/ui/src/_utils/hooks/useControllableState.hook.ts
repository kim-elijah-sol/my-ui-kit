import { useState } from 'react';

export const useControllableState = <T>(
  controlledValue?: T,
  defaultValue?: T,
  onChange?: (value: T) => void,
) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = (newValue: T) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onChange?.(newValue);
  };

  return [value, setValue] as const;
};
