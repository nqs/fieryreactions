export const stateReducer = (initialState, stateChanges) =>
  (state = initialState, action) => {
    const stateChange = stateChanges[action.type];
    if (stateChange) {
      return stateChange(action.payload);
    }

    return state;
  };
