import React from 'react';
import { useControllableState } from '../_utils/hooks';
import { SwitchLabel } from './Label';
import { SwitchRoot } from './Root';
import { SWITCH_BASE_CLASSNAME } from './Switch.constants';
import { switchCss, switchHandleCss } from './Switch.css';
import type { SwitchType } from './Switch.types';

export const Switch: SwitchType = (_props) => {
  const {
    defaultChecked = false,
    checked,
    onChange,
    disabled,
    className,
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
      className={`${SWITCH_BASE_CLASSNAME}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span css={switchHandleCss} />
    </button>
  );
};

Switch.Root = SwitchRoot;
Switch.Label = SwitchLabel;
