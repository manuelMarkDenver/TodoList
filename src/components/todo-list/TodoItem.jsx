import React, { useState } from 'react';

import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
  Button,
  TextField,
} from '@mui/material';
import CustomButton from '../buttons/CustomButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

const TodoItem = (props) => {
  const { id, todo, done: action } = props.todo;

  const initialState = {
    id: id,
    todo: todo,
    done: action,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editedTodo, setEditedTodo] = useState(initialState);

  const todoClickHandler = (e) => {
    const passedId = props.todo.id;
    props.onItemClick(passedId);
  };

  const handleOnChange = (e) => {
    const newData = {
      ...editedTodo,
      todo: e.target.value,
    };
    setEditedTodo(newData);
    console.log(editedTodo);
  };

  return (
    <Container maxWidth='xl'>
      <Card variant='outlined' sx={{ marginBottom: '10px' }}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          // onClick={() => (!done ? todoClickHandler() : () => false)}
          onClick={todoClickHandler}
        >
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Typography variant='p'>{todo}</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='p'>
                {action ? 'Done' : 'Not yet done'}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='span'>
                {
                  <CustomButton
                    data={editedTodo}
                    action={action}
                    id={id}
                    onButtonClick={props.onButtonClick}
                  />
                }
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='span'>
                {
                  <CustomButton
                    action={'DELETE'}
                    data={editedTodo}
                    id={id}
                    onButtonClick={props.onButtonClick}
                  />
                }
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='span'>
                <Button
                  type={'submit'}
                  variant='contained'
                  size='large'
                  color='edit'
                  sx={{
                    '&:hover': {
                      backgroundColor: '#00a6c0',
                      opacity: '0.8',
                    },
                  }}
                  onClick={handleOpen}
                >
                  EDIT
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box component='form' sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ marginBottom: '20px' }}
          >
            EDIT
          </Typography>
          <TextField
            id='todoTextField'
            label='Add Todo'
            placeholder='Enter your todo here'
            defaultValue={todo}
            onChange={handleOnChange}
            sx={{
              marginBottom: '10px',
            }}
          />
          <CustomButton
            data={editedTodo}
            action={'EDIT'}
            onButtonClick={props.onButtonClick}
            setOpen={setOpen}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default TodoItem;
