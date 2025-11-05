import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx';
import type { Prefix } from '../_utils/types';

const inputSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>();

export const inputSmallSizeCss = inputSizeStore.css({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  h: '1.75rem',
  r: '0.35rem',
});

export const inputMediumSizeCss = inputSizeStore.css({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  h: '2.25rem',
  r: '0.5rem',
});

export const inputLargeSizeCss = inputSizeStore.css({
  'f-s': '1rem',
  'p-x': '0.75rem',
  h: '2.5rem',
  r: '0.5rem',
});

const inputColorStore = createVarStore<
  | Prefix<'border', '' | Prefix<'-', 'hover' | 'focus'>>
  | Prefix<'background', '' | Prefix<'-', 'hover' | 'focus' | 'disabled'>>
>('ui-kit-input');

export const inputBlackColorCss = inputColorStore.css({
  border: '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  background: '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

export const inputBlueColorCss = inputColorStore.css({
  border: '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  background: '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

export const baseInputCss = css({
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

  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const borderInputCss = css({
  boxShadow: `inset 0 0 0 1px ${inputColorStore.use('border')}`,

  ':hover:not(:disabled)': {
    boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-hover')}`,
  },

  ':focus:not(:disabled)': {
    boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-focus')}`,
  },

  ':disabled, &[readonly]': {
    background: inputColorStore.use('background-disabled'),
  },
});

export const solidInputCss = css({
  background: inputColorStore.use('background'),

  ':hover:not(:disabled)': {
    background: inputColorStore.use('background-hover'),
    boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-hover')}`,
  },

  ':focus:not(:disabled)': {
    background: inputColorStore.use('background-focus'),
    boxShadow: `inset 0 0 0 2px ${inputColorStore.use('border-focus')}`,
  },

  ':disabled, &[readonly]': {
    background: inputColorStore.use('background-disabled'),
  },
});

export const bottomBorderInputCss = css({
  borderRadius: 0,
  boxShadow: `inset 0 -1px 0 0 ${inputColorStore.use('border')}`,

  ':hover:not(:disabled)': {
    boxShadow: `inset 0 -2px 0 0 ${inputColorStore.use('border-hover')}`,
  },

  ':focus:not(:disabled)': {
    boxShadow: `inset 0 -2px 0 0 ${inputColorStore.use('border-focus')}`,
  },

  ':disabled, &[readonly]': {
    background: inputColorStore.use('background-disabled'),
  },
});
