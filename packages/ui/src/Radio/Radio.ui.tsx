import { forwardRef, useId, useMemo } from 'react';
import type { CssMap, WithoutRef }    from '@ui-kit/utils';
import {
  radioBlackColorClass,
  radioBlueColorClass,
  radioInnerCircleClass,
  radioInputClass,
  radioWrapperClass,
} from './Radio.css';
import type { RadioColor, RadioProps } from './Radio.types';

const colorClassMap: CssMap<RadioColor> = {
  black: radioBlackColorClass,
  blue: radioBlueColorClass,
};

export const Radio = forwardRef(
  (_props: WithoutRef<RadioProps>, ref: RadioProps['ref']) => {
    const { className, id: _id, color = 'black', ...props } = _props;

    const id = _id ?? useId();

    const colorClass = useMemo(() => colorClassMap[color], [color]);

    return (
      <div className={[radioWrapperClass, colorClass].join(' ')}>
        <input
          id={id}
          ref={ref}
          type="radio"
          className={[
            radioInputClass,
            className,
          ].filter(Boolean).join(' ')}
          {...props}
        />
        <span className={radioInnerCircleClass} />
      </div>
    );
  },
);
