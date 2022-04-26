import React from 'react';

import { Container, Card, CardContent, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TodoItem = (props) => {
  const { id, todo, done } = props.todo;

  const todoClickHandler = () => {
    const passedId = props.todo.id;
    props.onItemClick(passedId);
  };

  return (
    <Container maxWidth='sm'>
      <Card
        variant='outlined'
        sx={{ marginBottom: '10px' }}
        onClick={() => (!done ? todoClickHandler() : () => false)}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography variant='p'>{todo}</Typography>
          <Typography variant='span'>
            {done && <CheckCircleOutlineIcon color='success' />}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TodoItem;
