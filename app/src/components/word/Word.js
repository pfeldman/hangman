import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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

  componentWillReceiveProps(nextProps) {
    const {updated, letters, error, positions, letter} = nextProps;

    if (updated !== this.props.updated && !error) {
      positions.forEach(position => {
        if (this.positions.indexOf(position) === -1) {
          this.positions.push(position);
          const ctx = this.canvas.getContext('2d');
          ctx.font = `${this.width}px Walter Turncoat`;
          ctx.fillStyle = "white";
          ctx.fillText(letter.toUpperCase(), this.letterPosition[position], 90);
          applySquareChalkStyle(ctx,
            {
              x: this.letterPosition[position],
              y: 0
            },
            {
              x: this.letterPosition[position] + this.width,
              y: 90
            },
            7);
        }
      });
    }

    if (this.props.letters !== letters) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, 500, 200);

      const space = 30;
      this.width = this.canvasWidth / letters - space;
      if (this.width > 100) this.width = 100;
      const startPoint = (this.canvasWidth / 2) - ((letters * this.width - space) / 2) - space;
      if (letters > 0) {
        this.renderLetter(ctx, 0, space, this.width, startPoint, letters);
      }
    }
  }

  renderLetter(ctx, letterIndex, space, width, startPoint, letters) {
    this.letterPosition.push(startPoint + space);
    drawInChalk(ctx, startPoint + space, 100, startPoint + width, 100)
      .then(() => {
        if (letterIndex + 1 < letters) {
          this.renderLetter(ctx, letterIndex + 1, space, width, startPoint + width, letters);
        }
      });
  }

  render() {
    return (
      <div className="word">
        <canvas width={this.canvasWidth} height="150" ref={canvas => this.canvas = canvas} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    updated: state.letter.timeStamp,
    error: state.letter.error,
    letter: state.letter.letter,
    positions: state.letter.positions
  };
}

Word.propTypes = {
  letters: PropTypes.number,
  updated: PropTypes.number,
  error: PropTypes.number,
  letter: PropTypes.string,
  positions: PropTypes.arrayOf(PropTypes.number)
};

export default connect(
  mapStateToProps
)(Word);
