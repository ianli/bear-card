import React from 'react';

const RightLeg = ({color, pattern}) => {
  let path = `M360,703.9c0,0-1.8,39.1,2.3,71.9c4.6,36.7,19.9,71.9,19.9,89.5
    c0,17.6-1.5,32.9-9.2,39.8s-24.5,13-32.9,24.5c-8.4,11.5-6.9,23-6.9,23s21.2,14.5,52.8,12.2c32.1-2.3,65.8-29.1,65.8-29.1
    s-0.8-20.7-1.5-34.4s-2.9-39.7,5.4-67.3c14-46.9,47.7-77.6,47.7-77.6L395,647L360,703.9z`;

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

export default RightLeg;
