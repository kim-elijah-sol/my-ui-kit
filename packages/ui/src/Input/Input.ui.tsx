import { type SerializedStyles } from '@emotion/react';
import { forwardRef, useMemo } from 'react';
import type { WithoutRef } from '../_utils/types';
import {
  baseInputCss,
  borderInputCss,
  bottomBorderInputCss,
  inputMediumSizeCss,
  solidInputCss,
} from './Input.css';
import type { InputProps, InputVariant } from './Input.typs';

const variantCssMap: Record<InputVariant, SerializedStyles> = {
  border: borderInputCss,
  solid: solidInputCss,
  'bottom-border': bottomBorderInputCss,
};

export const Input = forwardRef(
  (_props: WithoutRef<InputProps>, ref: InputProps['ref']) => {
    const { type = 'text', variant = 'border', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return (
      <input
        type={type}
        ref={ref}
        css={[baseInputCss, variantCss, inputMediumSizeCss]}
        {...props}
      />
    );
  }
);
