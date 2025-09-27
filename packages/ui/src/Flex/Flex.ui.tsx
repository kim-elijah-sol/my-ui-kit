import { type ComponentPropsWithRef, forwardRef } from 'react';
import { flexCss } from './Flex.css';
import type {
  FlexComponent,
  FlexElementType,
  FlexOptions,
  FlexProps,
  FlexType,
} from './Flex.types';

const createFlex = (flexOptions?: FlexOptions): FlexComponent =>
  forwardRef(
    <T extends FlexElementType>(
      _props: FlexProps<T>,
      ref: ComponentPropsWithRef<T>['ref']
    ) => {
      const {
        inline = flexOptions?.inline,
        align = flexOptions?.align,
        justify = flexOptions?.justify,
        direction = flexOptions?.direction,
        wrap = flexOptions?.wrap,
        gap = flexOptions?.gap,
        as = 'div',
        ...props
      } = _props;

      const Component = as;

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

export const Flex = createFlex() as FlexType;
Flex.Center = createFlex({ justify: 'center', align: 'center' });
