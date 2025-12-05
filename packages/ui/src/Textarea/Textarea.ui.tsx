import { forwardRef, useMemo }          from 'react';
import type { CssMap, WithoutRef } from '@ui-kit/utils';
import {
  baseTextareaClass,
  borderTextareaClass,
  bottomBorderTextareaClass,
  solidTextareaClass,
  textareaBlackColorClass,
  textareaBlueColorClass,
} from './Textarea.css';
import type {
  TextareaColor,
  TextareaProps,
  TextareaVariant,
} from './Textarea.types';

const variantClassMap: CssMap<TextareaVariant> = {
  'border': borderTextareaClass,
  'solid': solidTextareaClass,
  'bottom-border': bottomBorderTextareaClass,
};

const colorClassMap: CssMap<TextareaColor> = {
  black: textareaBlackColorClass,
  blue: textareaBlueColorClass,
};

export const Textarea = forwardRef(
  (_props: WithoutRef<TextareaProps>, ref: TextareaProps['ref']) => {
    const { variant = 'border', color = 'black', className, ...props } = _props;

    const variantClass = useMemo(() => variantClassMap[variant], [variant]);
    const colorClass = useMemo(() => colorClassMap[color], [color]);

    return (
      <textarea
        ref={ref}
        className={[
          baseTextareaClass,
          variantClass,
          colorClass,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);
