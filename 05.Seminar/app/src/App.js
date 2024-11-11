
import { useState, createContext } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';

export const UserContext = createContext();
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState('Guest');
  
  function changeUserName(e){
    let newUserName = e.target.closest("div").querySelector('input').value;
    setUserName(newUserName);
    newUserName = "";
  }

  function toggleTheme(e){
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
    </>
  );
}
export default App;
