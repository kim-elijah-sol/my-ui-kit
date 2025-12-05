import { style }                        from '@vanilla-extract/css';
import { createVarStore, type Prefix } from '@ui-kit/utils';

const textareaColorStore = createVarStore<
  | Prefix<'border', '' | Prefix<'-', 'hover' | 'focus'>>
  | Prefix<'background', '' | Prefix<'-', 'hover' | 'focus' | 'disabled'>>
>('ui-kit-input');

export const textareaBlackColorClass = textareaColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

export const textareaBlueColorClass = textareaColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});

export const baseTextareaClass = style({
  fontSize: '0.875rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',
  padding: '0.75rem',

  borderRadius: '0.5rem',

  color: '#121212',

  transition: ['background', 'box-shadow']
    .map(property => `${property} 0.15s cubic-bezier(1, 0.5, 0, 0.5)`)
    .join(','),

  selectors: {
    '&:disabled, &[readonly]': {
      cursor: 'not-allowed',
    },
  },
});

export const borderTextareaClass = style({
  boxShadow: `inset 0 0 0 1px ${textareaColorStore.use('border')}`,

  selectors: {
    '&:hover:not(:disabled)': {
      boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: textareaColorStore.use('background-disabled'),
    },
  },
});

export const solidTextareaClass = style({
  background: textareaColorStore.use('background'),

  selectors: {
    '&:hover:not(:disabled)': {
      background: textareaColorStore.use('background-hover'),
      boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      background: textareaColorStore.use('background-focus'),
      boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: textareaColorStore.use('background-disabled'),
    },
  },
});

export const bottomBorderTextareaClass = style({
  borderRadius: 0,
  boxShadow: `inset 0 -1px 0 0 ${textareaColorStore.use('border')}`,

  selectors: {
    '&:hover:not(:disabled)': {
      boxShadow: `inset 0 -2px 0 0 ${textareaColorStore.use('border-hover')}`,
    },
    '&:focus:not(:disabled)': {
      boxShadow: `inset 0 -2px 0 0 ${textareaColorStore.use('border-focus')}`,
    },
    '&:disabled, &[readonly]': {
      background: textareaColorStore.use('background-disabled'),
    },
  },
});
