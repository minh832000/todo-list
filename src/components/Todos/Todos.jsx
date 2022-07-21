import { useSelector } from 'react-redux/es/exports';
import { useMemo } from 'react';

import { selectors } from '@/redux';

const Todos = () => {
  const todos = useSelector(selectors.todosSelector);

  const computingIsLoaded = useMemo(() => {
    const { length } = todos;
    return length > 0;
  }, [todos]);

  return (
    <div className="w-full h-28 overflow-y-auto">
      {computingIsLoaded ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex items-center justify-between w-full mb-3">
                <input type="checkbox" />
                <p>{todo.name}</p>
                <p>{todo.priority}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default Todos;
