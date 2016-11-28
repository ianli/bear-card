import React from 'react';

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
      </svg>
    );
  }
}

const RightLeg = ({color, pattern}) => {
  let path = `M360,703.9c0,0-1.8,39.1,2.3,71.9c4.6,36.7,19.9,71.9,19.9,89.5
    c0,17.6-1.5,32.9-9.2,39.8s-24.5,13-32.9,24.5c-8.4,11.5-6.9,23-6.9,23s21.2,14.5,52.8,12.2c32.1-2.3,65.8-29.1,65.8-29.1
    s-0.8-20.7-1.5-34.4s-2.9-39.7,5.4-67.3c14-46.9,47.7-77.6,47.7-77.6L395,647L360,703.9z`;

  return (
    <g id="right-leg">
    	<path id="right-leg-white" fill={color} d={path} />
      <path id="right-leg-fill" fill={`url(#${pattern})`} d={path} />
    	<g id="right-leg-lines"
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10" >
    		<path d={path} />
    		<path d="M352.3,935.9
    			c0,0-4.5,3.2-6.4,7.3c-3.6,7.8-3.3,13.7-3.3,13.7"/>
    		<path d="M368.5,942
    			c0,0-3.3,2.2-6.2,8.2c-2.8,5.9-2.8,11.2-2.8,11.2"/>
    		<path d="M386.6,945
    			c0,0-4.1,4.2-5.7,7.7c-3,6.7-2.6,10.2-2.6,10.2"/>
    	</g>
    </g>
  );
};

RightLeg.propTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

const LeftLeg = ({color, pattern}) => {
  let path = `M556.7,824.7c15.5,36.6,12.2,64.3,11.5,74.2s-4.6,33.7-4.6,33.7s42.2,31.1,68.9,32.9
    c34.4,2.3,47.4-15.3,47.4-15.3s3.1-9.2-9.2-25.3c-12.2-16.1-27.5-20.7-30.6-29.8c-3.1-9.2-3.8-30.6,0.8-55.1
    c4.6-24.5,10.5-71.2,9.9-127c-0.5-54.4-23.3-116.1-23.3-116.1L503.4,756.3C503.4,756.3,541.7,789.5,556.7,824.7z`;

  return (
    <g id="left-leg">
      <path id="left-leg-white" fill={color} d={path} />
      <path id="left-leg-fill" fill={`url(#${pattern})`} d={path} />
      <g id="left-leg-lines"
          fill="none"
          strokeWidth="6"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10">
        <path d={path} />
        <path d="M661.8,935.9
          c0,0,4.5,3.2,6.4,7.3c3.6,7.8,3.3,13.7,3.3,13.7"/>
        <path d="M646.6,942.5
          c0,0,3.3,2.2,6.2,8.2c2.8,5.9,2.8,11.2,2.8,11.2"/>
        <path d="M627.5,948
          c0,0,4.1,4.2,5.7,7.7c3,6.7,2.6,10.2,2.6,10.2"/>
      </g>
    </g>
  );
};

LeftLeg.propTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default BearingGifts;
