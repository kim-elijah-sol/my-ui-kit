import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx';

const inputSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>();

export const inputMediumSizeCss = inputSizeStore.css({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  h: '2.25rem',
  r: '0.5rem',
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
  boxShadow: 'inset 0 0 0 1px #DFDFDF',

  ':hover:not(:disabled)': {
    boxShadow: 'inset 0 0 0 2px #AAAAAA',
  },

  ':focus:not(:disabled)': {
    boxShadow: 'inset 0 0 0 2px #121212',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});

export const solidInputCss = css({
  background: '#F5F5F5',

  ':hover:not(:disabled)': {
    background: '#FAFAFA',
  },

  ':focus:not(:disabled)': {
    background: '#E8E8E8',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});

export const bottomBorderInputCss = css({
  borderRadius: 0,
  boxShadow: 'inset 0 -1px 0 0 #DFDFDF',

  ':hover:not(:disabled)': {
    boxShadow: 'inset 0 -2px 0 0 #AAAAAA',
  },

  ':focus:not(:disabled)': {
    boxShadow: 'inset 0 -2px 0 0 #121212',
  },

  ':disabled, &[readonly]': {
    background: '#F1F1F1',
  },
});
