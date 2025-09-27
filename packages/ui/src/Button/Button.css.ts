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
});

export const primaryButtonCss = css({
  background: '#1C70FF',
  color: '#FFFFFF',

  ':hover': {
    background: '#3C90FF',
  },

  ':active': {
    background: '#0C50DD',
  },
});

export const borderButtonCss = css({
  background: '#FFFFFF',
  border: '1px solid #DFDFDF',
  color: 'rgba(0,0,0,0.9)',

  ':hover': {
    borderColor: '#1C70FF',
    color: '#1C70FF',
  },

  ':active': {
    borderColor: '#0C50DD',
    color: '#0C50DD',
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

  ':hover': {
    background: '#1C70FF10',
  },

  ':active': {
    background: '#1C70FF30',
  },
});

export const linkButtonCss = css({
  background: '#FFFFFF',
  color: '#1C70FF',

  ':hover': {
    color: '#3C90FF',
  },

  ':active': {
    color: '#0C50DD',
  },
});
