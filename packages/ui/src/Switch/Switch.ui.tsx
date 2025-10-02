import React from 'react';
import { useControllableState } from '../_utils/hooks';
import { switchCss, switchHandleCss } from './Switch.css';
import type { SwitchProps } from './Switch.types';

export const Switch = (_props: SwitchProps) => {
  const {
    defaultChecked = false,
    checked,
    onChange,
    disabled,
    ...props
  } = _props;

  const [internalChecked, setInternalChecked] = useControllableState(
    checked,
    defaultChecked,
    onChange
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

  return (
    <button
      type='button'
      role='switch'
      aria-checked={internalChecked}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      css={switchCss}
      {...props}
    >
      <span css={switchHandleCss} />
    </button>
  );
};
