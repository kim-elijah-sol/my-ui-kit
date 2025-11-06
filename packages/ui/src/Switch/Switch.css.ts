import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx/createVarStore';
import { SWITCH_BASE_CLASSNAME } from './Switch.constants';
import type { Prefix } from '../_utils/types';

const switchSizeStore = createVarStore<'s-h' | 's-w'>();

export const switchSmallSizeCss = switchSizeStore.css({
  's-h': '1.5rem',
  's-w': '2.625rem',
});

export const switchMediumSizeCss = switchSizeStore.css({
  's-h': '2rem',
  's-w': '3.5rem',
});

export const switchLargeSizeCss = switchSizeStore.css({
  's-h': '2.5rem',
  's-w': '4.375rem',
});

const switchHandleSizeStore = createVarStore<'s-h-s'>();

export const switchHandleDefaultSizeCss = switchHandleSizeStore.css({
  's-h-s': `calc(${switchSizeStore.use('s-h')} - 0.5rem)`,
});

type SwitchColorProperties = Prefix<'background' , '' | '-hover' | '-disabled'> | 'outline-focus'

const switchColorStore = createVarStore<
  | Prefix<'checked-', SwitchColorProperties>
  | Prefix<'unchecked-', SwitchColorProperties>
>('ui-kit-switch');

export const switchBlackColorCss = switchColorStore.css({
  'checked-background': '#121212',
  'checked-background-hover': '#444444',
  'checked-outline-focus': '#121212',
  'checked-background-disabled': '#6A6A66',

  'unchecked-background': '#DFDFDF',
  'unchecked-background-hover': '#C1C1C1',
  'unchecked-outline-focus': '#DFDFDF',
  'unchecked-background-disabled': '#EEEEEE',
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
    background: switchColorStore.use('checked-background'),
    outlineColor: switchColorStore.use('checked-outline-focus'),

    ':not(:disabled):hover': {
      background: switchColorStore.use('checked-background-hover'),
    },

    ':disabled': {
      background: switchColorStore.use('checked-background-disabled'),
    },
  },

  "&[aria-checked='false']": {
    background: switchColorStore.use('unchecked-background'),
    outlineColor: switchColorStore.use('unchecked-outline-focus'),

    ':not(:disabled):hover': {
      background: switchColorStore.use('unchecked-background-hover'),
    },

    ':disabled': {
      background: switchColorStore.use('unchecked-background-disabled'),
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
