# react-primitives-svg
Primitive React SVG Elements Across Targets

## Prerequisites

- Setup a `react-primitives` project

## Getting Started

Install with:

```sh
npm i --save react-primitives-svg
```

Make sure your build resolver (e.g. Webpack) resolves the platform extension (such as `.web.js` or `.ios.js`) before `.js` files.

e.g.

webpack.config.js

```js
module.exports = {
  // ...
  resolve: {
    // ...
    extensions: ['.web.jsx', '.web.js', '.jsx', '.js']
    // ...
  }
  //...
}
```

## Usage

```jsx
import { View, StyleSheet } from 'react-primitives';

import {
  Svg,
  Circle,
  ClipPath,
  Ellipse,
  G,
  Image,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Pattern,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use,
  Defs,
  Stop,
} from 'react-primitives-svg';

const SvgExample = () => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
    </Svg>
  </View>
);

export default SvgExample;
```
