import React, { useMemo }       from 'react';
import type { CommonSize }      from '../common/types';
import { useControllableState } from '../_utils/hooks';
import type { CssMap }          from '../_utils/types';
import {
  switchBlackColorClass,
  switchBlueColorClass,
  switchClass,
  switchHandleClass,
  switchHandleDefaultSizeClass,
  switchLargeSizeClass,
  switchMediumSizeClass,
  switchSmallSizeClass,
} from './Switch.css';
import type { SwitchColor, SwitchComponent } from './Switch.types';

const sizeClassMap: CssMap<CommonSize> = {
  sm: switchSmallSizeClass,
  md: switchMediumSizeClass,
  lg: switchLargeSizeClass,
};

const colorClassMap: CssMap<SwitchColor> = {
  black: switchBlackColorClass,
  blue: switchBlueColorClass,
};

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

  const sizeClass = useMemo(() => sizeClassMap[size], [size]);
  const colorClass = useMemo(() => colorClassMap[color], [color]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={internalChecked}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={[
        switchClass,
        sizeClass,
        colorClass,
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      <span className={[switchHandleClass, switchHandleDefaultSizeClass].join(' ')} />
    </button>
  );
};
