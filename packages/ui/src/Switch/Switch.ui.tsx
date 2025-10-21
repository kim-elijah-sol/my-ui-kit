import React, { useMemo } from 'react';
import type { CommonSize } from '../common/types';
import { useControllableState } from '../_utils/hooks';
import type { CssMap } from '../_utils/types';
import { SwitchLabel } from './Label';
import { SwitchRoot } from './Root';
import { SWITCH_BASE_CLASSNAME } from './Switch.constants';
import {
  switchCss,
  switchHandleCss,
  switchHandleDefaultSizeCss,
  switchLargeSizeCss,
  switchMediumSizeCss,
  switchSmallSizeCss,
} from './Switch.css';
import type { SwitchType } from './Switch.types';

const sizeCssMap: CssMap<CommonSize> = {
  sm: switchSmallSizeCss,
  md: switchMediumSizeCss,
  lg: switchLargeSizeCss,
};

export const Switch: SwitchType = (_props) => {
  const {
    defaultChecked = false,
    checked,
    onChange,
    disabled,
    className,
    size = 'md',
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

  const sizeCss = useMemo(() => sizeCssMap[size], [size]);

  return (
    <button
      type='button'
      role='switch'
      aria-checked={internalChecked}
      disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      css={[switchCss, sizeCss]}
      className={`${SWITCH_BASE_CLASSNAME}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span css={[switchHandleCss, switchHandleDefaultSizeCss]} />
    </button>
  );
};

Switch.Root = SwitchRoot;
Switch.Label = SwitchLabel;
