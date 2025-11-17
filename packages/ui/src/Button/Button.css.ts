import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx';
import { Prefix } from '../_utils/types';

const buttonSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>();

export const buttonSmallSizeCss = buttonSizeStore.css({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  h: '1.75rem',
  r: '0.35rem',
});

export const buttonMediumSizeCss = buttonSizeStore.css({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  h: '2.25rem',
  r: '0.5rem',
});

export const buttonLargeSizeCss = buttonSizeStore.css({
  'f-s': '1rem',
  'p-x': '0.75rem',
  h: '2.5rem',
  r: '0.5rem',
});

const baseButtonColorStore = createVarStore<'outline'>();

const baseButtonBlackColorCss = baseButtonColorStore.css({
  outline: '#121212',
});

const primaryColorStore = createVarStore<
  | 'bg'
  | 'color'
  | 'hover'
  | 'active'
  | Prefix<'disabled-', 'bg' | 'color' | 'border'>
>();

const primaryBlackColorCss = primaryColorStore.css({
  bg: '#121212',
  color: '#FFFFFF',
  hover: '#666666',
  active: '#000000',
  'disabled-bg': '#F1F1F1',
  'disabled-color': '#CCCCCC',
  'disabled-border': '#DFDFDF',
});

export const buttonBlackColorCss = [
  baseButtonBlackColorCss,
  primaryBlackColorCss,
];

export const baseButtonCss = css({
  fontSize: buttonSizeStore.use('f-s'),

  paddingLeft: buttonSizeStore.use('p-x'),
  paddingRight: buttonSizeStore.use('p-x'),
  height: buttonSizeStore.use('h'),

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: buttonSizeStore.use('r'),

  cursor: 'pointer',
  transition:
    'all 0.15s cubic-bezier(1, 0.5, 0, 0.5), outline-width 0s, outline-offset 0s',

  ':disabled': {
    cursor: 'not-allowed',
  },

  ':focus-visible': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    outlineColor: baseButtonColorStore.use('outline'),
  },
});

export const primaryButtonCss = css({
  background: primaryColorStore.use('bg'),
  color: primaryColorStore.use('color'),

  ':hover:not(:disabled)': {
    background: primaryColorStore.use('hover'),
  },

  ':active:not(:disabled)': {
    background: primaryColorStore.use('active'),
  },

  ':disabled': {
    border: `1px solid ${primaryColorStore.use('disabled-border')}`,
    background: primaryColorStore.use('disabled-bg'),
    color: primaryColorStore.use('disabled-color'),
  },
});

export const borderButtonCss = css({
  background: '#FFFFFF',
  border: '1px solid #DFDFDF',
  color: 'rgba(0,0,0,0.9)',

  ':hover:not(:disabled)': {
    borderColor: '#888888',
    background: '#F1F1F1',
  },

  ':active:not(:disabled)': {
    borderColor: '#000000',
    background: '#E1E1E1',
  },

  ':disabled': {
    border: '1px solid #DFDFDF',
    background: '#F1F1F1',
    color: '#CCCCCC',
  },
});

export const dashedButtonCss = css([
  borderButtonCss,
  {
    borderStyle: 'dashed',
  },
]);

export const ghostButtonCss = css({
  background: '#FFFFFF',
  color: 'rgba(0,0,0,0.9)',

  ':hover:not(:disabled)': {
    background: '#E1E1E1',
  },

  ':active:not(:disabled)': {
    background: '#CCCCCC',
  },

  ':disabled': {
    color: '#CCCCCC',
  },
});

export const linkButtonCss = css({
  background: '#FFFFFF',
  color: '#121212',

  ':hover:not(:disabled)': {
    color: '#666666',
  },

  ':active:not(:disabled)': {
    color: '#000000',
  },

  ':disabled': {
    color: '#CCCCCC',
  },
});
