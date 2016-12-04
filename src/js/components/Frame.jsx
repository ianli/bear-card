import React from 'react';

import Card from './Card';

class Frame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bc-Frame">
        <Card />
      </div>
    )
  }
}

export default Frame;
