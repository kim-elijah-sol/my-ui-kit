import { css } from '@emotion/react';
import { RADIO_INPUT_BASE_CLASSNAME } from './Radio.constants';

export const radioInputCss = css({
  display: 'none',
});

export const radioCircleCss = css({
  width: '1.25rem',
  height: '1.25rem',
  borderRadius: '50%',

  boxShadow: 'inset 0 0 0 1px #DFDFDF',

  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  cursor: 'pointer',
  position: 'relative',

  '::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    width: '50%',
    height: '50%',
    background: '#DFDFDF',
    transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',
    borderRadius: '50%',
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:disabled + &`]: {
    cursor: 'not-allowed',
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:not(:disabled):not(:checked) + &`]: {
    ':hover': {
      boxShadow: 'inset 0 0 0 2px #AAAAAA',
    },
    ':active': {
      boxShadow: 'inset 0 0 0 2px #121212',
    },
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:not(:disabled):checked + &`]: {
    boxShadow: 'inset 0 0 0 1px #121212',

    ':hover': {
      boxShadow: 'inset 0 0 0 2px #121212',
    },

    '::before': {
      transform: 'translate(-50%, -50%) scale(1)',
      background: '#121212',
    },
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:disabled:checked + &`]: {
    boxShadow: 'inset 0 0 0 1px #6A6A6A',

    '::before': {
      transform: 'translate(-50%, -50%) scale(1)',
      background: '#6A6A6A',
    },
  },

  [`.${RADIO_INPUT_BASE_CLASSNAME}:disabled:not(:checked) + &`]: {
    boxShadow: 'inset 0 0 0 1px #EEEEEE',
  },
});
