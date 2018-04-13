import React, {Component} from 'react';
import {drawInChalk} from 'helpers/chalkHelper';
import './Gallow.scss';

class Gallow extends Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d');

    drawInChalk(ctx, 50, 390, 250, 390, 7)
      .then(() => {
        drawInChalk(ctx, 150, 390, 150, 100, 7)
          .then(() => {
            drawInChalk(ctx, 150, 100, 290, 100, 7)
              .then(() => {
                drawInChalk(ctx, 290, 100, 290, 150, 7)
              });
          });
      });
  }

  render() {
    return (
      <div className="gallow">
        <canvas width="300" height="400" ref={canvas => this.canvas = canvas}/>
      </div>
    );
  }
}

export default Gallow;
