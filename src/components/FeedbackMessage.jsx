import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class FeedbackMessage extends Component {
  render() {
    const { assertions } = this.props;
    const MINIMAL_ASSERTS_REQUIRED = 3;
    return (
      <div>
        <p
          data-testid="feedback-text"
        >
          {
            assertions >= MINIMAL_ASSERTS_REQUIRED ? 'Well Done!' : 'Could be better...'
          }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

FeedbackMessage.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(FeedbackMessage);
