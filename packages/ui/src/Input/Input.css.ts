import { style }           from '@vanilla-extract/css';
import { inputColorStore } from './store/Input.color.store';
import { inputSizeStore }  from './store/input.size.store';
import { CssMap }          from '@ui-kit/utils';
import { InputVariant }    from './Input.types';

export const baseInputClass = style({
  fontSize: inputSizeStore.use('f-s'),

  paddingLeft: inputSizeStore.use('p-x'),
  paddingRight: inputSizeStore.use('p-x'),
  height: inputSizeStore.use('h'),

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: inputSizeStore.use('r'),

  color: '#121212',

  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const borderInputClass = style({
  boxShadow: `inset 0 0 0 1px ${inputColorStore.use('border')}`,

  selectors: {
    '&:hover:not(:disabled)': {
      boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: inputColorStore.use('background-disabled'),
    },
  },
});

export const solidInputClass = style({
  background: inputColorStore.use('background'),

  selectors: {
    '&:hover:not(:disabled)': {
      background: inputColorStore.use('background-hover'),
      boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      background: inputColorStore.use('background-focus'),
      boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: inputColorStore.use('background-disabled'),
    },
  },
});

export const bottomBorderInputClass = style({
  borderRadius: 0,
  boxShadow: `inset 0 -1px 0 0 ${inputColorStore.use('border')}`,

  selectors: {
    '&:hover:not(:disabled)': {
      boxShadow: `inset 0 -2px 0 0 ${inputColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      boxShadow: `inset 0 -2px 0 0 ${inputColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: inputColorStore.use('background-disabled'),
    },
  },
});

export const inputVariantMap: CssMap<InputVariant> = {
  'border': borderInputClass,
  'solid': solidInputClass,
  'bottom-border': bottomBorderInputClass,
};
