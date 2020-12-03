const UPDATE_ANSWER = "UPDATE_ANSWER";
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

export const updateAnswer = (id, isCorrect) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ANSWER,
      payload: { id, isCorrect },
    });
  };
};

export const changeInputValue = (id, value) => {
  return (dispatch) => {
    dispatch({
      type: CHANGE_INPUT_VALUE,
      payload: { id, value },
    });
  };
};
