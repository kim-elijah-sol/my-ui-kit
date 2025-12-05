import { forwardRef, useMemo }     from 'react';
import type { CommonSize }         from '../common/types';
import type { CssMap, WithoutRef } from '@ui-kit/utils';
import {
  baseInputClass,
  borderInputClass,
  bottomBorderInputClass,
  inputBlackColorClass,
  inputBlueColorClass,
  inputLargeSizeClass,
  inputMediumSizeClass,
  inputSmallSizeClass,
  solidInputClass,
} from './Input.css';
import type { InputColor, InputProps, InputVariant } from './Input.types';

const variantClassMap: CssMap<InputVariant> = {
  'border': borderInputClass,
  'solid': solidInputClass,
  'bottom-border': bottomBorderInputClass,
};

const sizeClassMap: CssMap<CommonSize> = {
  sm: inputSmallSizeClass,
  md: inputMediumSizeClass,
  lg: inputLargeSizeClass,
};

const colorClassMap: CssMap<InputColor> = {
  black: inputBlackColorClass,
  blue: inputBlueColorClass,
};

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

    const variantClass = useMemo(() => variantClassMap[variant], [variant]);
    const sizeClass = useMemo(() => sizeClassMap[size], [size]);
    const colorClass = useMemo(() => colorClassMap[color], [color]);

    return (
      <input
        type={type}
        ref={ref}
        className={[
          baseInputClass,
          variantClass,
          sizeClass,
          colorClass,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
    );
  },
);
