import React, { Component } from 'react';
import './Blackboard.scss';
import Gallow from 'components/gallow/Gallow';

class Blackboard extends Component {
  render() {
    return (
      <div className="blackboard">
        <Gallow />
      </div>
    );
  }
}

export default Blackboard;
