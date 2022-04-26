import React from 'react';

import { Box, Container, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem = (props) => {
  const { id, todo, done } = props.todo;

  console.log({ id, todo, done });
  return (
    <Container maxWidth='sm'>
      <Paper elevation={24} variant='outlined' sx={{ marginBottom: '10px' }}>
        <p>{todo}</p>
        <span>{done && <DeleteIcon />}</span>
      </Paper>
    </Container>
  );
};

export default TodoItem;
