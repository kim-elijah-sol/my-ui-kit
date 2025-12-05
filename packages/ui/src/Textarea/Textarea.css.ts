import { CssMap }             from '@ui-kit/utils';
import { style }              from '@vanilla-extract/css';
import { TextareaVariant }    from './Textarea.types';
import { textareaColorStore } from './store/Textarea.color.store';

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

const borderTextareaClass = style({
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
const solidTextareaClass = style({
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
const bottomBorderTextareaClass = style({
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
export const textareaVariantMap: CssMap<TextareaVariant> = {
  'border': borderTextareaClass,
  'solid': solidTextareaClass,
  'bottom-border': bottomBorderTextareaClass,
};
