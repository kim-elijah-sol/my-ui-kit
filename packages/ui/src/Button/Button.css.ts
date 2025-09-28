import { css } from '@emotion/react';

export const baseButtonCss = css({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  height: '2.5rem',

  appearance: 'none',
  border: 'none',
  outline: 'none',

  borderRadius: '0.5rem',

  cursor: 'pointer',
  transition: '0.15s cubic-bezier(1, 0.5, 0, 0.5)',

  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const primaryButtonCss = css({
  background: '#1C70FF',
  color: '#FFFFFF',

  ':hover:not(:disabled)': {
    background: '#3C90FF',
  },

  ':active:not(:disabled)': {
    background: '#0C50DD',
  },

  ':disabled': {
    border: '1px solid #DFDFDF',
    background: '#F1F1F1',
    color: '#CCCCCC',
  },
});

export const borderButtonCss = css({
  background: '#FFFFFF',
  border: '1px solid #DFDFDF',
  color: 'rgba(0,0,0,0.9)',

  ':hover:not(:disabled)': {
    borderColor: '#1C70FF',
    color: '#1C70FF',
  },

  ':active:not(:disabled)': {
    borderColor: '#0C50DD',
    color: '#0C50DD',
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

export const textButtonCss = css({
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
  color: '#1C70FF',

  ':hover:not(:disabled)': {
    color: '#3C90FF',
  },

  ':active:not(:disabled)': {
    color: '#0C50DD',
  },

  ':disabled': {
    color: '#CCCCCC',
  },
});
