import { css } from '@emotion/react';
import { createVarStore } from '../_utils/fx';
import type { Prefix } from '../_utils/types';

const textareaColorStore = createVarStore<
  | Prefix<'border', '' | Prefix<'-', 'hover' | 'focus'>>
  | Prefix<'background', '' | Prefix<'-', 'hover' | 'focus' | 'disabled'>>
>('ui-kit-input');

export const textareaBlackColorCss = textareaColorStore.css({
  border: '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  background: '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#E8E8E8',
  'background-disabled': '#F1F1F1',
});

export const textareaBlueColorCss = textareaColorStore.css({
  border: '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  background: '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#E8E8E8',
  'background-disabled': '#F1F1F1',
});

export const baseTextareaCss = css({
  fontSize: '0.875rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',
  padding: '0.75rem',

  borderRadius: '0.5rem',

  color: '#121212',

  transition: ['background', 'box-shadow']
    .map((property) => `${property} 0.15s cubic-bezier(1, 0.5, 0, 0.5)`)
    .join(','),

  ':disabled, &[readonly]': {
    cursor: 'not-allowed',
  },
});

export const borderTextareaCss = css({
  boxShadow: `inset 0 0 0 1px ${textareaColorStore.use('border')}`,

  ':hover:not(:disabled)': {
    boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-hover')}`,
  },

  ':focus:not(:disabled)': {
    boxShadow: `inset 0 0 0 2px ${textareaColorStore.use('border-focus')}`,
  },

  ':disabled, &[readonly]': {
    background: textareaColorStore.use('background-disabled'),
  },
});

export const solidTextareaCss = css({
  background: textareaColorStore.use('background'),

  ':hover:not(:disabled)': {
    background: textareaColorStore.use('background-hover'),
  },

  ':focus:not(:disabled)': {
    background: textareaColorStore.use('background-focus'),
  },

  ':disabled, &[readonly]': {
    background: textareaColorStore.use('background-disabled'),
  },
});

export const bottomBorderTextareaCss = css({
  borderRadius: 0,
  boxShadow: `inset 0 -1px 0 0 ${textareaColorStore.use('border')}`,

  ':hover:not(:disabled)': {
    boxShadow: `inset 0 -2px 0 0 ${textareaColorStore.use('border-hover')}`,
  },

  ':focus:not(:disabled)': {
    boxShadow: `inset 0 -2px 0 0 ${textareaColorStore.use('border-focus')}`,
  },

  ':disabled, &[readonly]': {
    background: textareaColorStore.use('background-disabled'),
  },
});
