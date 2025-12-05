import { CssMap }          from '@ui-kit/utils';
import { CommonSize }      from '../../common/types';
import { buttonSizeStore } from '../store/Button.size.store';

const buttonSmallSizeClass = buttonSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  'h': '1.75rem',
  'r': '0.35rem',
});
const buttonMediumSizeClass = buttonSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  'h': '2.25rem',
  'r': '0.5rem',
});
const buttonLargeSizeClass = buttonSizeStore.style({
  'f-s': '1rem',
  'p-x': '0.75rem',
  'h': '2.5rem',
  'r': '0.5rem',
});
export const buttonSizeMap: CssMap<CommonSize> = {
  sm: buttonSmallSizeClass,
  md: buttonMediumSizeClass,
  lg: buttonLargeSizeClass,
};
