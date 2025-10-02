import { useState } from 'react';
import { switchCss, switchHandleCss } from './Switch.css';
import type { SwitchProps } from './Switch.types';

export const Switch = (_props: SwitchProps) => {
  const { checked = false, onChange, ...props } = _props;

  const [internalChecked, setInternalChecked] = useState<boolean>(checked);

  return (
    <button
      onClick={() => {
        setInternalChecked(!internalChecked);
        onChange?.(!internalChecked);
      }}
      aria-checked={internalChecked}
      css={switchCss}
      {...props}
    >
      <span css={switchHandleCss} />
    </button>
  );
};
