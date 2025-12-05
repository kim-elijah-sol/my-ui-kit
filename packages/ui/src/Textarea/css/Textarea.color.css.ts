import { CssMap }             from '@ui-kit/utils';
import { textareaColorStore } from '../store/Textarea.color.store';
import { TextareaColor }      from '../Textarea.types';

const textareaBlackColorClass = textareaColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#AAAAAA',
  'border-focus': '#121212',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});
const textareaBlueColorClass = textareaColorStore.style({
  'border': '#DFDFDF',
  'border-hover': '#70ACFF',
  'border-focus': '#006AFF',

  'background': '#F5F5F5',
  'background-hover': '#FAFAFA',
  'background-focus': '#FFFFFF',
  'background-disabled': '#F1F1F1',
});
export const textareaColorMap: CssMap<TextareaColor> = {
  black: textareaBlackColorClass,
  blue: textareaBlueColorClass,
};
