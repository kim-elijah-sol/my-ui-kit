import { forwardRef, useMemo }     from 'react';
import { CommonSize }              from '../common/types';
import { flexCss }                 from '../Flex/Flex.css';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseButtonCss,
  borderButtonCss,
  buttonBlackColorCss,
  buttonLargeSizeCss,
  buttonMediumSizeCss,
  buttonSmallSizeCss,
  dashedButtonCss,
  ghostButtonCss,
  linkButtonCss,
  primaryButtonCss,
} from './Button.css';
import type { ButtonProps, ButtonVariant } from './Button.types';

const variantCssMap: CssMap<ButtonVariant> = {
  primary: primaryButtonCss,
  border: borderButtonCss,
  dashed: dashedButtonCss,
  ghost: ghostButtonCss,
  link: linkButtonCss,
};

const sizeCssMap: CssMap<CommonSize> = {
  sm: buttonSmallSizeCss,
  md: buttonMediumSizeCss,
  lg: buttonLargeSizeCss,
};

export const Button = forwardRef(
  (_props: WithoutRef<ButtonProps>, ref: ButtonProps['ref']) => {
    const {
      variant = 'primary',
      type = 'button',
      size = 'md',
      ...props
    } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    const sizeCss = useMemo(() => sizeCssMap[size], [size]);

    return (
      <button
        type={type}
        ref={ref}
        css={[
          baseButtonCss,
          variantCss,
          sizeCss,
          flexCss({
            inline: true,
            justify: 'center',
            align: 'center',
            gap: '0.5rem',
          }),
          ...buttonBlackColorCss,
        ]}
        {...props}
      />
    );
  },
);
