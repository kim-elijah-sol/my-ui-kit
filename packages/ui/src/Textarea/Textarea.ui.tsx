import { type SerializedStyles } from '@emotion/react';
import { forwardRef, useMemo } from 'react';
import {
  baseTextareaCss,
  borderTextareaCss,
  bottomBorderTextareaCss,
  solidTextareaCss,
} from './Textarea.css';
import type { TextareaProps, TextareaVariant } from './Textarea.types';

const variantCssMap: Record<TextareaVariant, SerializedStyles> = {
  border: borderTextareaCss,
  solid: solidTextareaCss,
  'bottom-border': bottomBorderTextareaCss,
};

export const Textarea = forwardRef(
  (
    _props: Omit<TextareaProps, 'ref'>,
    ref: Pick<TextareaProps, 'ref'>['ref']
  ) => {
    const { variant = 'border', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return (
      <textarea ref={ref} css={[baseTextareaCss, variantCss]} {...props} />
    );
  }
);
