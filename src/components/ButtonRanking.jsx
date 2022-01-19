import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class ButtonRanking extends Component {
  handleRankingClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { handleRankingClick } = this;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ handleRankingClick }
        >
          Ranking
        </button>
      </div>
    );
  }
}

ButtonRanking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(ButtonRanking);
