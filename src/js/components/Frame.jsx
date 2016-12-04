import React from 'react';

import Card from './Card';

class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloadHref: null
    };
  }

  componentDidMount() {
    this.setState({
      downloadHref: this.getDownloadHref()
    });
  }

  render() {
    return (
      <div className="bc-Frame">
        <Card ref="card" />
        <a href={this.state.downloadHref}
            target="_blank">
          <i className="material-icons">print</i>
        </a>
      </div>
    );
  }

  getDownloadHref() {
    var cardNode = this.refs.card;
    var svgNode = cardNode.refs.svg;
    var svgCode = '<?xml version="1.0" encoding="utf-8"?>' +
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
        svgNode.outerHTML;

    return 'data:image/svg+xml;utf8,' + svgCode;
  }

  _handleClickDownload(event) {
    var card = this.refs.card;
    var svg = card.refs.svg;

    svg.outerHTML;
  }
}

export default Frame;
