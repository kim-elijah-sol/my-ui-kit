import { css } from '@emotion/react';
import { gapCss } from '../gap';
import { FlexOptions } from './Flex.types';

export const flexCss = (flexOptions?: FlexOptions) =>
  css([
    {
      display: flexOptions?.inline ? 'inline-flex' : 'flex',
      alignItems: flexOptions?.align,
      justifyContent: flexOptions?.justify,
      flexWrap:
        flexOptions?.wrap === true ? 'wrap' : flexOptions?.wrap || undefined,
      flexDirection: flexOptions?.direction,
    },
    gapCss(flexOptions?.gap),
  ]);
