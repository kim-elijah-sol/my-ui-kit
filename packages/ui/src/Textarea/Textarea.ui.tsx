import { forwardRef, useMemo } from 'react';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseTextareaCss,
  borderTextareaCss,
  bottomBorderTextareaCss,
  solidTextareaCss,
  textareaBlackColorCss,
} from './Textarea.css';
import type { TextareaProps, TextareaVariant } from './Textarea.types';

const variantCssMap: CssMap<TextareaVariant> = {
  border: borderTextareaCss,
  solid: solidTextareaCss,
  'bottom-border': bottomBorderTextareaCss,
};

export const Textarea = forwardRef(
  (_props: WithoutRef<TextareaProps>, ref: TextareaProps['ref']) => {
    const { variant = 'border', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return (
      <textarea
        ref={ref}
        css={[baseTextareaCss, variantCss, textareaBlackColorCss]}
        {...props}
      />
    );
  }
);
