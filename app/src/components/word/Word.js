import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {drawInChalk, applySquareChalkStyle} from 'helpers/chalkHelper';
import './Word.scss';

class Word extends Component {
  constructor() {
    super();
    this.canvasWidth = window.innerWidth;
    this.letterPosition = [];
    this.positions = [];
    this.width;
  }

  componentDidMount() {
    const {letters} = this.props;

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 200);

    const space = 30;
    this.width = this.canvasWidth / letters - space;
    if (this.width > 100) this.width = 100;
    const startPoint = (this.canvasWidth / 2) - ((letters * this.width - space) / 2) - space;

    if (letters > 0) {
      this.renderLetter(ctx, 0, space, this.width, startPoint);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {matches} = nextProps;

    matches.map(match => {
      if (this.positions.indexOf(match.position) === -1) {
        this.positions.push(match.position);
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${this.width}px Walter Turncoat`;
        ctx.fillStyle = "white";
        ctx.fillText(match.letter.toUpperCase(), this.letterPosition[match.position], 90);
        applySquareChalkStyle(ctx,
          {
            x: this.letterPosition[match.position],
            y: 0
          },
          {
            x: this.letterPosition[match.position] + this.width,
            y: 90
          },
          7);
      }
    });
  }

  renderLetter(ctx, letterIndex, space, width, startPoint) {
    const {letters} = this.props;
    this.letterPosition.push(startPoint + space);
    drawInChalk(ctx, startPoint + space, 100, startPoint + width, 100)
      .then(() => {
        if (letterIndex + 1 < letters) {
          this.renderLetter(ctx, letterIndex + 1, space, width, startPoint + width);
        }
      });
  }

  render() {
    return (
      <div className="word">
        <canvas width={this.canvasWidth} height="150" ref={canvas => this.canvas = canvas}/>
      </div>
    );
  }
}

Word.propTypes = {
  letters: PropTypes.number.isRequired,
  matches: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.number,
    letter: PropTypes.string
  }))
};

export default Word;
