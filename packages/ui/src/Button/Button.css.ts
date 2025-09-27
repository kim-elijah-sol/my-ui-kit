import { css } from '@emotion/react';

export const buttonCss = css({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  height: '2.5rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: '0.5rem',

  cursor: 'pointer',
  transition: '0.21s cubic-bezier(1, 0.5, 0, 0.5)',
});

export const defaultButtonCss = css([
  buttonCss,
  {
    background: '#1C70FF',
    color: '#FFFFFF',

    ':hover': {
      background: '#3C90FF',
    },

    ':active': {
      background: '#0C50DD',
    },
  },
]);
