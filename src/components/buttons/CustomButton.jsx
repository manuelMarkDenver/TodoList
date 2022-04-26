import React from 'react';

import { Button } from '@mui/material';

const customButton = (props) => {
  const todoButtonHandler = (e) => {
    e.stopPropagation();

    const action = e.target.dataset['action'];

    const payload = [
      {
        id: props.id,
        action: action,
      },
    ];
    props.onButtonClick(payload);
  };

  let renderButton;

  if (props.done === 'DELETE') {
    renderButton = (
      <Button
        variant='contained'
        size='large'
        color='delete'
        sx={{
          '&:hover': {
            bgColor: 'hover',
          },
        }}
        onClick={todoButtonHandler}
        data-action='DELETE'
      >
        DELETE
      </Button>
    );
  } else {
    renderButton = (
      <Button
        variant='contained'
        size='large'
        color={!props.done ? 'primary' : 'done'}
        sx={{
          '&:hover': {
            bgColor: 'hover',
          },
        }}
        onClick={todoButtonHandler}
        data-action='DONE'
      >
        {props.done ? 'UNDONE' : 'DONE'}
      </Button>
    );
  }

  return <> {renderButton}</>;
};

export default customButton;
