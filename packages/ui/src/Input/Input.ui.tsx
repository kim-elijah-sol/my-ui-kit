import { forwardRef, useMemo } from 'react';
import type { WithoutRef }     from '@ui-kit/utils';
import clsx                    from 'clsx';
import {
  baseInputClass,
  inputVariantMap,
} from './Input.css';
import type { InputProps } from './Input.types';
import { inputSizeMap }    from './css/Input.size.css';
import { inputColorMap }   from './css/Input.color.css';

export const Input = forwardRef(
  (_props: WithoutRef<InputProps>, ref: InputProps['ref']) => {
    const {
      type = 'text',
      variant = 'border',
      size = 'md',
      color = 'black',
      className,
      ...props
    } = _props;

    const variantClass = useMemo(() => inputVariantMap[variant], [variant]);
    const sizeClass = useMemo(() => inputSizeMap[size], [size]);
    const colorClass = useMemo(() => inputColorMap[color], [color]);

    return (
      <input
        type={type}
        ref={ref}
        className={clsx(baseInputClass, variantClass, sizeClass, colorClass, className)}
        {...props}
      />
    );
  },
);
