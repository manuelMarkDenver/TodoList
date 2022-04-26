import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos;

  console.log(props);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onItemClick={props.onItemClick} />
      ))}
    </div>
  );
};

export default TodoList;
