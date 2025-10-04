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
  transition:
    'all 0.15s cubic-bezier(1, 0.5, 0, 0.5), outline-width 0s, outline-offset 0s',

  "&[aria-checked='true']": {
    background: '#121212',
    outlineColor: '#121212',

    ':not(:disabled):hover': {
      background: '#444444',
    },

    ':disabled': {
      background: '#6A6A6A',
    },
  },

  "&[aria-checked='false']": {
    background: '#DFDFDF',
    outlineColor: '#DFDFDF',

    ':not(:disabled):hover': {
      background: '#C1C1C1',
    },

    ':disabled': {
      background: '#EEEEEE',
    },
  },

  ':disabled': {
    cursor: 'not-allowed',
  },

  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
  },
});

export const switchCssClassName = `css-${switchCss.name}`;

export const switchHandleCss = css({
  position: 'absolute',
  top: '0.25rem',
  height: '1.75rem',
  width: '1.75rem',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  [`.${switchCssClassName}[aria-checked='true'] &`]: {
    left: '2rem',
  },

  [`.${switchCssClassName}[aria-checked='false'] &`]: {
    left: '0.25rem',
  },

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '#FFFFFF',
    borderRadius: '0.875rem',
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  },

  [`.${switchCssClassName}:not(:disabled)[aria-checked='true']:active &::before`]:
    {
      left: '-0.5rem',
    },

  [`.${switchCssClassName}:not(:disabled)[aria-checked='false']:active &::before`]:
    {
      right: '-0.5rem',
    },
});
