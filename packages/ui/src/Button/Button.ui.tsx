import { type ComponentPropsWithRef, type FC } from 'react';
import { type WithCssProp } from '../type/WithCssProp';
import { buttonCss } from './Button.css';

type Props = WithCssProp<ComponentPropsWithRef<'button'>>;

export const Button: FC<Props> = (props) => {
  return <button css={buttonCss} {...props} />;
};
