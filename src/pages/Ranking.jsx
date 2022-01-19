import React, { Component } from 'react';
import BtnHome from '../components/BtnHome';

class Ranking extends Component {
  render() {
    return (
      <div>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <BtnHome />
      </div>
    );
  }
}

export default Ranking;
