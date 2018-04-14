import React, { Component } from 'react';
import './Blackboard.scss';
import Gallow from 'components/gallow/Gallow';
import Word from 'components/word/Word';

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
        <Gallow loseSteps={this.state.lose} />
        <Word letters={4} matches={this.state.matches} />
        <button onClick={this.a}>Sarasa</button>
        <button onClick={this.b}>Lose</button>
      </div>
    );
  }
}

export default Blackboard;
