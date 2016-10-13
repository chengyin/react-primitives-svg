import React from 'react';
import ReactDOM from 'react-dom';

import {
  Svg,
  Circle,
  Rect,
} from './lib/index.dom';

function Example() {
  return (
    <Svg>
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="blue"
        strokeWidth="2.5"
        fill="green"
      />
      <Rect
        x="15"
        y="15"
        width="70"
        height="70"
        stroke="red"
        strokeWidth="2"
        fill="yellow"
      />
    </Svg>
  );
}

ReactDOM.render(<Example />, document.querySelector('.root'));
