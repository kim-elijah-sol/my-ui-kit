import type { CssMap }     from '@ui-kit/utils';
import { inputSizeStore }  from '../store/Input.size.store';
import type { CommonSize } from '../../common/types';

const inputSmallSizeClass = inputSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.5rem',
  'h': '1.75rem',
  'r': '0.35rem',
});
const inputMediumSizeClass = inputSizeStore.style({
  'f-s': '0.875rem',
  'p-x': '0.75rem',
  'h': '2.25rem',
  'r': '0.5rem',
});
const inputLargeSizeClass = inputSizeStore.style({
  'f-s': '1rem',
  'p-x': '0.75rem',
  'h': '2.5rem',
  'r': '0.5rem',
});
export const inputSizeMap: CssMap<CommonSize> = {
  sm: inputSmallSizeClass,
  md: inputMediumSizeClass,
  lg: inputLargeSizeClass,
};
