import React from 'react';

const Head = ({color, pattern}) => {
  let path = `M548.3,230.4c0,0-19.9-31-40.3-48.4s-49.1-33.3-90.6-31.7c-41.4,1.5-53.2,20-55.8,20
    c-2.6,0-12.8-6.1-27.1-4.6c-14.3,1.5-25.1,8.2-25.1,11.8c0,3.6,17.9,15.4,20,20.5s-0.4,10.8,0,17.9c0.5,9.7,2.6,17.4,3.1,23
    c0.5,6.1-0.5,18.9-0.5,18.9s-4,7.5-2,13.3c2.6,7.7,14.2,14.8,14.2,14.8s-3.4,28.4-3.9,40.9c0,0-1.6,20.7,2,29.8
    c2.5,6.2,14.8,8.5,18.8,3.9c0,0,7.8,4.7,16.5,1.3l4.7-2.9c0,0,4.5,2.8,8.5,1.8c6.1-1.5,13.8-8.7,21-15.4c7.2-6.6,18.5-13.5,24-14.9
    c5.5-1.4,33.5-0.1,50.5-16.2c21.6-20.5,24.2-56,24.2-56s13.2-2.6,22.5-9.9C542.3,241,548.3,230.4,548.3,230.4z`;

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
    		<path d="M428.2,271.7c0,7.8-6.3,14.1-14.1,14.1c-7.8,0-14.1-6.3-14.1-14.1"/>
    		<path d="M418.9,218.4c0,0,11.3-25.1,27.1-24.6c19.9,0.6,23,25.6,23,25.6"/>
    		<path d="M361,360.3c0,0,1.1-1.5,2.1-3.4c0.9-1.9,1.7-4,1.7-4"/>
    		<path d="M382.3,358.8c0,0,4.6-3.8,8.5-8.2c3.9-4.3,9.2-11,9.2-11"/>
    	</g>
    </g>
  );
};

Head.PropTypes = {
  color: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired
};

export default Head;
