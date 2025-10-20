import { forwardRef, useMemo } from 'react';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseInputCss,
  borderInputCss,
  bottomBorderInputCss,
  inputLargeSizeCss,
  inputMediumSizeCss,
  inputSmallSizeCss,
  solidInputCss,
} from './Input.css';
import type { InputProps, InputSize, InputVariant } from './Input.types';

const variantCssMap: CssMap<InputVariant> = {
  border: borderInputCss,
  solid: solidInputCss,
  'bottom-border': bottomBorderInputCss,
};

const sizeCssMap: CssMap<InputSize> = {
  sm: inputSmallSizeCss,
  md: inputMediumSizeCss,
  lg: inputLargeSizeCss,
};

export const Input = forwardRef(
  (_props: WithoutRef<InputProps>, ref: InputProps['ref']) => {
    const { type = 'text', variant = 'border', size = 'md', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    const sizeCss = useMemo(() => sizeCssMap[size], [size]);

    return (
      <input
        type={type}
        ref={ref}
        css={[baseInputCss, variantCss, sizeCss]}
        {...props}
      />
    );
  }
);
