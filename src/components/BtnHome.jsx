import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class BtnHome extends Component {
  handleBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { handleBtn } = this;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ handleBtn }
        >
          Home
        </button>
      </div>
    );
  }
}

BtnHome.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(BtnHome);
