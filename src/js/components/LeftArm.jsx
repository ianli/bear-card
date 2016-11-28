import React from 'react';

const LeftArm = ({color, pattern}) => {
  let path = `M574.8,388.1c-10.3,3.1-33.5,1.1-51.9,4.2c-18.4,3.1-37.4,11.3-39.4,32.2
    c-2,20.9,11.3,45,71.7,41.4c60.4-3.6,108.5-23.1,111.9-54.7c3.4-32.3-21.6-43.4-34.3-43.4C611.7,367.7,595.6,381.8,574.8,388.1z`;

  return (
    <g id="left-hand">
      {/* Fill */}
    	<path id="left-hand-white" fill={color} d={path} />
      {/* Pattern */}
    	<path id="left-hand-fill" fill={`url(#${pattern})`} d={path} />
      {/* Lines */}
    	<g id="left-hand-lines"
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10" >
    		<path d={path} />
    		<path d="M504.9,446.4
    			c0,0-5.4-0.2-9.5-1.9c-7.9-3.5-11-8.9-11-8.9"/>
    		<path d="M503.4,429.2
    			c0,0-5-0.2-8.8-1.8c-8.1-3.4-10.1-8.3-10.1-8.3"/>
    		<path d="M513.5,412.9
    			c0,0-4.5-0.3-8.1-1.7c-7.6-3-9.3-7.6-9.3-7.6"/>
    	</g>
    </g>
  );
};

LeftArm.PropTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default LeftArm;
