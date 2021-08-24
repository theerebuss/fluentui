import * as React from 'react';
import { useCardHeader } from './useCardHeader';
import { CardHeaderProps } from './CardHeader.types';
import { renderCardHeader } from './renderCardHeader';
import { useCardHeaderStyles } from './useCardHeaderStyles';

/**
 * CardHeader component
 */
export const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>((props, ref) => {
  const state = useCardHeader(props, ref);

  useCardHeaderStyles(state);
  return renderCardHeader(state);
});

CardHeader.displayName = 'CardHeader';
