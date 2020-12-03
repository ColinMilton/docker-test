const initialState = ["", "", "", "", ""];

export const inputReducer = (state = initialState, action) => {
  const inputValues = [...state];
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      const { id, value } = action.payload;
      inputValues[id] = value;
      return [...(state = inputValues)];
    default:
      return state;
  }
};
