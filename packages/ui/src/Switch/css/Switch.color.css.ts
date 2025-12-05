import { CssMap }           from '@ui-kit/utils';
import { switchColorStore } from '../store/Switch.color.store';
import { SwitchColor }      from '../Switch.types';

const switchBlackColorClass = switchColorStore.style({
  'checked-background': '#121212',
  'checked-background-hover': '#444444',
  'checked-outline-focus': '#121212',
  'checked-background-disabled': '#6A6A66',

  'unchecked-background': '#DFDFDF',
  'unchecked-background-hover': '#C1C1C1',
  'unchecked-outline-focus': '#DFDFDF',
  'unchecked-background-disabled': '#EEEEEE',
});
const switchBlueColorClass = switchColorStore.style({
  'checked-background': '#006AFF',
  'checked-background-hover': '#70ACFF',
  'checked-outline-focus': '#006AFF',
  'checked-background-disabled': '#A0CFFF',

  'unchecked-background': '#DFDFDF',
  'unchecked-background-hover': '#C1C1C1',
  'unchecked-outline-focus': '#DFDFDF',
  'unchecked-background-disabled': '#EEEEEE',
});
export const switchColorMap: CssMap<SwitchColor> = {
  black: switchBlackColorClass,
  blue: switchBlueColorClass,
};
