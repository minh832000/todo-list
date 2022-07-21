export const initState = {};

const rootReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default rootReducer;
