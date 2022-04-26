import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onItemClick={props.onItemClick}
          onButtonClick={props.onButtonClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
