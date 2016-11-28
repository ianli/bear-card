import React from 'react';

const RightArm = ({color, pattern}) => {
  let path = `M409,347.2c0,0-37.3,45.1-17.1,86.6c17,35,51.2,44,63.3,55.5
    c4,3.8,25.7,24.5,6.3,48.2c-23.2,28.2-64.3,6.5-94.6-18.3c-37.4-30.5-50.8-63.4-53.7-94.6c-6.7-70.3,30-108.7,30-108.7L409,347.2z`;

  return (
    <g>
      {/* Fill */}
    	<path fill={color} d={path} />
      {/* Pattern */}
      <path fill={`url(#${pattern})`} d={path} />
      {/* Lines */}
    	<g fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10">
    		<path d={path} />
    		<path d="M431.5,538.2
    			c0,0,4,3.9,8.3,5c8.3,2.1,14.1,0.8,14.1,0.8"/>
    		<path d="M442.3,528.1
    			c0,0,2.7,2.9,9.2,4.6c6.3,1.7,11.5,0.8,11.5,0.8"/>
    		<path d="M449.8,514.7
    			c0,0,4.9,3.3,8.6,4.2c7.1,1.8,10.5,0.7,10.5,0.7"/>
    	</g>
    </g>
  );
};

RightArm.PropTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default RightArm;
