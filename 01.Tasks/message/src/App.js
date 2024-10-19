import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message from='From' to='To' subject='Subject' text='Text' weight='bold' color='cadetblue'/>
        <Message from='Jane' to='John' subject='Hi' text='Hi, John!' color='green'/>
        <Message from='John' to='Jane' subject='Bye' text='Bye, Jane!'color='pink'/>
        <Message from='Me' to='everyone' subject='Attention' text='Very long text, to see how it could flex to other' color='yellow'/>
      </header>
    </div>
  );
}

export default App;
