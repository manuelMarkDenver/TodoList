import { useEffect, useState } from 'react';
import './App.css';
import TodoContainer from './components/Todo/TodoContainer';

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
    console.log(id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className='App'>
      <TodoContainer todos={todos} onItemClick={onItemClickHandler} />
    </div>
  );
}

export default App;
