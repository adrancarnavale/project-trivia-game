import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class QuestionCategory extends Component {
  render() {
    const { questions, questionIndex } = this.props;
    return (
      <div data-testid="question-category">
        {
          questions.map(
            (question) => question.category,
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

QuestionCategory.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(QuestionCategory);
