import { SEARCH_TODO } from '../constants';

const initState = {
  search: '',
  status: 'All',
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_TODO: {
      return {
        ...state,
        search: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;
