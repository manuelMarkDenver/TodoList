import React, { useState } from 'react';

import CustomButton from '../buttons/CustomButton';

import { Container, Box, TextField, Button } from '@mui/material';

const TodoAddForm = (props) => {
  const initialState = {
    todo: '',
    done: false,
  };

  const [newTodo, setNewTodo] = useState(initialState);

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

    console.log(newTodo);

    if (newTodo.todo === '' || newTodo.todo === null) {
      return alert('Todo textfield cannot be empoty');
    } else {
      console.log('here at submit');
      props.onSaveTodoData(newTodo);
      setNewTodo(initialState);
      document.querySelector('#todoTextField').value = '';
    }
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
