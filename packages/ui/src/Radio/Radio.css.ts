import { css } from '@emotion/react';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';
import { createVarStore } from '../_utils/fx';

const radioColorStore = createVarStore<'hover' | 'checked' | 'disabled-checked' | 'disabled-unchecked'>()

export const radioBlackColorCss = radioColorStore.css({
  hover: '#AAAAAA',
  checked: '#121212',
  'disabled-checked': '#6A6A6A',
  'disabled-unchecked': '#EEEEEE',
})

export const radioBlueColorCss = radioColorStore.css({
  hover: '#70ACFF',
  checked: '#006AFF',
  'disabled-checked': '#6A6A6A',
  'disabled-unchecked': '#EEEEEE',
})

export const radioWrapperCss = css({
  position: 'relative',
  display: 'inline-block',

  width: '1.25rem',
  height: '1.25rem',
});

export const radioInputCss = css({
  appearance: 'none',

  width: '100%',
  height: '100%',
  borderRadius: '50%',

  boxShadow: 'inset 0 0 0 1px #CCCCCC',

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
    outlineColor: radioColorStore.use('checked'),
  },

  ':not(:disabled):not(:checked)': {
    ':hover': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('hover')}`,
    },
    ':active': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('checked')}`,
    },
  },

  ':not(:disabled):checked': {
    boxShadow: `inset 0 0 0 1px ${radioColorStore.use('checked')}`,

    ':hover': {
      boxShadow: `inset 0 0 0 2px ${radioColorStore.use('checked')}`,
    },
  },

  ':disabled:checked': {
    boxShadow: `inset 0 0 0 1px ${radioColorStore.use('disabled-checked')}`,
  },

  ':disabled:not(:checked)': {
    boxShadow: `inset 0 0 0 1px ${radioColorStore.use('disabled-unchecked')}`,
  },
});

export const radioInnerCircleCss = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  width: '50%',
  height: '50%',
  background: '#CCCCCC',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
  borderRadius: '50%',

  [`.${RADIO_INPUT_BASE_CLASSNAME}:not(:disabled):checked + &`]: {
    transform: 'translate(-50%, -50%) scale(1)',
    background: radioColorStore.use('checked'),
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:disabled:checked + &`]: {
    transform: 'translate(-50%, -50%) scale(1)',
    background: radioColorStore.use('disabled-checked'),
  },
});
