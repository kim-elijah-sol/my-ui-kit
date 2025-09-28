import { type SerializedStyles } from '@emotion/react';
import { forwardRef, useMemo } from 'react';
import {
  baseButtonCss,
  borderButtonCss,
  dashedButtonCss,
  ghostButtonCss,
  linkButtonCss,
  primaryButtonCss,
} from './Button.css';
import type { ButtonProps, ButtonVariant } from './Button.types';

const variantCssMap: Record<ButtonVariant, SerializedStyles> = {
  primary: primaryButtonCss,
  border: borderButtonCss,
  dashed: dashedButtonCss,
  ghost: ghostButtonCss,
  link: linkButtonCss,
};

export const Button = forwardRef(
  (_props: Omit<ButtonProps, 'ref'>, ref: Pick<ButtonProps, 'ref'>['ref']) => {
    const { variant = 'primary', ...props } = _props;

    const variantCss = useMemo(() => variantCssMap[variant], [variant]);

    return <button ref={ref} css={[baseButtonCss, variantCss]} {...props} />;
  }
);
