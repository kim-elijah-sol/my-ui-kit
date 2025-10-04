import type { StringElementType } from './StringElementType.types';

export type AsProps<T extends StringElementType> = {
  as?: T;
};
