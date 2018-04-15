import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameAction from 'actions/gameAction';
import './Blackboard.scss';
import Gallow from 'components/gallow/Gallow';
import Word from 'components/word/Word';
import Header from 'components/head/Header';
import Letters from 'components/letters/Letters';
import {LOCAL_STORAGE_USER} from '/constants/Constants';

class Blackboard extends Component {
  componentWillMount() {
    const {loggedIn} = this.props;

    if (!loggedIn) {
      location.href = '/';
    }
  }

  componentDidMount() {
    const {gameAction} = this.props;

    gameAction.fetchGame();
  }

  render() {
    const {letters, loggedIn} = this.props;

    if (!loggedIn) return null;
    return (
      <div className="blackboard">
        <Header />
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
  letters: PropTypes.number,
  loggedIn: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    letters: state.game.letters,
    loggedIn: state.game.loggedIn
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
