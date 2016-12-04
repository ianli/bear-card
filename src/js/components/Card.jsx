import React from 'react';

import Background from './Background';
import California from './California';
import Head from './Head';
import LeftArm from './LeftArm';
import LeftLeg from './LeftLeg';
import RightArm from './RightArm';
import RightLeg from './RightLeg';
import Torso from './Torso';

const PATTERNS = [
  'image-snowflakes',
  'image-trees',
  'image-reindeer',
  'image-hearts',
  'image-stars',
  'image-menorahs',
  'image-dreidels'
];

const COLORS = [
  "#4CAF50",
  "#AB47BC",
  "#64B5F6",
  "#FFC107",
  "#E91E63",
  "#FF5722",
  "#2196F3",
  '#4db6ac'
];

class BearingGifts extends React.Component {
  constructor() {
    super();
  }

  render() {
    let patterns = [].concat(PATTERNS);
    for (let i = 0, n = patterns.length; i < n; i++) {
      let index = Math.floor(Math.random() * (patterns.length - i));
      patterns.push(patterns.splice(index, 1));
    }

    let colors = [].concat(COLORS);
    for (let i = 0, n = colors.length; i < n; i++) {
      let index = Math.floor(Math.random() * (colors.length - i));
      colors.push(colors.splice(index, 1));
    }

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
            <image x="0" y="0" width="65" height="65" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/snowflakes.png"></image>
          </pattern>
          <pattern id="image-trees" x="0" y="0" patternUnits="userSpaceOnUse" width="65" height="68">
            <image x="0" y="0" width="65" height="68" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/trees.png"></image>
          </pattern>
          <pattern id="image-reindeer" x="0" y="0" patternUnits="userSpaceOnUse" width="320" height="270">
            <image x="0" y="0" width="320" height="270" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/reindeer.png"></image>
          </pattern>
          <pattern id="image-hearts" x="0" y="0" patternUnits="userSpaceOnUse" width="121" height="68">
            <image x="0" y="0" width="121" height="68" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/hearts.png"></image>
          </pattern>
          <pattern id="image-stars" x="0" y="0" patternUnits="userSpaceOnUse" width="140" height="142">
            <image x="0" y="0" width="140" height="142" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/stars.png"></image>
          </pattern>
          <pattern id="image-menorahs" x="0" y="0" patternUnits="userSpaceOnUse" width="110" height="110">
            <image x="0" y="0" width="110" height="110" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/menorahs.png"></image>
          </pattern>
          <pattern id="image-dreidels" x="0" y="0" patternUnits="userSpaceOnUse" width="75" height="75">
            <image x="0" y="0" width="75" height="75" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/dreidels.png"></image>
          </pattern>
          <pattern id="image-snow" x="0" y="0" patternUnits="userSpaceOnUse" width="224" height="172">
            <image x="0" y="0" width="224" height="172" xlinkHref="https://ianli.github.io/bearing-gifts/images/patterns/snow.png"></image>
          </pattern>
          <style type="text/css">
          {`<![CDATA[
            @font-face {
              font-family: 'Faith and Glory One';
              src: url('fonts/faithandglory/faith_and_glory_one_thefontsmaster.com-webfont.woff2') format('woff2'),
                   url('fonts/faithandglory/faith_and_glory_one_thefontsmaster.com-webfont.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
          ]]>`}
          </style>
        </defs>

        <Background
            color={colors[7]}
            pattern="image-snow" />

        <LeftLeg
            color={colors[0]}
            pattern={patterns[0]} />

        <RightLeg
            color={colors[1]}
            pattern={patterns[1]} />

        <Torso
            color={colors[2]}
            pattern={patterns[2]} />

        <California
            color={colors[3]}
            pattern={patterns[3]} />

        <LeftArm
            color={colors[4]}
            pattern={patterns[4]} />

        <RightArm
            color={colors[5]}
            pattern={patterns[5]} />

        <Head
            color={colors[6]}
            pattern={patterns[6]} />

        <text
            transform="matrix(1 0 0 1 147.8472 1084.4744)"
            fontFamily="'Faith and Glory One'"
            fontSize="120"
            letterSpacing="0"
            fill="#FFFFFF">
          HAPPY EVERYTHING!
        </text>
      </svg>
    );
  }
}

export default BearingGifts;
