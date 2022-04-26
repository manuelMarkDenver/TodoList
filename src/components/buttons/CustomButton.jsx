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

  // if (props.action === 'ADD') {
  //   return (renderButton = (
  //     <Button
  //       variant='contained'
  //       size='large'
  //       color='add'
  //       sx={{
  //         height: '50px',
  //         '&:hover': {
  //           backgroundColor: '#11a783',
  //           opacity: '0.8',
  //         },
  //       }}
  //       onClick={todoButtonHandler}
  //       data-action='ADD'
  //     >
  //       {props.action}
  //     </Button>
  //   ));
  // }

  if (props.action === 'DELETE') {
    return (renderButton = (
      <Button
        variant='contained'
        size='large'
        color='delete'
        sx={{
          '&:hover': {
            backgroundColor: '#dc262b',
            opacity: '0.8',
          },
        }}
        onClick={todoButtonHandler}
        data-action='DELETE'
      >
        {props.action}
      </Button>
    ));
  }

  if (typeof props.action === 'boolean') {
    return (renderButton = (
      <Button
        variant='contained'
        size='large'
        color={!props.action ? 'primary' : 'done'}
        sx={{
          '&:hover': {
            backgroundColor: '#0243eb',
          },
        }}
        onClick={todoButtonHandler}
        data-action='DONE'
      >
        {props.action ? 'UNDONE' : 'DONE'}
      </Button>
    ));
  }

  return <> {renderButton}</>;
};

export default customButton;
