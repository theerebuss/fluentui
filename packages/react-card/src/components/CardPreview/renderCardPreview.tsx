import * as React from 'react';
import { getSlotsCompat } from '@fluentui/react-utilities';
import { CardPreviewState } from './CardPreview.types';
import { cardPreviewShorthandProps } from './useCardPreview';

/**
 * Render the final JSX of CardPreview
 */
export const renderCardPreview = (state: CardPreviewState) => {
  const { slots, slotProps } = getSlotsCompat(state, cardPreviewShorthandProps);

  return (
    <slots.root {...slotProps}>
      <img className={state.className} src={state.src} alt={state.alt} />
      <slots.logo {...slotProps.logo} />
    </slots.root>
  );
};
