import type { CssMap }      from '@ui-kit/utils';
import * as switchSizeStore from '../store/Switch.size.store';
import type { CommonSize }  from '../../common/types';

const switchSmallSizeClass = switchSizeStore.switchSizeStore.style({
  's-h': '1.5rem',
  's-w': '2.625rem',
});
const switchMediumSizeClass = switchSizeStore.switchSizeStore.style({
  's-h': '2rem',
  's-w': '3.5rem',
});
const switchLargeSizeClass = switchSizeStore.switchSizeStore.style({
  's-h': '2.5rem',
  's-w': '4.375rem',
});
export const switchSizeMap: CssMap<CommonSize> = {
  sm: switchSmallSizeClass,
  md: switchMediumSizeClass,
  lg: switchLargeSizeClass,
};

export const switchHandleDefaultSizeClass = switchSizeStore.switchHandleSizeStore.style({
  's-h-s': `calc(${switchSizeStore.switchSizeStore.use('s-h')} - 0.5rem)`,
});
