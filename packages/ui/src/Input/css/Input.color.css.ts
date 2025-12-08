import type { CssMap }     from '@ui-kit/utils';
import { inputColorStore } from '../store/Input.color.store';
import type { InputColor } from '../Input.types';

const inputBlackColorClass = inputColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});
const inputBlueColorClass = inputColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});
export const inputColorMap: CssMap<InputColor> = {
  black: inputBlackColorClass,
  blue: inputBlueColorClass,
};
