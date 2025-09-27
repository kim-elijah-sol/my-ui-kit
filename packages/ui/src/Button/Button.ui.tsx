import { type FC } from 'react';
import { defaultButtonCss } from './Button.css';
import { type ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = (props) => {
  return <button css={defaultButtonCss} {...props} />;
};
