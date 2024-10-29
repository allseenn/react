import List from './components/List';
import Ref from './components/Ref';
import Visible from './components/Visible';

function App() {
  const userName = 'John';
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <Ref/>
      <Visible data='Текст'/>
      <List/>
    </div>
  );
}

export default App;
