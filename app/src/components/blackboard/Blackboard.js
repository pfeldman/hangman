import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameAction from 'actions/gameAction';
import './Blackboard.scss';
import Gallow from 'components/gallow/Gallow';
import Word from 'components/word/Word';
import Letters from 'components/letters/Letters';

class Blackboard extends Component {
  componentDidMount() {
    const {gameAction} = this.props;

    gameAction.fetchGame();
  }

  render() {
    const {letters} = this.props;
    return (
      <div className="blackboard">
        <div className="blackboard__game">
          <div className="blackboard__game__top">
            <Gallow />
            <Letters />
          </div>
          <Word letters={letters} />
        </div>
        <button onClick={this.a}>Sarasa</button>
        <button onClick={this.b}>Lose</button>
      </div>
    );
  }
}

Blackboard.propTypes = {
  gameAction: PropTypes.object,
  letters: PropTypes.number
};

function mapStateToProps(state) {
  return {
    letters: state.game.letters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    gameAction: bindActionCreators(gameAction, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blackboard);
