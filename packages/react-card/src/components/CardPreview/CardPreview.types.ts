import * as React from 'react';
import { ComponentProps, ComponentStateCompat, ShorthandPropsCompat } from '@fluentui/react-utilities';

/**
 * CardPreview Props
 */
export interface CardPreviewProps extends ComponentProps, React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Slot to position a logo over the image preview
   */
  logo?: ShorthandPropsCompat<React.HTMLAttributes<HTMLElement>>;
}

/**
 * Names of the shorthand properties in CardPreviewProps
 */
export type CardPreviewShorthandProps = 'logo'; // TODO add shorthand property names

/**
 * State used in rendering CardPreview
 */
export interface CardPreviewState extends ComponentStateCompat<CardPreviewProps, CardPreviewShorthandProps> {
  /**
   * Ref to the root element
   */
  ref: React.Ref<HTMLElement>;
}
