import { css } from '@emotion/react';
import { resolveGap } from './gap.lib';
import { GapType } from './gap.types';

export const gapCss = (gap: GapType) =>
  css({
    gap: resolveGap(gap),
  });
