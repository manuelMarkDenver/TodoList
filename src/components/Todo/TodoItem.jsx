import React from 'react';

import {
  Grid,
  Item,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import CustomButton from '../buttons/CustomButton';

const TodoItem = (props) => {
  const { id, todo, done } = props.todo;

  const todoClickHandler = (e) => {
    const passedId = props.todo.id;
    props.onItemClick(passedId);
  };

  return (
    <Container maxWidth='md'>
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
                {done ? 'Done' : 'Not yet done'}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='span'>
                {
                  <CustomButton
                    done={done}
                    id={id}
                    onButtonClick={props.onButtonClick}
                  />
                }
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='span'>
                {
                  <CustomButton
                    done={'DELETE'}
                    id={id}
                    onButtonClick={props.onButtonClick}
                  />
                }
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TodoItem;
