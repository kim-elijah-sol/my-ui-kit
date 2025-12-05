import { createVarStore } from '@ui-kit/utils';

export const switchSizeStore = createVarStore<'s-h' | 's-w'>();

export const switchHandleSizeStore = createVarStore<'s-h-s'>();
