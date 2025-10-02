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

const switchCssClassName = `css-${switchCss.name}`;

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

  [`.${switchCssClassName}[aria-checked='true']:active &::before`]: {
    left: '-0.5rem',
  },

  [`.${switchCssClassName}[aria-checked='false']:active &::before`]: {
    right: '-0.5rem',
  },
});

console.log(switchCss);
