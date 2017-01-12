export const stateReducer = (initialState, stateChanges) =>
  (state = initialState, action) => {
    if(stateChanges){
      const stateChange = stateChanges[action.type];
      if (stateChange) {
        return stateChange(state, action.payload);
      }
    }
    return state;
  };
