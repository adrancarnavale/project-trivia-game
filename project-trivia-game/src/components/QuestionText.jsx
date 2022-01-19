import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class QuestionText extends Component {
  render() {
    const { questions, questionIndex } = this.props;
    return (
      <div data-testid="question-text">
        {
          questions.map(
            (question) => question.question,
          ).find(
            (item, index) => index === questionIndex && (
              <h3>{item}</h3>
            ),
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.player.questions,
  questionIndex: state.player.questionIndex,
});

QuestionText.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(QuestionText);
