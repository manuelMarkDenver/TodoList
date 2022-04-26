import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Container, Grid, Typography } from '@mui/material';
import TodoList from './TodoList';
import TodoAddForm from '../add-todo/TodoAddForm';

const TodoContainer = (props) => {
  const saveTodoDataHandler = (enteredTodoData) => {
    console.log({ enteredTodoData });

    const todoData = {
      ...enteredTodoData,
      id: uuidv4(),
    };

    props.onAddTodo(todoData);
  };

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

      <TodoAddForm
        onButtonClick={props.onButtonClick}
        onSaveTodoData={saveTodoDataHandler}
      />

      <Container maxWidth='md' sx={{ padding: '30px 0' }}>
        <Grid container spacing={1} sx={{ marginBottom: '20px' }}>
          <Grid item xs={3}>
            <Typography variant='p'>Todo Item</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='p'>Status</Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <TodoList
          todos={props.todos}
          onItemClick={props.onItemClick}
          onButtonClick={props.onButtonClick}
        />
      </Container>
    </div>
  );
};

export default TodoContainer;
