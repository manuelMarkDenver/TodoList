import './App.css';
import TodoContainer from './components/TodoContainer';

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
  return (
    <div className='App'>
      <TodoContainer todos={DUMMY_DATA} />
    </div>
  );
}

export default App;
