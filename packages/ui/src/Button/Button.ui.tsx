import { forwardRef, useMemo }          from 'react';
import { CommonSize }                   from '../common/types';
import type { CssMap, WithoutRef } from '@ui-kit/utils';
import {
  baseButtonClass,
  borderButtonClass,
  buttonBlackColorClass,
  buttonLargeSizeClass,
  buttonMediumSizeClass,
  buttonSmallSizeClass,
  dashedButtonClass,
  ghostButtonClass,
  linkButtonClass,
  primaryButtonClass,
} from './Button.css';
import type { ButtonProps, ButtonVariant } from './Button.types';

const variantClassMap: CssMap<ButtonVariant> = {
  primary: primaryButtonClass,
  border: borderButtonClass,
  dashed: dashedButtonClass,
  ghost: ghostButtonClass,
  link: linkButtonClass,
};

const sizeClassMap: CssMap<CommonSize> = {
  sm: buttonSmallSizeClass,
  md: buttonMediumSizeClass,
  lg: buttonLargeSizeClass,
};

export const Button = forwardRef(
  (_props: WithoutRef<ButtonProps>, ref: ButtonProps['ref']) => {
    const {
      variant = 'primary',
      type = 'button',
      size = 'md',
      className,
      ...props
    } = _props;

    const variantClass = useMemo(() => variantClassMap[variant], [variant]);
    const sizeClass = useMemo(() => sizeClassMap[size], [size]);

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
