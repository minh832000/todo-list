const searchFilterChange = (state) => {
  const { filters } = state;
  const { search } = filters;
  return search;
};

const todosSelector = (state) => {
  const { todos } = state;
  return todos;
};

// const todosRemainingSelector = (state) => {
//   const searchInput = searchFilterChange(state);

//   const todos = todosSelector(state);

//   return todos.filters(todo => {
//     return
//   })
// }

export { todosSelector };
