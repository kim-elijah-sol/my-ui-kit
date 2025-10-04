import { css } from '@emotion/react';
import { switchCssClassName } from '../Switch.css';

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

  [`.${switchCssClassName}:not(:disabled):hover ~ &`]: switchLabelHoverCss,

  [`&:has(~ .${switchCssClassName}:not(:disabled):hover)`]: switchLabelHoverCss,

  [`.${switchCssClassName}:not(:disabled):active ~ &`]: switchLabelActiveCss,

  [`&:has(~ .${switchCssClassName}:not(:disabled):active)`]:
    switchLabelActiveCss,

  [`.${switchCssClassName}:disabled ~ &`]: switchLabelDisabledCss,

  [`&:has(~ .${switchCssClassName}:disabled)`]: switchLabelDisabledCss,
});
