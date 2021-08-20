import * as React from 'react';
import { MenuProps } from '@fluentui/react-menu';
import { ComponentPropsCompat, ComponentStateCompat, ShorthandPropsCompat } from '@fluentui/react-utilities';

/**
 * Card Props
 */
export interface CardProps extends ComponentPropsCompat, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Orientation of the card.
   *
   * @defaultValue 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';

  /**
   * Define the minimum size of the card.
   * Smaller sizes only apply to horizontal card.
   *
   * @defaultValue 'medium'
   */
  size?: 'smallest' | 'smaller' | 'small' | 'medium' | 'large';

  /**
   * Manages how the card handles it's scaling depending on the content.
   *
   * @defaultValue 'fixed'
   */
  scale?: 'fixed' | 'auto-width' | 'auto-height' | 'auto' | 'fluid-width' | 'fluid-height' | 'fluid';

  /**
   * Function to call when clicking the card. Makes the card assume the interactive appearance.
   */
  onClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * Define the appearance of the card.
   *
   * @defaultValue 'filled'
   */
  appearance?: 'filled' | 'filled-alternative' | 'outline' | 'subtle';

  /**
   * Makes the card selectable.
   *
   * @defaultValue false
   */
  selectable?: boolean;

  /**
   * Set to true if card is selected.
   *
   * @defaultValue false
   */
  selected?: boolean;

  /**
   * Allow card to expand to show whole content.
   *
   * @defaultValue false
   */
  expandable?: boolean;

  /**
   * Makes the card disabled
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Slot for the context menu. Opens up when right-clicking the card.
   */
  // context?:
  //   | MenuProps
  //   | {
  //       menu: React.ReactNode;
  //     };
  context?: any;
}

/**
 * Shorthand properties
 */
export type CardShorthandProps = 'context';

/**
 * Properties that have default values.
 */
export type CardDefaultedProps = never;

/**
 * State used in rendering Card
 */
export interface CardState extends ComponentStateCompat<CardProps, CardShorthandProps, CardDefaultedProps> {
  ref: React.Ref<HTMLElement>;
  contextOpen: boolean;
}
