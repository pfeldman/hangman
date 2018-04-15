import React, { Component } from 'react';
import {drawInChalk, applySquareChalkStyle} from 'helpers/chalkHelper';
import Button from 'components/button/Button';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Hangman</h1>
        <div>
          <Button
            width={300}
            height={100}
            className="home__start"
            text="PLAY"
          />
        </div>
        <div>
          <Button
            width={200}
            height={50}
            className="home__stats"
            text="STATISTICS"
          />
        </div>
      </div>
    );
  }
}

export default Home;
