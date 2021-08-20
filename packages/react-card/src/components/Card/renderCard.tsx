import * as React from 'react';
import { getSlotsCompat } from '@fluentui/react-utilities';
import { Menu, MenuItem, MenuList, MenuPopover } from '@fluentui/react-menu';
import { CardState } from './Card.types';
import { cardShorthandProps } from './useCard';

/**
 * Render the final JSX of Card
 */
export const renderCard = (state: CardState) => {
  const { slots, slotProps } = getSlotsCompat(state, cardShorthandProps);

  return (
    <>
      <slots.root role="group" {...slotProps.root}>
        {state.children}
      </slots.root>
      {state.context && (
        <Menu>
          <MenuPopover {...state.context}>
            <MenuList>
              <MenuItem>New </MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem disabled>Open File</MenuItem>
              <MenuItem>Open Folder</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      )}
    </>
  );
};
