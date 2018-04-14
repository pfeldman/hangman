import React, { Component } from 'react';
import './Blackboard.scss';
import Gallow from 'components/gallow/Gallow';
import Word from 'components/word/Word';
import Letters from 'components/letters/Letters';

class Blackboard extends Component {
  constructor() {
    super();

    this.state = {
      matches: [],
      lose: 0
    };
    this.a = this.a.bind(this);
    this.b = this.b.bind(this);
  }

  a() {
    this.setState({
      matches: [
        {
          position: 1,
          letter: 'c'
        }
      ]
    });
  }

  b() {
    this.setState({
      lose: this.state.lose + 1
    });
  }

  render() {
    return (
      <div className="blackboard">
        <div className="blackboard__game">
          <div className="blackboard__game__top">
            <Gallow loseSteps={this.state.lose} />
            <Letters />
          </div>
          <Word letters={4} matches={this.state.matches} />
        </div>
        <button onClick={this.a}>Sarasa</button>
        <button onClick={this.b}>Lose</button>
      </div>
    );
  }
}

export default Blackboard;
