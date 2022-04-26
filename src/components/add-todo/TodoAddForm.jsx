import React, { useState } from 'react';

import CustomButton from '../buttons/CustomButton';

import { Container, Box, TextField, Button } from '@mui/material';

const TodoAddForm = (props) => {
  const [newTodo, setNewTodo] = useState({
    todo: '',
    done: false,
  });

  const handleOnChange = (e) => {
    const newData = {
      ...newTodo,
      todo: e.target.value,
    };
    setNewTodo(newData);
    console.log(newTodo);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.onSaveTodoData(newTodo);
  };

  return (
    <Container
      component='form'
      onSubmit={onSubmitHandler}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          id='todoTextField'
          label='Add Todo'
          placeholder='Enter your todo here'
          defaultValue={newTodo.todo}
          onChange={handleOnChange}
        />
        <Button
          type={'submit'}
          variant='contained'
          size='large'
          color='add'
          sx={{
            height: '50px',
            '&:hover': {
              backgroundColor: '#11a783',
              opacity: '0.8',
            },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default TodoAddForm;
