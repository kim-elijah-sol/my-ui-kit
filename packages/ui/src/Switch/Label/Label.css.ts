import { css }                   from '@emotion/react';
import { SWITCH_BASE_CLASSNAME } from '../Switch.constants';

const switchLabelHoverCss = css({
  color: '#444444',
});

const switchLabelActiveCss = css({
  color: '#000000',
});

const switchLabelDisabledCss = css({
  cursor: 'not-allowed',
  color: '#6A6A6A',
});

export const switchLabelCss = css({
  cursor: 'pointer',
  color: '#121212',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled):hover ~ &`]: switchLabelHoverCss,

  [`&:has(~ .${SWITCH_BASE_CLASSNAME}:not(:disabled):hover)`]:
    switchLabelHoverCss,

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled):active ~ &`]: switchLabelActiveCss,

  [`&:has(~ .${SWITCH_BASE_CLASSNAME}:not(:disabled):active)`]:
    switchLabelActiveCss,

  [`.${SWITCH_BASE_CLASSNAME}:disabled ~ &`]: switchLabelDisabledCss,

  [`&:has(~ .${SWITCH_BASE_CLASSNAME}:disabled)`]: switchLabelDisabledCss,
});
