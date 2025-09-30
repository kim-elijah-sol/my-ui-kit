import { css } from '@emotion/react';

export const switchCss = css({
  position: 'relative',
  height: '2.25rem',
  width: '4rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: '1.125rem',

  cursor: 'pointer',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  "&[aria-checked='true']": {
    background: '#121212',

    ':hover': {
      background: '#444444',
    },
  },

  "&[aria-checked='false']": {
    background: '#DFDFDF',

    ':hover': {
      background: '#C1C1C1',
    },
  },
});
