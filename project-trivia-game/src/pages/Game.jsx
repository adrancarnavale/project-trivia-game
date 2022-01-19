import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  actionFetchApiToGetQuizQuestions,
  actionSaveQuestions,
} from '../actions';
import GameHeader from '../components/GameHeader';
import MountAndRandomizeQuestions from '../components/MountAndRandomizeQuestions';
import QuestionCategory from '../components/QuestionCategory';
import QuestionText from '../components/QuestionText';
import Timer from '../components/Timer';

class Game extends Component {
  loadQuestions = async () => {
    const DEFAULT_QTY = 5;
    const { getQuestions, playerToken } = this.props;
    await getQuestions(DEFAULT_QTY, playerToken);
  };

  componentDidMount = () => {
    const { loadQuestions } = this;
    loadQuestions();
  };

  render() {
    const { questions } = this.props;
    return (
      <div>
        <GameHeader />
        <Timer />
        <QuestionCategory />
        <QuestionText />
        <div data-testid="answer-options">
          {
            questions.length > 0 && <MountAndRandomizeQuestions />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerToken: state.token,
  questions: state.player.questions,
});

const mapDispatchToProps = (dispatch) => ({
  saveQuestions: (questions) => dispatch(actionSaveQuestions(questions)),
  getQuestions:
    (quantity, playerToken) => dispatch(
      actionFetchApiToGetQuizQuestions(quantity, playerToken),
    ),
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  playerToken: PropTypes.string.isRequired,
  getQuestions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
