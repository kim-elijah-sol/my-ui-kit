import { forwardRef, useId, useMemo } from 'react';
import type { WithoutRef }            from '@ui-kit/utils';
import clsx                           from 'clsx';
import {
  radioInnerCircleClass,
  radioInputClass,
  radioWrapperClass,
} from './Radio.css';
import type { RadioProps } from './Radio.types';
import { radioColorMap }   from './css/Radio.color.css';

export const Radio = forwardRef(
  (_props: WithoutRef<RadioProps>, ref: RadioProps['ref']) => {
    const { className, id: _id, color = 'black', ...props } = _props;

    const id = _id ?? useId();

    const colorClass = useMemo(() => radioColorMap[color], [color]);

    return (
      <div className={clsx(radioWrapperClass, colorClass)}>
        <input
          id={id}
          ref={ref}
          type="radio"
          className={clsx(radioInputClass, className)}
          {...props}
        />
        <span className={radioInnerCircleClass} />
      </div>
    );
  },
);
