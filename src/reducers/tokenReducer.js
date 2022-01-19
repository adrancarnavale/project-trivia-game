let INITIAL_STATE = '';

const handleToken = (token) => {
  INITIAL_STATE = token;
  localStorage.setItem('token', token);
  return INITIAL_STATE;
};

const token = (state = INITIAL_STATE, action) => {
  const tokenObject = {
    GET_TOKEN: () => handleToken(action.token),
    DEFAULT: () => state,
  };

  return (tokenObject[action.type] || tokenObject.DEFAULT)();
};

export default token;
