import { type ComponentPropsWithRef, type ReactNode } from 'react';
import { type FlexProps }                             from '../../Flex';
import type { PickRequired }                          from '../../_utils/types';

export type SwitchRootProps = PickRequired<
  Omit<FlexProps<'label'>, 'as'>,
  'id'
>;

export type SwitchRootComponent = (
  props: SwitchRootProps & Partial<Pick<ComponentPropsWithRef<'label'>, 'ref'>>,
) => ReactNode;
