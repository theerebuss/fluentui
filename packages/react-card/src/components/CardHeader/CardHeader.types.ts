import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';

/**
 * CardHeader Props
 */
export interface CardHeaderProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /*
   * TODO Add props and slots here
   * Any slot property should be listed in the cardHeaderShorthandProps array below
   * Any property that has a default value should be listed in CardHeaderDefaultedProps as e.g. 'size' | 'icon'
   */
}

/**
 * Names of the shorthand properties in CardHeaderProps
 */
export type CardHeaderShorthandProps = never; // TODO add shorthand property names

/**
 * Names of CardHeaderProps that have a default value in useCardHeader
 */
export type CardHeaderDefaultedProps = never; // TODO add names of properties with default values

/**
 * State used in rendering CardHeader
 */
export interface CardHeaderState
  extends ComponentState<CardHeaderProps, CardHeaderShorthandProps, CardHeaderDefaultedProps> {
  /**
   * Ref to the root element
   */
  ref: React.Ref<HTMLElement>;
}
