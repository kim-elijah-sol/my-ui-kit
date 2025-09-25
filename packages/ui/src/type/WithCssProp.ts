import { Interpolation, Theme } from '@emotion/react';

export type WithCssProp<T> = T & {
  css?: Interpolation<Theme>;
};
