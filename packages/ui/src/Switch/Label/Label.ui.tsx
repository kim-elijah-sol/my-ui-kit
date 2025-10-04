import { type ComponentPropsWithRef, forwardRef } from 'react';
import { switchLabelCss } from './Label.css';
import type {
  SwitchLabelComponent,
  SwitchLabelElementType,
  SwitchLabelProps,
} from './Label.types';

export const SwitchLabel: SwitchLabelComponent = forwardRef(
  <T extends SwitchLabelElementType>(
    _props: SwitchLabelProps<T>,
    ref: ComponentPropsWithRef<T>['ref']
  ) => {
    const { as = 'p', ...props } = _props;

    const Component = as;

    return <Component css={switchLabelCss} ref={ref} {...props} />;
  }
);
