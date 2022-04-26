import React from 'react';
import { Typography } from '@mui/material';
import TodoList from './TodoList';

const TodoContainer = (props) => {
  return (
    <div>
      <Typography variant='h1'>Todo List App</Typography>
      <TodoList todos={props.todos} />
    </div>
  );
};

export default TodoContainer;
