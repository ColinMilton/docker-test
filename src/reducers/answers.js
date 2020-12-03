const initialState = [false, false, false, false, false];

export const answersReducer = (state = initialState, action) => {
  let answers = [...state];
  switch (action.type) {
    case "UPDATE_ANSWER":
      const { id, isCorrect } = action.payload;
      answers[id] = isCorrect;
      return [...(state = answers)];
    default:
      return state;
  }
};
