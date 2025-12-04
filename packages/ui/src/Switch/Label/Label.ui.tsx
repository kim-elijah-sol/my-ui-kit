import { type ComponentPropsWithRef, forwardRef }      from 'react';
import type { StringElementType }                      from '../../_utils/types';
import { switchLabelCss }                              from './Label.css';
import type { SwitchLabelComponent, SwitchLabelProps } from './Label.types';

export const SwitchLabel: SwitchLabelComponent = forwardRef(
  <T extends StringElementType>(
    _props: SwitchLabelProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    const { as = 'p', ...props } = _props;

    const Component = as;

    return <Component css={switchLabelCss} ref={ref} {...props} />;
  },
);
