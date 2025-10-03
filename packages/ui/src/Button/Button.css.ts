import { css } from '@emotion/react';

export const baseButtonCss = css({
  fontSize: '0.875rem',

  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  height: '2.25rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: '0.5rem',

  cursor: 'pointer',
  transition:
    'all 0.15s cubic-bezier(1, 0.5, 0, 0.5), outline-width 0s, outline-offset 0s',

  ':disabled': {
    cursor: 'not-allowed',
  },

  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: '#121212',
  },
});

export const primaryButtonCss = css({
  background: '#121212',
  color: '#FFFFFF',

  ':hover:not(:disabled)': {
    background: '#666666',
  },

  ':active:not(:disabled)': {
    background: '#000000',
  },

  ':disabled': {
    border: '1px solid #DFDFDF',
    background: '#F1F1F1',
    color: '#CCCCCC',
  },
});

export const borderButtonCss = css({
  background: '#FFFFFF',
  border: '1px solid #DFDFDF',
  color: 'rgba(0,0,0,0.9)',

  ':hover:not(:disabled)': {
    borderColor: '#888888',
    background: '#F1F1F1',
  },

  ':active:not(:disabled)': {
    borderColor: '#000000',
    background: '#E1E1E1',
  },

  ':disabled': {
    border: '1px solid #DFDFDF',
    background: '#F1F1F1',
    color: '#CCCCCC',
  },
});

export const dashedButtonCss = css([
  borderButtonCss,
  {
    borderStyle: 'dashed',
  },
]);

export const ghostButtonCss = css({
  background: '#FFFFFF',
  color: 'rgba(0,0,0,0.9)',

  ':hover:not(:disabled)': {
    background: '#E1E1E1',
  },

  ':active:not(:disabled)': {
    background: '#CCCCCC',
  },

  ':disabled': {
    color: '#CCCCCC',
  },
});

export const linkButtonCss = css({
  background: '#FFFFFF',
  color: '#121212',

  ':hover:not(:disabled)': {
    color: '#666666',
  },

  ':active:not(:disabled)': {
    color: '#000000',
  },

  ':disabled': {
    color: '#CCCCCC',
  },
});
