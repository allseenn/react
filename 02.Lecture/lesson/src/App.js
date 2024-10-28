import './App.css';
import Counter from './components/counter';
import Show from './components/visible';

function App() {
  const userName = 'John';
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <Counter />
      <Show />
    </div>
  );
}

export default App;
