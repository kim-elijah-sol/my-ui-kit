import { type SerializedStyles } from '@emotion/react';
import { forwardRef, useMemo } from 'react';
import {
  baseInputCss,
  borderInputCss,
  bottomBorderInputCss,
  solidInputCss,
} from './Input.css';
import type { InputProps, InputVariant } from './Input.typs';

const variantCssMap: Record<InputVariant, SerializedStyles> = {
  border: borderInputCss,
  solid: solidInputCss,
  'bottom-border': bottomBorderInputCss,
};

export const Input = forwardRef(
  (_props: Omit<InputProps, 'ref'>, ref: InputProps['ref']) => {
    const { type = 'text', variant = 'border', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return (
      <input
        type={type}
        ref={ref}
        css={[baseInputCss, variantCss]}
        {...props}
      />
    );
  }
);
