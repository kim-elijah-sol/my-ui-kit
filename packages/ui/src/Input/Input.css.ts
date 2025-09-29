import { css } from '@emotion/react';

export const baseInputCss = css({
  fontSize: '0.875rem',

  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  height: '2.25rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: '0.5rem',

  color: '#121212',

  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
});

export const borderInputCss = css({
  boxShadow: 'inset 0 0 0 1px #DFDFDF',

  ':hover:not(:disabled)': {
    boxShadow: 'inset 0 0 0 2px #AAAAAA',
  },

  ':focus:not(:disabled)': {
    boxShadow: 'inset 0 0 0 2px #121212',
  },
});
