import { forwardRef, useId, useMemo } from 'react';
import type { WithoutRef }            from '@ui-kit/utils';
import clsx                           from 'clsx';
import {
  checkboxCheckmarkClass,
  checkboxCheckmarkPathClass,
  checkboxInputClass,
  checkboxWrapperClass,
} from './Checkbox.css';
import type { CheckboxProps } from './Checkbox.types';
import { checkboxColorMap }   from './css/Checkbox.color.css';

export const Checkbox = forwardRef(
  (_props: WithoutRef<CheckboxProps>, ref: CheckboxProps['ref']) => {
    const { className, id: _id, color = 'black', ...props } = _props;

    const id = _id ?? useId();

    const colorClass = useMemo(() => checkboxColorMap[color], [color]);

    return (
      <div className={clsx(checkboxWrapperClass, colorClass)}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={clsx(checkboxInputClass, className)}
          {...props}
        />
        <svg
          className={checkboxCheckmarkClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            className={checkboxCheckmarkPathClass}
            points="4 12 9 17 20 6"
          />
        </svg>
      </div>
    );
  },
);
