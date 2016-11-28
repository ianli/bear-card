import React from 'react';

const LeftLeg = ({color, pattern}) => {
  let path = `M556.7,824.7c15.5,36.6,12.2,64.3,11.5,74.2s-4.6,33.7-4.6,33.7s42.2,31.1,68.9,32.9
    c34.4,2.3,47.4-15.3,47.4-15.3s3.1-9.2-9.2-25.3c-12.2-16.1-27.5-20.7-30.6-29.8c-3.1-9.2-3.8-30.6,0.8-55.1
    c4.6-24.5,10.5-71.2,9.9-127c-0.5-54.4-23.3-116.1-23.3-116.1L503.4,756.3C503.4,756.3,541.7,789.5,556.7,824.7z`;

  return (
    <g>
      {/* Fill */}
      <path fill={color} d={path} />
      {/* Pattern */}
      <path fill={`url(#${pattern})`} d={path} />
      {/* Lines */}
      <g fill="none"
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

export default LeftLeg;
