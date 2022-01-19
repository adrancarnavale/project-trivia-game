import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class BtnRanking extends Component {
  handleBtn = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { handleBtn } = this;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ handleBtn }
        >
          Ranking
        </button>
      </div>
    );
  }
}

BtnRanking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BtnRanking);
