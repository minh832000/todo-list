import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';

import { actions } from '@/redux';

const TodoInput = () => {
  const [formData, setFormData] = useState({
    todoInput: '',
    priorityInput: 'Medium',
  });

  const dispatch = useDispatch();

  const todoInputRef = useRef();

  const handleInputChange = (e) => {
    const { name: fieldName, value: fieldVal } = e.target;
    setFormData((oldVals) => {
      return {
        ...oldVals,
        [fieldName]: fieldVal,
      };
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const { todoInput, priorityInput } = formData;
    const todoItem = {
      id: uuidV4(),
      name: todoInput,
      priority: priorityInput,
      completed: false,
    };

    dispatch(actions.addTodo(todoItem));

    // cleaner
    setFormData({ todoInput: '', priorityInput: 'Medium' });
    todoInputRef.current.focus();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            className="border outline-none"
            name="todoInput"
            ref={todoInputRef}
            value={formData.todoInput}
            onChange={handleInputChange}
          />
          <select
            name="priorityInput"
            defaultValue={formData.priorityInput}
            onChange={handleInputChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
