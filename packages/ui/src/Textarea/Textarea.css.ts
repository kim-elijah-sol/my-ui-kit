import { css } from '@emotion/react';

export const baseTextareaCss = css({
  fontSize: '0.875rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',
  padding: '0.75rem',

  borderRadius: '0.5rem',

  color: '#121212',

  transition: ['background', 'box-shadow']
    .map((property) => `${property} 0.15s cubic-bezier(1, 0.5, 0, 0.5)`)
    .join(','),

  ':disabled, &[readonly]': {
    cursor: 'not-allowed',
  },
});

export const borderTextareaCss = css({
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

export const solidTextareaCss = css({
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

export const bottomBorderTextareaCss = css({
  borderRadius: 0,
  boxShadow: 'inset 0 -1px 0 0 #DFDFDF',

  ':hover:not(:disabled):not([readonly])': {
    boxShadow: 'inset 0 -2px 0 0 #AAAAAA',
  },

  ':focus:not(:disabled):not([readOnly])': {
    boxShadow: 'inset 0 -2px 0 0 #121212',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});
