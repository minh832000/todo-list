import { ADD_TODO, SEARCH_TODO } from './constants';

const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      ...data,
    },
  };
};

const searchTodoChange = (data) => {
  return {
    type: SEARCH_TODO,
    payload: data,
  };
};

export { addTodo, searchTodoChange };
