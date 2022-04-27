import React from 'react';
import TodoItem from './TodoItem';

import { Container, Box, Typography } from '@mui/material';

const TodoList = (props) => {
  const todos = props.todos;

  return (
    <Container maxWidth='xl'>
      {todos.length === 0 ? (
        <Box>
          <Typography variant='h6' component='h2'>
            List is empty. Add one now!
          </Typography>
        </Box>
      ) : (
        todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onItemClick={props.onItemClick}
            onButtonClick={props.onButtonClick}
          />
        ))
      )}
    </Container>
  );
};

export default TodoList;
