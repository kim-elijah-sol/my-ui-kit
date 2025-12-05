import { forwardRef, useMemo } from 'react';
import type { WithoutRef }     from '@ui-kit/utils';
import clsx                    from 'clsx';
import {
  baseTextareaClass,
  textareaVariantMap,
} from './Textarea.css';
import type {
  TextareaProps,
} from './Textarea.types';
import { textareaColorMap } from './css/Textarea.color.css';

export const Textarea = forwardRef(
  (_props: WithoutRef<TextareaProps>, ref: TextareaProps['ref']) => {
    const { variant = 'border', color = 'black', className, ...props } = _props;

    const variantClass = useMemo(() => textareaVariantMap[variant], [variant]);
    const colorClass = useMemo(() => textareaColorMap[color], [color]);

    return (
      <textarea
        ref={ref}
        className={clsx(baseTextareaClass, variantClass, colorClass, className)}
        {...props}
      />
    );
  },
);
