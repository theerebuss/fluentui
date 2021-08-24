import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-utilities';
import { CardHeaderProps, CardHeaderShorthandProps, CardHeaderState } from './CardHeader.types';

/**
 * Array of all shorthand properties listed in CardHeaderShorthandProps
 */
export const cardHeaderShorthandProps: CardHeaderShorthandProps[] = [
  /* TODO add shorthand property names */
];

const mergeProps = makeMergeProps<CardHeaderState>({ deepMerge: cardHeaderShorthandProps });

/**
 * Create the state required to render CardHeader.
 *
 * The returned state can be modified with hooks such as useCardHeaderStyles,
 * before being passed to renderCardHeader.
 *
 * @param props - props from this instance of CardHeader
 * @param ref - reference to root HTMLElement of CardHeader
 * @param defaultProps - (optional) default prop values provided by the implementing type
 */
export const useCardHeader = (
  props: CardHeaderProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: CardHeaderProps,
): CardHeaderState => {
  const state = mergeProps(
    {
      ref,
    },
    defaultProps && resolveShorthandProps(defaultProps, cardHeaderShorthandProps),
    resolveShorthandProps(props, cardHeaderShorthandProps),
  );

  return state;
};
