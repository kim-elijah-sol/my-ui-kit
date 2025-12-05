import { style }             from '@vanilla-extract/css';
import { CssMap }            from '@ui-kit/utils';
import { ButtonVariant }     from './Button.types';
import { buttonSizeStore }   from './store/Button.size.store';
import * as buttonColorStore from './store/Button.color.store';

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
      outlineColor: buttonColorStore.baseButtonColorStore.use('outline'),
    },
  },
});

const primaryButtonClass = style({
  background: buttonColorStore.primaryColorStore.use('bg'),
  color: buttonColorStore.primaryColorStore.use('color'),

  selectors: {
    '&:hover:not(:disabled)': {
      background: buttonColorStore.primaryColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      background: buttonColorStore.primaryColorStore.use('active'),
    },
    '&:disabled': {
      border: `1px solid ${buttonColorStore.primaryColorStore.use('disabled-border')}`,
      background: buttonColorStore.primaryColorStore.use('disabled-bg'),
      color: buttonColorStore.primaryColorStore.use('disabled-color'),
    },
  },
});
const borderButtonClass = style({
  background: '#FFFFFF',
  border: `1px solid ${buttonColorStore.borderColorStore.use('border')}`,
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: buttonColorStore.borderColorStore.use('hover-border'),
      background: '#F1F1F1',
    },
    '&:active:not(:disabled)': {
      borderColor: buttonColorStore.borderColorStore.use('active-border'),
      background: '#E1E1E1',
    },
    '&:disabled': {
      border: `1px solid ${buttonColorStore.borderColorStore.use('disabled-border')}`,
      background: '#F1F1F1',
      color: '#CCCCCC',
    },
  },
});
const dashedButtonClass = style({
  background: '#FFFFFF',
  border: `1px dashed ${buttonColorStore.borderColorStore.use('border')}`,
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: buttonColorStore.borderColorStore.use('hover-border'),
      background: '#F1F1F1',
    },
    '&:active:not(:disabled)': {
      borderColor: buttonColorStore.borderColorStore.use('active-border'),
      background: '#E1E1E1',
    },
    '&:disabled': {
      border: `1px dashed ${buttonColorStore.borderColorStore.use('disabled-border')}`,
      background: '#F1F1F1',
      color: '#CCCCCC',
    },
  },
});
const ghostButtonClass = style({
  background: '#FFFFFF',
  color: 'rgba(0,0,0,0.9)',

  selectors: {
    '&:hover:not(:disabled)': {
      background: buttonColorStore.ghostColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      background: buttonColorStore.ghostColorStore.use('active'),
    },
    '&:disabled': {
      color: '#CCCCCC',
    },
  },
});
const linkButtonClass = style({
  background: '#FFFFFF',
  color: buttonColorStore.linkColorStore.use('color'),

  selectors: {
    '&:hover:not(:disabled)': {
      color: buttonColorStore.linkColorStore.use('hover'),
    },
    '&:active:not(:disabled)': {
      color: buttonColorStore.linkColorStore.use('active'),
    },
    '&:disabled': {
      color: buttonColorStore.linkColorStore.use('disabled'),
    },
  },
});
export const buttonVariantMap: CssMap<ButtonVariant> = {
  primary: primaryButtonClass,
  border: borderButtonClass,
  dashed: dashedButtonClass,
  ghost: ghostButtonClass,
  link: linkButtonClass,
};
