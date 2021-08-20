import * as React from 'react';
import { CardProps, CardShorthandProps, CardState } from './Card.types';
import { makeMergeProps, resolveShorthandProps, useEventCallback, useMergedRefs } from '@fluentui/react-utilities';
import { useMenuContext } from '@fluentui/react-menu';

/**
 * Array of all shorthand properties listed in CardShorthandProps
 */
export const cardShorthandProps: CardShorthandProps[] = ['context'];

const mergeProps = makeMergeProps<CardState>({ deepMerge: cardShorthandProps });

/**
 * Create the state required to render Card.
 *
 * The returned state can be modified with hooks such as useCardStyles,
 * before being passed to renderCard.
 *
 * @param props - props from this instance of Card
 * @param ref - reference to root HTMLElement of Card
 * @param defaultProps - (optional) default prop values provided by the implementing type
 */
export const useCard = (props: CardProps, ref: React.Ref<HTMLElement>, defaultProps?: CardProps): CardState => {
  const popoverRef = useMenuContext(context => context.menuPopoverRef);
  const contextOpen = useMenuContext(context => context.open);
  const setOpen = useMenuContext(context => context.setOpen);

  const state = mergeProps(
    {
      ref,
      contextOpen,

      context: {
        ref: popoverRef,
      },

      // Non-slot props
      size: 'medium',
    },
    defaultProps && resolveShorthandProps(defaultProps, cardShorthandProps),
    resolveShorthandProps(props, cardShorthandProps),
  );

  const { onContextMenu: onContextMenuOriginal } = state;
  const onContextMenu = useEventCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(e, { open: true, bubble: true });
    e.preventDefault();

    onContextMenuOriginal?.(e);
  });

  return {
    ...state,
    onContextMenu,
  };
};
