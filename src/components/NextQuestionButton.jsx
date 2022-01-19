import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { actionIncreaseQuestionIndex } from '../actions';

class NextQuestionButton extends Component {
  handleQuestionsIndex = () => {
    const { increaseQuestionIndex, questionIndex, questions, history } = this.props;
    increaseQuestionIndex();
    if (questionIndex === questions.length - 1) history.push('/feedback');
  }

  render() {
    const { handleQuestionsIndex } = this;
    return (
      <div>
        <button
          data-testid="btn-next"
          type="button"
          onClick={ handleQuestionsIndex }
        >
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.player.questionIndex,
  questions: state.player.questions,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuestionIndex: () => dispatch(actionIncreaseQuestionIndex()),
});

NextQuestionButton.propTypes = {
  increaseQuestionIndex: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NextQuestionButton),
);
