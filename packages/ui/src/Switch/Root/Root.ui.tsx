import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { Flex } from '../../Flex';
import { Switch } from '../Switch.ui';
import type { SiwtchRootComponent } from './Root.types';

export const SwitchRoot: SiwtchRootComponent = forwardRef((_props, ref) => {
  const {
    id,
    align = 'center',
    direction = 'row',
    gap = 8,
    children,
    ...props
  } = _props;

  const idResolvedChildren = Children.toArray(children)
    .filter(isValidElement)
    .map((element) => {
      if (element.type === Switch) {
        return cloneElement(element, {
          id,
        } as any);
      }

      return element;
    });

  return (
    <Flex
      {...props}
      ref={ref}
      as='label'
      htmlFor={id}
      align={align}
      direction={direction}
      gap={gap}
    >
      {idResolvedChildren}
    </Flex>
  );
});
