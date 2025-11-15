import { forwardRef, useId, useMemo } from 'react';
import type { CssMap, WithoutRef } from '../_utils/types';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';
import {
  radioBlackColorCss,
  radioBlueColorCss,
  radioInnerCircleCss,
  radioInputCss,
  radioWrapperCss,
} from './Radio.css';
import type { RadioColor, RadioProps } from './Radio.types';

const colorCssMap: CssMap<RadioColor> = {
  black: radioBlackColorCss,
  blue: radioBlueColorCss,
};

export const Radio = forwardRef(
  (_props: WithoutRef<RadioProps>, ref: RadioProps['ref']) => {
    const { className, id: _id, color = 'black', ...props } = _props;

    const id = _id ?? useId();

    const colorCss = useMemo(() => colorCssMap[color], [color]);

    return (
      <div css={[radioWrapperCss, colorCss]}>
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
