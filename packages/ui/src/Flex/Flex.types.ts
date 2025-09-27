import { ComponentPropsWithRef, CSSProperties } from 'react';
import { GapType } from '../gap';
import { type WithCssProp } from '../type/WithCssProp';

export type FlexOptions = {
  inline?: boolean;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  wrap?: boolean | CSSProperties['flexWrap'];
  gap?: GapType;
};

export type FlexProps = WithCssProp<ComponentPropsWithRef<'div'>> & FlexOptions;
