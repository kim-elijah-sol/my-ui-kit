import type { CssMap }      from '@ui-kit/utils';
import { sliderColorStore } from '../store/Slider.color.store';
import type { SliderColor } from '../Slider.types';

const sliderBlackColorClass = sliderColorStore.style({
  'track': '#E5E5E5',
  'fill': '#121212',
  'thumb': '#121212',
  'disabled-track': '#F5F5F5',
  'disabled-fill': '#CCCCCC',
  'disabled-thumb': '#CCCCCC',
});

const sliderBlueColorClass = sliderColorStore.style({
  'track': '#E5E5E5',
  'fill': '#006AFF',
  'thumb': '#006AFF',
  'disabled-track': '#F5F5F5',
  'disabled-fill': '#A0CFFF',
  'disabled-thumb': '#A0CFFF',
});

export const sliderColorMap: CssMap<SliderColor> = {
  black: sliderBlackColorClass,
  blue: sliderBlueColorClass,
};
