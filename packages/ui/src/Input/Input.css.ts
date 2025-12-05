import { style }                        from '@vanilla-extract/css';
import { createVarStore, type Prefix } from '@ui-kit/utils';

const inputSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>();

export const inputSmallSizeClass = inputSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  'h': '1.75rem',
  'r': '0.35rem',
});

export const inputMediumSizeClass = inputSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  'h': '2.25rem',
  'r': '0.5rem',
});

export const inputLargeSizeClass = inputSizeStore.style({
  'f-s': '1rem',
  'p-x': '0.75rem',
  'h': '2.5rem',
  'r': '0.5rem',
});

const inputColorStore = createVarStore<
  | Prefix<'border', '' | Prefix<'-', 'hover' | 'focus'>>
  | Prefix<'background', '' | Prefix<'-', 'hover' | 'focus' | 'disabled'>>
>('ui-kit-input');

export const inputBlackColorClass = inputColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

export const inputBlueColorClass = inputColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

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
