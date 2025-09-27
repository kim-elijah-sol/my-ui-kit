import { GapType, GapValueType } from './gap.types';

const resolveGapValue = (value: GapValueType) =>
  typeof value === 'number' ? `${value}px` : value;

export const resolveGap = (gap: GapType): number | string | undefined => {
  if (gap === undefined || typeof gap === 'number' || typeof gap === 'string')
    return gap;

  if (Array.isArray(gap)) {
    return gap.map(resolveGapValue).join(' ');
  }

  const { row, column } = gap;

  return `${resolveGapValue(row)} ${resolveGapValue(column)}`;
};
