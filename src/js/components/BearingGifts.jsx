import React from 'react';

import Background from './Background';
import California from './California';
import Head from './Head';
import LeftArm from './LeftArm';
import LeftLeg from './LeftLeg';
import RightArm from './RightArm';
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
          <pattern id="image-reindeer" x="0" y="0" patternUnits="userSpaceOnUse" width="320" height="270">
            <image x="0" y="0" width="320" height="270" xlinkHref="images/patterns/reindeer.png"></image>
          </pattern>
          <pattern id="image-hearts" x="0" y="0" patternUnits="userSpaceOnUse" width="121" height="68">
            <image x="0" y="0" width="121" height="68" xlinkHref="images/patterns/hearts.png"></image>
          </pattern>
          <pattern id="image-stars" x="0" y="0" patternUnits="userSpaceOnUse" width="140" height="142">
            <image x="0" y="0" width="140" height="142" xlinkHref="images/patterns/stars.png"></image>
          </pattern>
          <pattern id="image-menorahs" x="0" y="0" patternUnits="userSpaceOnUse" width="110" height="110">
            <image x="0" y="0" width="110" height="110" xlinkHref="images/patterns/menorahs.png"></image>
          </pattern>
          <pattern id="image-dreidels" x="0" y="0" patternUnits="userSpaceOnUse" width="75" height="75">
            <image x="0" y="0" width="75" height="75" xlinkHref="images/patterns/dreidels.png"></image>
          </pattern>
          <pattern id="image-snow" x="0" y="0" patternUnits="userSpaceOnUse" width="224" height="172">
            <image x="0" y="0" width="224" height="172" xlinkHref="images/patterns/snow.png"></image>
          </pattern>
        </defs>

        <Background
            color="#4db6ac"
            pattern="image-snow" />

        <LeftLeg
            color="#4CAF50"
            pattern="image-trees" />

        <RightLeg
            color="#AB47BC"
            pattern="image-menorahs" />

        <Torso
            color="#64B5F6"
            pattern="image-reindeer" />

        <California
            color="#FFC107"
            pattern="image-stars" />

        <LeftArm
            color="#E91E63"
            pattern="image-hearts" />

        <RightArm
            color="#FF5722"
            pattern="image-dreidels" />

        <Head
            color="#2196F3"
            pattern="image-snowflakes" />
      </svg>
    );
  }
}

export default BearingGifts;
