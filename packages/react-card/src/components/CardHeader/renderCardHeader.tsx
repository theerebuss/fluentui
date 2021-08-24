import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { CardHeaderState } from './CardHeader.types';
import { cardHeaderShorthandProps } from './useCardHeader';

/**
 * Render the final JSX of CardHeader
 */
export const renderCardHeader = (state: CardHeaderState) => {
  const { slots, slotProps } = getSlots(state, cardHeaderShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      {/* TODO Add additional slots in the appropriate place */}
      {state.children}
    </slots.root>
  );
};
