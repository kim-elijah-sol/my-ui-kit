import { SerializedStyles } from '@emotion/react';
import { useMemo, type FC } from 'react';
import {
  baseButtonCss,
  borderButtonCss,
  dashedButtonCss,
  primaryButtonCss,
  textButtonCss,
} from './Button.css';
import { ButtonVariant, type ButtonProps } from './Button.types';

const variantCssMap: Record<ButtonVariant, SerializedStyles> = {
  primary: primaryButtonCss,
  border: borderButtonCss,
  dashed: dashedButtonCss,
  text: textButtonCss,
};

export const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const variantCss = useMemo(() => variantCssMap[variant], [variant]);

  return <button css={[baseButtonCss, variantCss]} {...props} />;
};
