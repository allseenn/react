// import { createContext, useContext, useState} from 'react'

// Как было раньше
function GrandParent() {
  return <Parent message="Hello from top" />
};


function Parent({props}) {
  return <Child message={props.message} />
};


function Child({props}) {
  return <GrandChild message={props.message} />
};

function GrandGrandGrandChild({props}) {
  return <span>{props.message}</span>
};

// Создаем контекст

function App() {
  return (
    <GrandParent />
  );
}

export default App