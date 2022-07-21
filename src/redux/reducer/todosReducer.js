import { ADD_TODO } from '../constants';

const initState = [];

const todosReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === ADD_TODO) {
    return [...state, payload];
  }
};

export default todosReducer;
