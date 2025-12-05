import { forwardRef, useMemo } from 'react';
import type { WithoutRef }     from '@ui-kit/utils';
import {
  baseButtonClass,
  buttonVariantMap,
} from './Button.css';
import type { ButtonProps }      from './Button.types';
import { buttonSizeMap }         from './css/Button.size.css';
import { buttonBlackColorClass } from './css/Button.color.css';

export const Button = forwardRef(
  (_props: WithoutRef<ButtonProps>, ref: ButtonProps['ref']) => {
    const {
      variant = 'primary',
      type = 'button',
      size = 'md',
      className,
      ...props
    } = _props;

    const variantClass = useMemo(() => buttonVariantMap[variant], [variant]);
    const sizeClass = useMemo(() => buttonSizeMap[size], [size]);

    return (
      <button
        type={type}
        ref={ref}
        className={[
          baseButtonClass,
          variantClass,
          sizeClass,
          buttonBlackColorClass,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);
