import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Letter.scss';

class Letter extends Component {
  constructor() {
    super();
    this.state = {
      used: false
    };

    this.handleLetterClick = this.handleLetterClick.bind(this);
  }

  handleLetterClick() {
    const {used} = this.state;

    if (!used) {
      this.setState({
        used: true
      });
    }
  }

  render() {
    const {letter} = this.props;
    return (
      <span
        className={`letter ${this.state.used ? 'letter--used' : ''}`}
        onClick={this.handleLetterClick}
      >
        {letter}
      </span>
    );
  }
}

Letter.propTypes = {
  letter: PropTypes.string
};

export default Letter;
