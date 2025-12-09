import { style }              from '@vanilla-extract/css';
import { checkboxColorStore } from './store/Checkbox.color.store';

export const checkboxWrapperClass = style({
  position: 'relative',
  display: 'inline-block',

  width: '1.25rem',
  height: '1.25rem',
});

export const checkboxInputClass = style({
  appearance: 'none',
  margin: 0,

  width: '100%',
  height: '100%',
  borderRadius: '6px',

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
      outlineColor: checkboxColorStore.use('checked'),
    },
    '&:not(:disabled):not(:checked):hover': {
      boxShadow: `inset 0 0 0 2px ${checkboxColorStore.use('hover')}`,
    },
    '&:not(:disabled):not(:checked):active': {
      boxShadow: `inset 0 0 0 2px ${checkboxColorStore.use('checked')}`,
    },
    '&:not(:disabled):checked': {
      boxShadow: 'none',
      background: checkboxColorStore.use('checked'),
    },
    '&:not(:disabled):checked:hover': {
      boxShadow: `inset 0 0 0 2px ${checkboxColorStore.use('checked')}`,
    },
    '&:disabled:checked': {
      boxShadow: 'none',
      background: checkboxColorStore.use('disabled-checked'),
    },
    '&:disabled:not(:checked)': {
      boxShadow: `inset 0 0 0 1px ${checkboxColorStore.use('disabled-unchecked')}`,
    },
  },
});

export const checkboxCheckmarkClass = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'calc(60% + 2px)',
  height: 'calc(60% + 2px)',
  pointerEvents: 'none',
});

export const checkboxCheckmarkPathClass = style({
  opacity: 0,

  selectors: {
    [`.${checkboxInputClass}:checked + .${checkboxCheckmarkClass} &`]: {
      opacity: 1,
    },
  },
});
