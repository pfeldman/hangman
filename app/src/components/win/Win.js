import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameAction from 'actions/gameAction';
import Button from 'components/button/Button';

import './Win.scss';

class Win extends Component {
  render() {
    const {gameAction} = this.props;
    return (
      <div className="lost">
        <h1 className="lost__oops">Super!</h1>
        <h2 className="lost__title">You have won!!</h2>
        <div>
          <Button width={300} height={100} onClick={gameAction.playAgain}>Play again?</Button>
        </div>
      </div>
    );
  }
}

Win.propTypes = {
  gameAction: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    gameAction: bindActionCreators(gameAction, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Win);
