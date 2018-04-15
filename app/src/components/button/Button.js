import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {drawInChalk, applySquareChalkStyle} from 'helpers/chalkHelper';

import './Button.scss';

class Button extends Component {
  componentDidMount() {
    this.drawSquare();
  }

  drawSquare(color = '255,255,255') {
    const {text, width, height} = this.props;
    const ctx = this.startButton.getContext('2d');

    drawInChalk(ctx, 0, 0, width, 0, 7, 500, color)
      .then(() => {
        drawInChalk(ctx, width, 0, width, height, 7, 500, color)
          .then(() => {
            drawInChalk(ctx, width, height, 0, height, 7, 500, color)
              .then(() => {
                drawInChalk(ctx, 0, height, 0, 0, 7, 500, color);
              });
          });
      });

    ctx.font = `${height / 2}px Arial`;
    ctx.fillStyle = "white";
    ctx.textAlign = 'center';
    ctx.fillText(text, width / 2, height - height / 3);
    applySquareChalkStyle(ctx,
      {
        x: 0,
        y: 0
      },
      {
        x: width,
        y: height
      },
      7);
  }

  render() {
    const {width, height, onClick, className} = this.props;
    return (
      <canvas
        width={width}
        height={height}
        className={`btn ${className}`}
        ref={canvas => this.startButton = canvas}
        onClick={onClick}
      />
    );
  }
}

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
