import { css } from '@emotion/react';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';

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
    outlineColor: '#121212',
  },

  ':not(:disabled):not(:checked)': {
    ':hover': {
      boxShadow: 'inset 0 0 0 2px #AAAAAA',
    },
    ':active': {
      boxShadow: 'inset 0 0 0 2px #121212',
    },
  },

  ':not(:disabled):checked': {
    boxShadow: 'inset 0 0 0 1px #121212',

    ':hover': {
      boxShadow: 'inset 0 0 0 2px #121212',
    },
  },

  ':disabled:checked': {
    boxShadow: 'inset 0 0 0 1px #6A6A6A',
  },

  ':disabled:not(:checked)': {
    boxShadow: 'inset 0 0 0 1px #EEEEEE',
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
    background: '#121212',
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:disabled:checked + &`]: {
    transform: 'translate(-50%, -50%) scale(1)',
    background: '#6A6A6A',
  },
});
