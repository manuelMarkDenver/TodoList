import { useEffect, useState } from 'react';

import './App.css';
import customTheme from './helper/config';

import TodoContainer from './components/todo-list/TodoContainer';
import { ThemeProvider } from '@mui/material/styles';

const DUMMY_DATA = [
  {
    id: 1,
    todo: 'Cook breakfast',
    done: false,
  },
  {
    id: 2,
    todo: 'Wash the car',
    done: false,
  },
  {
    id: 3,
    todo: 'Walk the dog',
    done: false,
  },
  {
    id: 4,
    todo: 'Go to grocery',
    done: false,
  },
  {
    id: 5,
    todo: 'Code',
    done: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const onItemClickHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }

      return todo;
    });

    console.log('update: ', updatedTodos);

    setTodos(updatedTodos);
  };

  const onButtonClickHandler = (payload) => {
    if (payload[0].action === 'DONE') {
      console.log('here at done');

      const updatedTodos = todos.map((todo) => {
        if (todo.id === payload[0].data.id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

      console.log('update: ', updatedTodos);

      setTodos(updatedTodos);

      return;
    }

    if (payload[0].action === 'EDIT') {
      console.log('here at EDIT', payload[0]);

      const updatedTodos = todos.map((todo) => {
        if (todo.id === payload[0].data.id) {
          return { ...todo, todo: payload[0].data.todo };
        }

        return todo;
      });

      setTodos(updatedTodos);

      return;
    }

    if (payload[0].action === 'DELETE') {
      console.log('here at delete', payload[0]);

      const updatedTodos = todos.filter(
        (todo) => todo.id !== payload[0].data.id && todo
      );

      setTodos(updatedTodos);

      return;
    }
  };

  const addTodoHandler = (newTodo) => {
    setTodos([newTodo, ...todos]);

    console.log(todos);
  };

  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <TodoContainer
          todos={todos}
          onItemClick={onItemClickHandler}
          onButtonClick={onButtonClickHandler}
          onAddTodo={addTodoHandler}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
