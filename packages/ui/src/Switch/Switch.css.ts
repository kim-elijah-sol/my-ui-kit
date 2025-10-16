import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx/createVarStore';
import { SWITCH_BASE_CLASSNAME } from './Switch.constants';

const switchSizeStore = createVarStore<'s-h' | 's-w'>();

export const switchDefaultSizeCss = switchSizeStore.css({
  's-h': '2rem',
  's-w': '3.5rem',
});

const switchHandleSizeStore = createVarStore<'s-h-s'>();

export const switchHandleDefaultSizeCss = switchHandleSizeStore.css({
  's-h-s': `calc(${switchSizeStore.use('s-h')} - 0.5rem)`,
});

export const switchCss = css({
  position: 'relative',
  height: switchSizeStore.use('s-h'),
  width: switchSizeStore.use('s-w'),

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: `calc(${switchSizeStore.use('s-h')} / 2)`,

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
  position: 'absolute',
  top: '0.25rem',
  height: switchHandleSizeStore.use('s-h-s'),
  width: switchHandleSizeStore.use('s-h-s'),
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  [`.${SWITCH_BASE_CLASSNAME}[aria-checked='true'] &`]: {
    left: `calc(${switchSizeStore.use(
      's-w'
    )} - calc(${switchHandleSizeStore.use('s-h-s')} + 0.25rem))`,
  },

  [`.${SWITCH_BASE_CLASSNAME}[aria-checked='false'] &`]: {
    left: '0.25rem',
  },

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '#FFFFFF',
    borderRadius: `calc(${switchHandleSizeStore.use('s-h-s')} / 2)`,
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  },

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled)[aria-checked='true']:active &::before`]:
    {
      left: `calc(calc(${switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
    },

  [`.${SWITCH_BASE_CLASSNAME}:not(:disabled)[aria-checked='false']:active &::before`]:
    {
      right: `calc(calc(${switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
    },
});
