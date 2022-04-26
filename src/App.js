import { useEffect, useState } from 'react';

import './App.css';
import customTheme from './helper/config';

import TodoContainer from './components/todo-list/TodoContainer';
import { ThemeProvider } from '@mui/material/styles';

const DUMMY_DATA = [
  {
    id: 1,
    todo: 'Wash dishes',
    done: false,
  },
  {
    id: 2,
    todo: 'Go to grocery',
    done: true,
  },
  {
    id: 3,
    todo: 'Walk the dog',
    done: false,
  },
  {
    id: 4,
    todo: 'Bond with family',
    done: true,
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
        if (todo.id === payload[0].id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

      console.log('update: ', updatedTodos);

      setTodos(updatedTodos);

      return;
    }

    if (payload[0].action === 'DELETE') {
      console.log('here at delete');

      const updatedTodos = todos.filter(
        (todo) => todo.id !== payload[0].id && todo
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
