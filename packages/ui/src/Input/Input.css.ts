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

  ':disabled, &[readonly]': {
    cursor: 'not-allowed',
  },
});

export const borderInputCss = css({
  boxShadow: 'inset 0 0 0 1px #DFDFDF',

  ':hover:not(:disabled):not([readonly])': {
    boxShadow: 'inset 0 0 0 2px #AAAAAA',
  },

  ':focus:not(:disabled):not([readOnly])': {
    boxShadow: 'inset 0 0 0 2px #121212',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});

export const solidInputCss = css({
  background: '#F5F5F5',

  ':hover:not(:disabled):not([readonly])': {
    background: '#FAFAFA',
  },

  ':focus:not(:disabled):not([readOnly])': {
    background: '#E8E8E8',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});
