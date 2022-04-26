import React from 'react';
import { Typography } from '@mui/material';
import TodoList from './TodoList';

const TodoContainer = (props) => {
  return (
    <div>
      <Typography
        variant='h1'
        sx={{
          fontSize: '3rem',
          marginBottom: '20px',
        }}
      >
        Todo List App
      </Typography>
      <TodoList todos={props.todos} onItemClick={props.onItemClick} />
    </div>
  );
};

export default TodoContainer;
