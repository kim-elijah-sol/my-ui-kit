import { style }          from '@vanilla-extract/css';
import { createVarStore } from '../_utils/fx/createVarStore';
import type { Prefix }    from '../_utils/types';

const switchSizeStore = createVarStore<'s-h' | 's-w'>();

export const switchSmallSizeClass = switchSizeStore.style({
  's-h': '1.5rem',
  's-w': '2.625rem',
});

export const switchMediumSizeClass = switchSizeStore.style({
  's-h': '2rem',
  's-w': '3.5rem',
});

export const switchLargeSizeClass = switchSizeStore.style({
  's-h': '2.5rem',
  's-w': '4.375rem',
});

const switchHandleSizeStore = createVarStore<'s-h-s'>();

export const switchHandleDefaultSizeClass = switchHandleSizeStore.style({
  's-h-s': `calc(${switchSizeStore.use('s-h')} - 0.5rem)`,
});

type SwitchColorProperties
  = | Prefix<'background', '' | '-hover' | '-disabled'>
    | 'outline-focus';

const switchColorStore = createVarStore<
  | Prefix<'checked-', SwitchColorProperties>
  | Prefix<'unchecked-', SwitchColorProperties>
>('ui-kit-switch');

export const switchBlackColorClass = switchColorStore.style({
  'checked-background': '#121212',
  'checked-background-hover': '#444444',
  'checked-outline-focus': '#121212',
  'checked-background-disabled': '#6A6A66',

  'unchecked-background': '#DFDFDF',
  'unchecked-background-hover': '#C1C1C1',
  'unchecked-outline-focus': '#DFDFDF',
  'unchecked-background-disabled': '#EEEEEE',
});

export const switchBlueColorClass = switchColorStore.style({
  'checked-background': '#006AFF',
  'checked-background-hover': '#70ACFF',
  'checked-outline-focus': '#006AFF',
  'checked-background-disabled': '#A0CFFF',

  'unchecked-background': '#DFDFDF',
  'unchecked-background-hover': '#C1C1C1',
  'unchecked-outline-focus': '#DFDFDF',
  'unchecked-background-disabled': '#EEEEEE',
});

export const switchClass = style({
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

  selectors: {
    '&[aria-checked="true"]': {
      background: switchColorStore.use('checked-background'),
      outlineColor: switchColorStore.use('checked-outline-focus'),
    },
    '&[aria-checked="true"]:not(:disabled):hover': {
      background: switchColorStore.use('checked-background-hover'),
    },
    '&[aria-checked="true"]:disabled': {
      background: switchColorStore.use('checked-background-disabled'),
    },
    '&[aria-checked="false"]': {
      background: switchColorStore.use('unchecked-background'),
      outlineColor: switchColorStore.use('unchecked-outline-focus'),
    },
    '&[aria-checked="false"]:not(:disabled):hover': {
      background: switchColorStore.use('unchecked-background-hover'),
    },
    '&[aria-checked="false"]:disabled': {
      background: switchColorStore.use('unchecked-background-disabled'),
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineOffset: '2px',
    },
  },
});

export const switchHandleClass = style({
  'position': 'absolute',
  'top': '0.25rem',
  'height': switchHandleSizeStore.use('s-h-s'),
  'width': switchHandleSizeStore.use('s-h-s'),
  'transition': '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  'pointerEvents': 'none',

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '#FFFFFF',
    borderRadius: `calc(${switchHandleSizeStore.use('s-h-s')} / 2)`,
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  },

  'selectors': {
    [`.${switchClass}[aria-checked="true"] &`]: {
      left: `calc(${switchSizeStore.use(
        's-w',
      )} - calc(${switchHandleSizeStore.use('s-h-s')} + 0.25rem))`,
    },
    [`.${switchClass}[aria-checked="false"] &`]: {
      left: '0.25rem',
    },
    [`.${switchClass}:not(:disabled)[aria-checked="true"]:active &::before`]:
      {
        left: `calc(calc(${switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
      },
    [`.${switchClass}:not(:disabled)[aria-checked="false"]:active &::before`]:
      {
        right: `calc(calc(${switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
      },
  },
});
