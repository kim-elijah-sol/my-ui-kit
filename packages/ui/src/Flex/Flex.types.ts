import {
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';
import { type GapType } from '../gap';

export type FlexElementType = ElementType & string;

export type AsProps<T extends FlexElementType> = {
  as?: T;
};

export type FlexOptions = {
  inline?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  wrap?: boolean | CSSProperties['flexWrap'];
  gap?: GapType;
};

export type FlexProps<T extends FlexElementType = 'div'> =
  ComponentPropsWithoutRef<T> & AsProps<T> & FlexOptions;

export type FlexComponent = <T extends FlexElementType = 'div'>(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, 'ref'>>
) => ReactNode;

export type FlexType = FlexComponent & {
  Center: FlexComponent;
};
