import type { CssMap }        from '@ui-kit/utils';
import { checkboxColorStore } from '../store/Checkbox.color.store';
import type { CheckboxColor } from '../Checkbox.types';

const checkboxBlackColorClass = checkboxColorStore.style({
  'hover': '#AAAAAA',
  'checked': '#121212',
  'disabled-checked': '#6A6A6A',
  'disabled-unchecked': '#EEEEEE',
});
const checkboxBlueColorClass = checkboxColorStore.style({
  'hover': '#70ACFF',
  'checked': '#006AFF',
  'disabled-checked': '#A0CFFF',
  'disabled-unchecked': '#EEEEEE',
});
export const checkboxColorMap: CssMap<CheckboxColor> = {
  black: checkboxBlackColorClass,
  blue: checkboxBlueColorClass,
};
