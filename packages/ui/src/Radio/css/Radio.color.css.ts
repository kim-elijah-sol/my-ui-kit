import { CssMap }          from '@ui-kit/utils';
import { radioColorStore } from '../store/Radio.color.store';
import { RadioColor }      from '../Radio.types';

const radioBlackColorClass = radioColorStore.style({
  'hover': '#AAAAAA',
  'checked': '#121212',
  'disabled-checked': '#6A6A6A',
  'disabled-unchecked': '#EEEEEE',
});

const radioBlueColorClass = radioColorStore.style({
  'hover': '#70ACFF',
  'checked': '#006AFF',
  'disabled-checked': '#A0CFFF',
  'disabled-unchecked': '#EEEEEE',
});

export const radioColorMap: CssMap<RadioColor> = {
  black: radioBlackColorClass,
  blue: radioBlueColorClass,
};
