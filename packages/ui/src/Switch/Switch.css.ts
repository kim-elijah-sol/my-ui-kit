import { style }            from '@vanilla-extract/css';
import * as switchSizeStore from './store/Switch.size.store';
import { switchColorStore } from './store/Switch.color.store';

export const switchClass = style({
  position: 'relative',
  height: switchSizeStore.switchSizeStore.use('s-h'),
  width: switchSizeStore.switchSizeStore.use('s-w'),

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: `calc(${switchSizeStore.switchSizeStore.use('s-h')} / 2)`,

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
  'height': switchSizeStore.switchHandleSizeStore.use('s-h-s'),
  'width': switchSizeStore.switchHandleSizeStore.use('s-h-s'),
  'transition': '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  'pointerEvents': 'none',

  '::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: '#FFFFFF',
    borderRadius: `calc(${switchSizeStore.switchHandleSizeStore.use('s-h-s')} / 2)`,
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  },

  'selectors': {
    [`.${switchClass}[aria-checked="true"] &`]: {
      left: `calc(${switchSizeStore.switchSizeStore.use(
        's-w',
      )} - calc(${switchSizeStore.switchHandleSizeStore.use('s-h-s')} + 0.25rem))`,
    },
    [`.${switchClass}[aria-checked="false"] &`]: {
      left: '0.25rem',
    },
    [`.${switchClass}:not(:disabled)[aria-checked="true"]:active &::before`]:
      {
        left: `calc(calc(${switchSizeStore.switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
      },
    [`.${switchClass}:not(:disabled)[aria-checked="false"]:active &::before`]:
      {
        right: `calc(calc(${switchSizeStore.switchHandleSizeStore.use('s-h-s')} / 3.5) * -1)`,
      },
  },
});
