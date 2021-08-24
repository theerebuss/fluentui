import * as React from 'react';
import { render } from '@testing-library/react';
import { CardHeader } from './CardHeader';
import { isConformant } from '../../common/isConformant';

describe('CardHeader', () => {
  isConformant({
    Component: CardHeader,
    displayName: 'CardHeader',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<CardHeader>Default CardHeader</CardHeader>);
    expect(result.container).toMatchSnapshot();
  });
});
