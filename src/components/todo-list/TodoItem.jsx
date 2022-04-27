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

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
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
          onClick={() => (!action ? todoClickHandler() : () => false)}
          // onClick={todoClickHandler}
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
            <Grid item xs={3}>
              <Typography variant='span'>
                <Button
                  type={'submit'}
                  variant='contained'
                  size='large'
                  color='delete'
                  sx={{
                    '&:hover': {
                      backgroundColor: '#00a6c0',
                      opacity: '0.8',
                    },
                  }}
                  onClick={handleEditOpen}
                >
                  EDIT
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={3}>
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
                  onClick={handleDeleteOpen}
                >
                  DELETE
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Edit Modal */}
      <Modal
        open={editOpen}
        onClose={handleEditClose}
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
            setEditOpen={setEditOpen}
          />
        </Box>
      </Modal>

      {/* Delete Modal */}
      <Modal
        open={deleteOpen}
        onClose={handleDeleteClose}
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
            ARE YOU SURE YOU WANT TO DELETE?
          </Typography>

          <Box
            sx={{
              display: 'flex',
            }}
          >
            <CustomButton
              action={'DELETE'}
              data={editedTodo}
              id={id}
              onButtonClick={props.onButtonClick}
              setDeleteOpen={setDeleteOpen}
            />

            <Button
              sx={{
                backgroundColor: '#808080',
                color: '#fff',
                marginLeft: '5px',
                '&:hover': {
                  color: '#000',
                  backgroundColor: '#fafafa',
                },
              }}
              onClick={handleDeleteClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default TodoItem;
