import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class PlayAgain extends Component {
  handlePlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { handlePlayAgain } = this;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ handlePlayAgain }
        >
          Play Again
        </button>
      </div>
    );
  }
}

PlayAgain.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(PlayAgain);
