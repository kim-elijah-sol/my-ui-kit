import { type ComponentPropsWithRef, type ReactNode } from 'react';

export type RadioProps = Omit<ComponentPropsWithRef<'input'>, 'type'>;

export type RadioComponent = (props: RadioProps) => ReactNode;
