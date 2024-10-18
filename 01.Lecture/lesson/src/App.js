import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'John';
  return (
    <div className="App">
      <h1>Hello {userName}</h1>
      <Article name="Info" number='1'/>
      <Article name="Blog" number='2'/>
    </div>
  );
}

function Article({name, number}) {
  return ( 
    <div>
      <h2 className='heading'>Article about {name} number {number}</h2>
      <a href='#'>Read more</a>
    </div>
   );
}

export default App;


