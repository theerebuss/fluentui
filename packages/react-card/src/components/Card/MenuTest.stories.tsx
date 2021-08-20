import * as React from 'react';
import { MenuItem, MenuList } from '@fluentui/react-menu';
import { Card, CardProps } from './index';

export const CardStory = (props: CardProps) => {
  return (
    <>
      <Card
        tabIndex={0}
        {...props}
        context={{
          menu: (
            <MenuList>
              <MenuItem>New </MenuItem>
              <MenuItem>New Window</MenuItem>
              <MenuItem disabled>Open File</MenuItem>
              <MenuItem>Open Folder</MenuItem>
            </MenuList>
          ),
        }}
      >
        Am card
      </Card>
    </>
  );
};

CardStory.argTypes = {};

export default {
  title: 'Components/CardContextMenu',
  component: Card,
};
