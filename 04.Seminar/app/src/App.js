import React from 'react';

function App() {
  return (
    <>
    <BoxBot>
      <p>Paragraph inside box</p>
      <button>Button inside box</button>
    </BoxBot>
    </>
  );
}
export default App;


const BoxBot = ({children}) => { 
  <div style={{ border: '2px solid black', padding: '16px' }}>
  {children}
  </div>
 }