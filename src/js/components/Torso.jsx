import React from 'react';

const Torso = ({color, pattern}) => {
  let path = `M626.3,435.5c0,0,14.2,69.8,7.3,126.8C626.3,623,605,661.6,581,691
    c-27.3,33.3-77.6,65.3-77.6,65.3s-36.5-19.7-61.1-46.9C417.7,682.3,395,647,395,647l108.4-190.4L626.3,435.5z`;

  return (
    <g>
      {/* Background */}
    	<path fill={color} d={path} />
      {/* Pattern */}
    	<path fill={`url(#${pattern})`} d={path} />
      {/* Lines */}
    	<path
          fill="none"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          d={path} />
    </g>
  );
};

Torso.propTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default Torso;
