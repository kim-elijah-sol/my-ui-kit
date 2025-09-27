import { type ComponentPropsWithRef, forwardRef } from 'react';
import { flexCss } from './Flex.css';
import type { FlexComponent, FlexElementType, FlexProps } from './Flex.types';

export const Flex: FlexComponent = forwardRef(
  <T extends FlexElementType>(
    _props: FlexProps<T>,
    ref: ComponentPropsWithRef<T>['ref']
  ) => {
    const {
      inline,
      align,
      justify,
      direction,
      wrap,
      gap,
      as: Component = 'div',
      ...props
    } = _props;

    return (
      <Component
        ref={ref}
        css={flexCss({
          inline,
          align,
          justify,
          direction,
          wrap,
          gap,
        })}
        {...props}
      />
    );
  }
);
