import { type FC } from 'react';
import { baseButtonCss, borderButtonCss, primaryButtonCss } from './Button.css';
import { type ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const variantCss = variant === 'primary' ? primaryButtonCss : borderButtonCss;

  return <button css={[baseButtonCss, variantCss]} {...props} />;
};
