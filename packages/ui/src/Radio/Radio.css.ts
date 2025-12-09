import { style }           from '@vanilla-extract/css';
import { radioColorStore } from './store/Radio.color.store';

export const radioWrapperClass = style({
  position: 'relative',
  display: 'inline-block',

  width: '1.25rem',
  height: '1.25rem',
});

export const radioInputClass = style({
  appearance: 'none',
  margin: 0,

  width: '100%',
  height: '100%',
  borderRadius: '50%',

  boxShadow: 'inset 0 0 0 1px #CCCCCC',

  cursor: 'pointer',
  transition:
    'all 0.15s cubic-bezier(1, 0.5, 0, 0.5), outline-width 0s, outline-offset 0s',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineOffset: '2px',
      outlineColor: radioColorStore.use('checked'),
    },
    '&:not(:disabled):not(:checked):hover': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('hover')}`,
    },
    '&:not(:disabled):not(:checked):active': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('checked')}`,
    },
    '&:not(:disabled):checked': {
      boxShadow: `inset 0 0 0 1px ${radioColorStore.use('checked')}`,
    },
    '&:not(:disabled):checked:hover': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('checked')}`,
    },
    '&:disabled:checked': {
      boxShadow: `inset 0 0 0 1px ${radioColorStore.use('disabled-checked')}`,
    },
    '&:disabled:not(:checked)': {
      boxShadow: `inset 0 0 0 1px ${radioColorStore.use('disabled-unchecked')}`,
    },
  },
});

export const radioInnerCircleClass = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  width: '50%',
  height: '50%',
  background: '#CCCCCC',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  borderRadius: '50%',
  pointerEvents: 'none',

  selectors: {
    [`.${radioInputClass}:not(:disabled):checked + &`]: {
      transform: 'translate(-50%, -50%) scale(1)',
      background: radioColorStore.use('checked'),
    },
    [`.${radioInputClass}:disabled:checked + &`]: {
      transform: 'translate(-50%, -50%) scale(1)',
      background: radioColorStore.use('disabled-checked'),
    },
  },
});
