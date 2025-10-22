import { forwardRef, useMemo } from 'react';
import type { CommonSize } from '../common/types';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseInputCss,
  borderInputCss,
  bottomBorderInputCss,
  inputBlackColorCss,
  inputLargeSizeCss,
  inputMediumSizeCss,
  inputSmallSizeCss,
  solidInputCss,
} from './Input.css';
import type { InputProps, InputVariant } from './Input.types';

const variantCssMap: CssMap<InputVariant> = {
  border: borderInputCss,
  solid: solidInputCss,
  'bottom-border': bottomBorderInputCss,
};

const sizeCssMap: CssMap<CommonSize> = {
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
        css={[baseInputCss, variantCss, sizeCss, inputBlackColorCss]}
        {...props}
      />
    );
  }
);
