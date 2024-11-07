import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Box from './components/Box';
import List from './components/List';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';

const list = [
  {id: 1, name: "Laptop", description: "Laptop description"},
  {id: 2, name: "Phone", description: "Phone description"},
  {id: 3, name: "Tablet", description: "Tablet description"}
]

function App() {
  const listItems = ['Item 1', 'Item 2', 'Item 3'];
  const renderer = (item, index) => <li style={{color: `rgb(${200-index*50}, ${200-index*50}, ${200-index*50})`}} id={index}>{item}</li>;
  return (
    <>
    <Box>
      <p>Paragraph inside box</p>
      <button>Button inside box</button>
    </Box>
    <List listItems={listItems} renderer={renderer} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage list={list}/>} />
        <Route path="/details/:id" element={<DetailPage list={list}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;