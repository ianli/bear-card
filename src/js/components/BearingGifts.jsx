import React from 'react';

import LeftLeg from './LeftLeg';
import RightLeg from './RightLeg';
import Torso from './Torso';

class BearingGifts extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <svg version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 960 1280"
            enableBackground="new 0 0 960 1280"
            style={{
              margin: '0 auto',
              height: '100vh'
            }}>
        <defs>
          <pattern id="image-snowflakes" x="0" y="0" patternUnits="userSpaceOnUse" width="65" height="65">
            <image x="0" y="0" width="65" height="65" xlinkHref="images/patterns/snowflakes.png"></image>
          </pattern>
          <pattern id="image-trees" x="0" y="0" patternUnits="userSpaceOnUse" width="65" height="68">
            <image x="0" y="0" width="65" height="68" xlinkHref="images/patterns/trees.png"></image>
          </pattern>
        </defs>

        <LeftLeg
            color="#4CAF50"
            pattern="image-trees" />

        <RightLeg
            color="#AB47BC"
            pattern="image-snowflakes" />

        <Torso
            color="#64B5F6"
            pattern="image-trees" />
      </svg>
    );
  }
}

export default BearingGifts;
