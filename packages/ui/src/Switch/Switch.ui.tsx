import React, { useMemo }       from 'react';
import { useControllableState } from '@ui-kit/utils';
import clsx                     from 'clsx';
import {
  switchClass,
  switchHandleClass,
} from './Switch.css';
import type { SwitchComponent }                        from './Switch.types';
import { switchHandleDefaultSizeClass, switchSizeMap } from './css/Switch.size.css';
import { switchColorMap }                              from './css/Switch.color.css';

export const Switch: SwitchComponent = (_props) => {
  const {
    defaultChecked = false,
    checked,
    onChange,
    disabled,
    className,
    color = 'black',
    size = 'md',
    ...props
  } = _props;

  const [internalChecked, setInternalChecked] = useControllableState(
    checked,
    defaultChecked,
    onChange,
  );

  const handleToggle = () => {
    if (!disabled) {
      setInternalChecked(!internalChecked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  };

  const sizeClass = useMemo(() => switchSizeMap[size], [size]);
  const colorClass = useMemo(() => switchColorMap[color], [color]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={internalChecked}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={clsx(switchClass, sizeClass, colorClass, className)}
      {...props}
    >
      <span className={clsx(switchHandleClass, switchHandleDefaultSizeClass)} />
    </button>
  );
};
