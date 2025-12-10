import { createVarStore } from '@ui-kit/utils';

export const sliderColorStore = createVarStore<
  'track' | 'fill' | 'thumb' | 'disabled-track' | 'disabled-fill' | 'disabled-thumb'
>();
