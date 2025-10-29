import { forwardRef, useMemo } from 'react';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseTextareaCss,
  borderTextareaCss,
  bottomBorderTextareaCss,
  solidTextareaCss,
  textareaBlackColorCss,
  textareaBlueColorCss,
} from './Textarea.css';
import type {
  TextareaColor,
  TextareaProps,
  TextareaVariant,
} from './Textarea.types';

const variantCssMap: CssMap<TextareaVariant> = {
  border: borderTextareaCss,
  solid: solidTextareaCss,
  'bottom-border': bottomBorderTextareaCss,
};

const colorCssMap: CssMap<TextareaColor> = {
  black: textareaBlackColorCss,
  blue: textareaBlueColorCss,
};

export const Textarea = forwardRef(
  (_props: WithoutRef<TextareaProps>, ref: TextareaProps['ref']) => {
    const { variant = 'border', color = 'black', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    const colorCss = useMemo(() => colorCssMap[color], [color]);

    return (
      <textarea
        ref={ref}
        css={[baseTextareaCss, variantCss, colorCss]}
        {...props}
      />
    );
  }
);
