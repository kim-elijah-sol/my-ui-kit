import { css } from '@emotion/react';
import { SWITCH_BASE_CLASSNAME } from './Switch.constants';

export const switchCss = css({
  '--s-h': '2.25rem',
  '--s-w': '4rem',

  position: 'relative',
  height: 'var(--s-h)',
  width: 'var(--s-w)',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: 'calc(var(--s-h) / 2)',

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

export const switchHandleCss = css({
  '--s-h-s': 'calc(var(--s-h) - 0.5rem)',

  position: 'absolute',
  top: '0.25rem',
  height: 'var(--s-h-s)',
  width: 'var(--s-h-s)',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  [`.${SWITCH_BASE_CLASSNAME}[aria-checked='true'] &`]: {
    left: 'calc(var(--s-w) - calc(var(--s-h-s) + 0.25rem))',
  },

  [`.${SWITCH_BASE_CLASSNAME}[aria-checked='false'] &`]: {
    left: '0.25rem',
  },

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '#FFFFFF',
    borderRadius: 'calc(var(--s-h-s) / 2)',
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  },

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled)[aria-checked='true']:active &::before`]:
    {
      left: 'calc(calc(var(--s-h-s) / 3.5) * -1)',
    },

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled)[aria-checked='false']:active &::before`]:
    {
      right: 'calc(calc(var(--s-h-s) / 3.5) * -1)',
    },
});
