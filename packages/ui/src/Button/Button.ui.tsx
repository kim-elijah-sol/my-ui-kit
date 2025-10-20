import { forwardRef, useMemo } from 'react';
import { flexCss } from '../Flex/Flex.css';
import type { CssMap, WithoutRef } from '../_utils/types';
import {
  baseButtonCss,
  borderButtonCss,
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

export const Button = forwardRef(
  (_props: WithoutRef<ButtonProps>, ref: ButtonProps['ref']) => {
    const { variant = 'primary', type = 'button', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return (
      <button
        type={type}
        ref={ref}
        css={[
          baseButtonCss,
          variantCss,
          flexCss({
            inline: true,
            justify: 'center',
            align: 'center',
            gap: '0.5rem',
          }),
        ]}
        {...props}
      />
    );
  }
);
