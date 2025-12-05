import clsx                  from 'clsx';
import * as buttonColorStore from '../store/Button.color.store';

const baseButtonBlackColorClass = buttonColorStore.baseButtonColorStore.style({
  outline: '#121212',
});
const primaryBlackColorClass = buttonColorStore.primaryColorStore.style({
  'bg': '#121212',
  'color': '#FFFFFF',
  'hover': '#666666',
  'active': '#000000',
  'disabled-bg': '#F1F1F1',
  'disabled-color': '#CCCCCC',
  'disabled-border': '#DFDFDF',
});
const borderBlackColorClass = buttonColorStore.borderColorStore.style({
  'border': '#DFDFDF',
  'hover-border': '#888888',
  'active-border': '#000000',
  'disabled-border': '#DFDFDF',
});
const ghostBlackColorClass = buttonColorStore.ghostColorStore.style({
  hover: '#E1E1E1',
  active: '#CCCCCC',
});
const linkBlackColorClass = buttonColorStore.linkColorStore.style({
  color: '#121212',
  hover: '#666666',
  active: '#000000',
  disabled: '#CCCCCC',
});
export const buttonBlackColorClass = clsx(
  baseButtonBlackColorClass,
  primaryBlackColorClass,
  borderBlackColorClass,
  ghostBlackColorClass,
  linkBlackColorClass,
);
