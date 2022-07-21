import { ADD_TODO, SEARCH_TODO } from './constants';

export const initState = {
  filters: {
    search: '',
    status: 'all',
    priorites: [],
  },
  todos: [],
};

const rootReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    }
    case SEARCH_TODO: {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: payload,
        },
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
