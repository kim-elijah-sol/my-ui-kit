import { forwardRef } from 'react';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';
import { radioCircleCss, radioInputCss } from './Radio.css';
import type { RadioProps } from './Radio.types';

export const Radio = forwardRef(
  (_props: Omit<RadioProps, 'ref'>, ref: RadioProps['ref']) => {
    const { className, ...props } = _props;

    return (
      <>
        <input
          ref={ref}
          type='radio'
          css={radioInputCss}
          className={`${RADIO_INPUT_BASE_CLASSNAME}${
            className ? ` ${className}` : ''
          }`}
          {...props}
        />
        <label htmlFor={props.id} css={radioCircleCss} />
      </>
    );
  }
);
