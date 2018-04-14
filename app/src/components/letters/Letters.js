import React, { Component } from 'react';
import Letter from 'components/letter/Letter';
import './Letters.scss';

class Letters extends Component {
  render() {
    const positions = new Array(13); // amount of letters
    positions.fill(0, 0);
    return (
      <div className="letters">
        <div className="letters__column">
          {positions.map((position, index) => (
            <Letter key={`letter1-${index}`} letter={String.fromCharCode(index + 65)} />
          ))}
        </div>
        <div className="letters__column">
          {positions.map((position, index) => (
            <Letter key={`letter2-${index}`} letter={String.fromCharCode(index + 65 + 13)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Letters;
