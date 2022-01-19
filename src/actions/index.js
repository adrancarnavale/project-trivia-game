import { fetchApiToGetQuestions, fetchApiToGetToken } from '../services/api';

const UPDATE_PLAYER_INFOS = 'UPDATE_PLAYER_INFOS';

export const actionUpdatePlayerInfos = ({ nome, email }) => ({
  type: UPDATE_PLAYER_INFOS,
  nome,
  email,
});

export const GET_TOKEN = 'GET_TOKEN';

const actionGetToken = ({ token }) => ({
  type: GET_TOKEN,
  token,
});

const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

export const actionSaveQuestions = (data) => ({
  type: SAVE_QUESTIONS,
  questions: data.results,
});

export const actionFetchApiToGetPlayerToken = (playerNameAndEmail) => (dispatch) => (
  fetchApiToGetToken()
    .then((response) => {
      dispatch(actionUpdatePlayerInfos(playerNameAndEmail));
      dispatch(actionGetToken(response));
    })
    .catch((error) => console.log(error))
);

export const actionFetchApiToGetQuizQuestions = (
  quantity, playerToken,
) => async (dispatch) => {
  const INVALID_TOKEN = 3;
  const DEFAULT_QTY = 5;
  const results = await fetchApiToGetQuestions(quantity, playerToken);
  if (results.response_code === INVALID_TOKEN) {
    const newToken = await fetchApiToGetToken();
    const newQuestions = await fetchApiToGetQuestions(DEFAULT_QTY, newToken.token);
    dispatch(actionGetToken(newToken));
    dispatch(actionSaveQuestions(newQuestions));
  } else {
    dispatch(actionSaveQuestions(results));
  }
};

const UPDATE_SCORE = 'UPDATE_SCORE';
export const actionUpdateScore = (score) => ({
  type: UPDATE_SCORE,
  score,
});

const INCREASE_QUESTION_INDEX = 'INCREASE_QUESTION_INDEX';
export const actionIncreaseQuestionIndex = () => ({
  type: INCREASE_QUESTION_INDEX,
});

const UPDATE_ASSERTIONS = 'UPDATE_ASSERTIONS';
export const actionUpdateAssertions = (answerCondition) => ({
  type: UPDATE_ASSERTIONS,
  answerCondition,
});

export default actionGetToken;
