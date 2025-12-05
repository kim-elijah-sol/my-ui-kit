import { style }                  from '@vanilla-extract/css';
import { createVarStore, Prefix } from '@ui-kit/utils';

const buttonSizeStore = createVarStore<'f-s' | 'p-x' | 'h' | 'r'>(
  'button-size',
);

export const buttonSmallSizeClass = buttonSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  'h': '1.75rem',
  'r': '0.35rem',
});

export const buttonMediumSizeClass = buttonSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  'h': '2.25rem',
  'r': '0.5rem',
});

export const buttonLargeSizeClass = buttonSizeStore.style({
  'f-s': '1rem',
  'p-x': '0.75rem',
  'h': '2.5rem',
  'r': '0.5rem',
});

const baseButtonColorStore = createVarStore<'outline'>('base-button');

const baseButtonBlackColorClass = baseButtonColorStore.style({
  outline: '#121212',
});

const primaryColorStore = createVarStore<
  | 'bg'
  | 'color'
  | 'hover'
  | 'active'
  | Prefix<'disabled-', 'bg' | 'color' | 'border'>
>('primary-button');

const primaryBlackColorClass = primaryColorStore.style({
  'bg': '#121212',
  'color': '#FFFFFF',
  'hover': '#666666',
  'active': '#000000',
  'disabled-bg': '#F1F1F1',
  'disabled-color': '#CCCCCC',
  'disabled-border': '#DFDFDF',
});

const borderColorStore = createVarStore<
  'border' | 'hover-border' | 'active-border' | Prefix<'disabled-', 'border'>
>('border-button');

const borderBlackColorClass = borderColorStore.style({
  'border': '#DFDFDF',
  'hover-border': '#888888',
  'active-border': '#000000',
  'disabled-border': '#DFDFDF',
});

const ghostColorStore = createVarStore<'hover' | 'active'>('ghost-button');

const ghostBlackColorClass = ghostColorStore.style({
  hover: '#E1E1E1',
  active: '#CCCCCC',
});

const linkColorStore = createVarStore<
  'color' | 'hover' | 'active' | 'disabled'
>('link-button');

const linkBlackColorClass = linkColorStore.style({
  color: '#121212',
  hover: '#666666',
  active: '#000000',
  disabled: '#CCCCCC',
});

export const buttonBlackColorClass = [
  baseButtonBlackColorClass,
  primaryBlackColorClass,
  borderBlackColorClass,
  ghostBlackColorClass,
  linkBlackColorClass,
].join(' ');

export const baseButtonClass = style({
  fontSize: buttonSizeStore.use('f-s'),

  paddingLeft: buttonSizeStore.use('p-x'),
  paddingRight: buttonSizeStore.use('p-x'),
  height: buttonSizeStore.use('h'),

  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: buttonSizeStore.use('r'),

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
      outlineColor: baseButtonColorStore.use('outline'),
    },
  },
});

export const primaryButtonClass = style({
  background: primaryColorStore.use('bg'),
  color: primaryColorStore.use('color'),

  selectors: {
    '&:hover:not(:disabled)': {
      background: primaryColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      background: primaryColorStore.use('active'),
    },
    '&:disabled': {
      border: `1px solid ${primaryColorStore.use('disabled-border')}`,
      background: primaryColorStore.use('disabled-bg'),
      color: primaryColorStore.use('disabled-color'),
    },
  },
});

export const borderButtonClass = style({
  background: '#FFFFFF',
  border: `1px solid ${borderColorStore.use('border')}`,
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: borderColorStore.use('hover-border'),
      background: '#F1F1F1',
    },
    '&:active:not(:disabled)': {
      borderColor: borderColorStore.use('active-border'),
      background: '#E1E1E1',
    },
    '&:disabled': {
      border: `1px solid ${borderColorStore.use('disabled-border')}`,
      background: '#F1F1F1',
      color: '#CCCCCC',
    },
  },
});

export const dashedButtonClass = style({
  background: '#FFFFFF',
  border: `1px dashed ${borderColorStore.use('border')}`,
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: borderColorStore.use('hover-border'),
      background: '#F1F1F1',
    },
    '&:active:not(:disabled)': {
      borderColor: borderColorStore.use('active-border'),
      background: '#E1E1E1',
    },
    '&:disabled': {
      border: `1px dashed ${borderColorStore.use('disabled-border')}`,
      background: '#F1F1F1',
      color: '#CCCCCC',
    },
  },
});

export const ghostButtonClass = style({
  background: '#FFFFFF',
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      background: ghostColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      background: ghostColorStore.use('active'),
    },
    '&:disabled': {
      color: '#CCCCCC',
    },
  },
});

export const linkButtonClass = style({
  background: '#FFFFFF',
  color: linkColorStore.use('color'),

  selectors: {
    '&:hover:not(:disabled)': {
      color: linkColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      color: linkColorStore.use('active'),
    },
    '&:disabled': {
      color: linkColorStore.use('disabled'),
    },
  },
});
