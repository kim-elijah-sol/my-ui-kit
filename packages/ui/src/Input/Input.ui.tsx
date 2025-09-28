import { forwardRef } from 'react';
import { baseInputCss, borderInputCss } from './Input.css';
import type { InputProps } from './Input.typs';

export const Input = forwardRef(
  (_props: Omit<InputProps, 'ref'>, ref: Pick<InputProps, 'ref'>['ref']) => {
    const { type = 'text', variant = 'border', ...props } = _props;

    return (
      <input
        type={type}
        ref={ref}
        css={[baseInputCss, borderInputCss]}
        {...props}
      />
    );
  }
);
