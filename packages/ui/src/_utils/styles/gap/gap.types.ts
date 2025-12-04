import { CSSProperties } from 'react';

export type GapValueType = string | number;

export type GapType
  = | CSSProperties['gap']
    | [GapValueType, GapValueType]
    | Record<'row' | 'column', GapValueType>;
