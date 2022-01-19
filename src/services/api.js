const TOKEN_URL = 'https://opentdb.com/api_token.php?command=request';

export const fetchApiToGetToken = async () => {
  const response = await fetch(TOKEN_URL);
  const JSON = await response.json();
  return JSON;
};

const QUESTIONS_URL_FIRST = 'https://opentdb.com/api.php?amount=';
const QUESTIONS_URL_LAST = '&token=';

export const fetchApiToGetQuestions = async (qty, token) => {
  const response = await fetch(
    `${QUESTIONS_URL_FIRST}${qty}${QUESTIONS_URL_LAST}${token}`,
  );
  const JSON = await response.json();
  return JSON;
};
