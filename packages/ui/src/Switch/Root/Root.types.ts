import { ComponentPropsWithRef, ReactNode } from 'react';
import { PickRequired } from '../../_utils/types';
import { FlexProps } from '../../Flex';

export type SwitchRootProps = PickRequired<
  Omit<FlexProps<'label'>, 'as'>,
  'id'
>;

export type SiwtchRootComponent = (
  props: SwitchRootProps & Partial<Pick<ComponentPropsWithRef<'label'>, 'ref'>>
) => ReactNode;
