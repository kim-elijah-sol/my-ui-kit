import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { type GapType } from '../_utils/styles/gap';
import type { AsProps, StringElementType } from '../_utils/types';

export type FlexOptions = {
  inline?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  wrap?: boolean | CSSProperties['flexWrap'];
  gap?: GapType;
};

export type FlexProps<T extends StringElementType = 'div'> =
  ComponentPropsWithoutRef<T> & AsProps<T> & FlexOptions;

export type FlexComponent = <T extends StringElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => ReactNode;

export type FlexType = FlexComponent & {
  Center: FlexComponent;
};
