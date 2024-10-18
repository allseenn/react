import logo from './logo.svg';
import './App.css';
import EventCard from './components/EventCard';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <EventCard name="Название" date="Дата" place="Место"/>
        <EventCard name="ReactJS" date="2021-01-01" place="Online"/>
        <EventCard name="Advanced JS" date="2022-01-01" place="Offline"/>
        <EventCard name="React Native" date="2023-01-01" place="Both"/>
      </header>
    </div>
  );
}

export default App;
