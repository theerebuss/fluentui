import * as React from 'react';
import { Button } from '@fluentui/react-button';
import { Body, Headline } from '@fluentui/react-text';
import { Card, CardProps } from './index';
import { FluentProvider } from '@fluentui/react-provider';
import { webDarkTheme, webHighContrastTheme, webLightTheme } from '../../../../react-theme/src/index';

const Examples = () => (
  <>
    <Headline>I am cool 😎</Headline>
    <Body>
      Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw. Marshmallow pastry jujubes toffee sugar plum.
    </Body>
    <Button onClick={() => alert()}>Click me :)</Button>
    <div>
      <Button onClick={() => alert('Hey :)')}>Click me :)</Button>
    </div>
  </>
);

export const CardStory = (props: CardProps) => {
  return (
    <>
      {/* <div>
      <h1>Variants - Filled (default)</h1>
      <FluentProvider theme={webLightTheme}>
        <Card tabIndex={0}>
          <Examples />
        </Card>
      </FluentProvider>
      <br />
      <FluentProvider theme={webDarkTheme}>
        <Card tabIndex={0}>
          <Examples />
        </Card>
      </FluentProvider>
      <br />
      <FluentProvider theme={webHighContrastTheme}>
        <Card tabIndex={0}>
          <Examples />
        </Card>
      </FluentProvider>
    </div> */}

      <div>
        <h1>Variants - Filled (interactive)</h1>
        <FluentProvider theme={webLightTheme}>
          <Card onClick={() => {}} tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
        <br />
        <FluentProvider theme={webDarkTheme}>
          <Card onClick={() => {}} tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
        <br />
        <FluentProvider theme={webHighContrastTheme}>
          <Card onClick={() => {}} tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
      </div>

      <br />

      <div>
        <h1>Variants - Filled Alt</h1>
        <FluentProvider theme={webLightTheme}>
          <Card appearance="filled-alternative" tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
        <br />
        <FluentProvider theme={webDarkTheme}>
          <Card appearance="filled-alternative" tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
        <br />
        <FluentProvider theme={webHighContrastTheme}>
          <Card tabIndex={0}>
            <Examples />
          </Card>
        </FluentProvider>
      </div>

      <br />

      <div>
        <h1>Interactive</h1>
        <Card tabIndex={0}>
          <Examples />
        </Card>
        <br />
        <Card tabIndex={0} onClick={() => alert('I am card :D')}>
          <Examples />
        </Card>
      </div>
      <br />
      <div>
        <h1>Scale</h1>
        <Card scale="fixed" style={{ width: 200, height: 200 }}>
          <Examples />
        </Card>
        <Card scale="auto-width">
          <Examples />
        </Card>
        <Card scale="auto-height">
          <Examples />
        </Card>
        <Card scale="auto">
          <Examples />
        </Card>
        <Card scale="fluid-width">
          <Examples />
        </Card>
        <Card scale="fluid-height">
          <Examples />
        </Card>
        <Card scale="fluid">
          <Examples />
        </Card>
      </div>
      <br />
      <div>
        <h1>Size</h1>
        <Card size="smallest">
          <Examples />
        </Card>
        <Card size="smaller">
          <Examples />
        </Card>
        <Card size="small">
          <Examples />
        </Card>
        <Card size="medium">
          <Examples />
        </Card>
        <Card size="large">
          <Examples />
        </Card>
      </div>
    </>
  );
};

CardStory.argTypes = {};

export default {
  title: 'Components/Card',
  component: Card,
};
