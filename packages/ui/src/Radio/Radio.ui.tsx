import { forwardRef, useId } from 'react';
import type { WithoutRef } from '../_utils/types';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';
import {
  radioInnerCircleCss,
  radioInputCss,
  radioWrapperCss,
} from './Radio.css';
import type { RadioProps } from './Radio.types';

export const Radio = forwardRef(
  (_props: WithoutRef<RadioProps>, ref: RadioProps['ref']) => {
    const { className, id: _id, ...props } = _props;

    const id = _id ?? useId();

    return (
      <div css={radioWrapperCss}>
        <input
          id={id}
          ref={ref}
          type='radio'
          css={radioInputCss}
          className={`${RADIO_INPUT_BASE_CLASSNAME}${
            className ? ` ${className}` : ''
          }`}
          {...props}
        />
        <span css={radioInnerCircleCss} />
      </div>
    );
  }
);
