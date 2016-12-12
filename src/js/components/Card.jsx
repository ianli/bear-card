import React from 'react';

import Background from './Background';
import California from './California';
import Head from './Head';
import LeftArm from './LeftArm';
import LeftLeg from './LeftLeg';
import RightArm from './RightArm';
import RightLeg from './RightLeg';
import Torso from './Torso';
import validateColorsSizeAndFormat from '../utils/validateColorsSizeAndFormat';

const PATTERNS = [
  'image-snowflakes',
  'image-trees',
  'image-reindeer',
  'image-hearts',
  'image-stars',
  'image-menorahs',
  'image-dreidels'
];

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    let patterns = [].concat(PATTERNS);
    for (let i = 0, n = patterns.length; i < n; i++) {
      let index = Math.floor(Math.random() * (patterns.length - i));
      patterns.push(patterns.splice(index, 1)[0]);
    }

    let colors = this.props.colors;

    let baseUrl = 'https://ianli.github.io/bear-card/';
    let patternsBaseUrl = baseUrl + 'images/patterns/';

    return (
      <svg version="1.1"
            ref="svg"
            x="0px"
            y="0px"
            viewBox="0 0 960 1280"
            enableBackground="new 0 0 960 1280"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <pattern id="image-snowflakes" x="0" y="0" patternUnits="userSpaceOnUse" width="65" height="65">
            <image x="0" y="0" width="65" height="65" xlinkHref={ patternsBaseUrl + 'snowflakes.png' }></image>
          </pattern>
          <pattern id="image-trees" x="0" y="0" patternUnits="userSpaceOnUse" width="65" height="68">
            <image x="0" y="0" width="65" height="68" xlinkHref={ patternsBaseUrl + 'trees.png' }></image>
          </pattern>
          <pattern id="image-reindeer" x="0" y="0" patternUnits="userSpaceOnUse" width="320" height="270">
            <image x="0" y="0" width="320" height="270" xlinkHref={ patternsBaseUrl + 'reindeer.png' }></image>
          </pattern>
          <pattern id="image-hearts" x="0" y="0" patternUnits="userSpaceOnUse" width="121" height="68">
            <image x="0" y="0" width="121" height="68" xlinkHref={ patternsBaseUrl + 'hearts.png' }></image>
          </pattern>
          <pattern id="image-stars" x="0" y="0" patternUnits="userSpaceOnUse" width="140" height="142">
            <image x="0" y="0" width="140" height="142" xlinkHref={ patternsBaseUrl + 'stars.png' }></image>
          </pattern>
          <pattern id="image-menorahs" x="0" y="0" patternUnits="userSpaceOnUse" width="110" height="110">
            <image x="0" y="0" width="110" height="110" xlinkHref={ patternsBaseUrl + 'menorahs.png' }></image>
          </pattern>
          <pattern id="image-dreidels" x="0" y="0" patternUnits="userSpaceOnUse" width="75" height="75">
            <image x="0" y="0" width="75" height="75" xlinkHref={ patternsBaseUrl + 'dreidels.png' }></image>
          </pattern>
          <pattern id="image-snow" x="0" y="0" patternUnits="userSpaceOnUse" width="224" height="172">
            <image x="0" y="0" width="224" height="172" xlinkHref={ patternsBaseUrl + 'snow.png' }></image>
          </pattern>
          <style type="text/css">
            {`@import url('${baseUrl}fonts/faithandglory/stylesheet.css');`}
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

Card.propTypes = {
  colors: validateColorsSizeAndFormat
};

export default Card;
