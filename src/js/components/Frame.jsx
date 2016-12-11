import React from 'react';

import Card from './Card';

class Frame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: Math.random()
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.randomNumber !== nextState.randomNumber);
  }

  render() {
    let colors = [
      "#4CAF50",
      "#AB47BC",
      "#64B5F6",
      "#FFC107",
      "#E91E63",
      "#FF5722",
      "#2196F3",
      '#4db6ac'
    ];

    for (let i = 0, n = colors.length; i < n; i++) {
      let index = Math.floor(Math.random() * (colors.length - i));
      colors.push(colors.splice(index, 1)[0]);
    }

    // Last color is the color of the card background
    let lastColor = colors[colors.length - 1];

    return (
      <div className="bc-Frame"
          style={{
            backgroundColor: lastColor
          }}>
        <Card ref="card"
            colors={colors} />
        <a id="bc-Frame__print"
            className="fab-icon"
            onClick={this._handleClickPrint.bind(this)}>
          <i className="material-icons">print</i>
        </a>
        <a id="bc-Frame__refresh"
            className="fab-icon"
            onClick={this._handleClickRefresh.bind(this)}>
          <i className="material-icons">refresh</i>
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

  _handleClickPrint(event) {
    let url = this.getDownloadHref();
    window.open(url, '_blank');
  }

  _handleClickRefresh(event) {
    this.setState({
      randomNumber: Math.random()
    });
  }
}

export default Frame;
