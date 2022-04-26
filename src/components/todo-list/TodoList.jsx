import React from 'react';
import TodoItem from './TodoItem';

import { Container } from '@mui/material';

const TodoList = (props) => {
  const todos = props.todos;

  return (
    <Container maxWidth='xl'>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onItemClick={props.onItemClick}
          onButtonClick={props.onButtonClick}
        />
      ))}
    </Container>
  );
};

export default TodoList;
