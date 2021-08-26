import * as React from 'react';
import { CardPreview } from './CardPreview';

export const CardPreviewDefault = () => (
  <div style={{ width: '300px', height: '250px', border: '1px solid black' }}>
    <CardPreview
      alt="Pride 2021 background"
      src="https://microsoft.com/es-xl/latam-partner-one/uploads/images/posts/aripyr3ay7dqhpnhenixf8mtkuffu98weksqgzszwi7avfnslpjhohkrwf8q.jpg"
      style={{ border: '1px solid red' }}
    />
    <span>
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
    </span>
  </div>
);

export const CardPreviewLogo = () => (
  <div style={{ width: '300px', height: '250px', border: '1px solid black' }}>
    <CardPreview
      alt="Pride 2021 background"
      src="https://microsoft.com/es-xl/latam-partner-one/uploads/images/posts/aripyr3ay7dqhpnhenixf8mtkuffu98weksqgzszwi7avfnslpjhohkrwf8q.jpg"
      logo={
        <img
          src="https://res-1.cdn.office.net/officehub/images/content/images/favicons/favicon-powerpoint-svg-f44c23dac7.ico"
          alt="Powerpoint"
        />
      }
      style={{ border: '1px solid red' }}
    />
    <span>
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
      Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card Card
    </span>
  </div>
);

export default {
  title: 'Components/CardPreview',
  component: CardPreview,
};
