import { flexCss } from './Flex.css';
import type { FlexProps } from './Flex.types';

export const Flex = ({
  inline,
  align,
  justify,
  direction,
  wrap,
  gap,
  ...props
}: FlexProps) => {
  return (
    <div
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
};
