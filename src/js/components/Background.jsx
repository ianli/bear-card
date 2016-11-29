import React from 'react';

const Background = ({color, pattern}) => {
  return (
    <g>
      <rect
          fill={color}
          width="960"
          height="1280"/>
      <rect
          fill={`url(#${pattern})`}
          width="960"
          height="1280"/>
    </g>
  );
};

Background.PropTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default Background;
