import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import ArticleDetail from './components/ArticleDetail';
// import ArticleList from './components/ArticleLIst';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';


// const articles = [
//   { id: 1, title: 'Article 1', content: 'Content 1' },
//   { id: 2, title: 'Article 2', content: 'Content 2' }, 
//   { id: 3, title: 'Article 3', content: 'Content 3' },
//   { id: 4, title: 'Article 4', content: 'Content 4' },
// ];

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: '10.99' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: '20.99' },
  { id: 3, name: 'Product 3', description: 'Description 3', price: '30.99' },
  { id: 4, name: 'Product 4', description: 'Description 4', price: '40.99' },
  { id: 5, name: 'Product 5', description: 'Description 5', price: '50.99' },
  { id: 6, name: 'Product 6', description: 'Description 6', price: '60.99' },
  { id: 7, name: 'Product 7', description: 'Description 7', price: '70.99' },
  { id: 8, name: 'Product 8', description: 'Description 8', price: '80.99' },
  { id: 9, name: 'Product 9', description: 'Description 9', price: '90.99' },
  { id: 10, name: 'Product 10', description: 'Description 10', price: '100.99' }
];

function App() {
  // return (
    // <>
    //   <div className="App">
        {/* {        console.log(
          <DivWithChild>
            <p>New text</p>
            <div>New div</div>
          </DivWithChild>
        )
        } */}
        {/* <div>
    <h2>Example 2</h2>
    <BorderComp>
      <p>Paragraph inside border</p>
      <button>Button inside border</button>
    </BorderComp>
    <BorderComp>
      <h3>New heading</h3>
    </BorderComp>
    <p>Paragraph outside border</p>
  </div> */}
        {/* Example 3 */}
        {/* <div>
    <h2>Example 3 with props and children</h2>
    <Card title="Card 1">
      <p>Paragraph inside card 1</p>
      <button>Button inside card1</button>
    </Card>
    <Card title="Card 2">
      <p>Paragraph inside card 2</p>
      <a href="#">Link inside card 2</a> 
    </Card>
  </div> */}

        {/* Example 4 render props */}
        {/* <div>
    <h1>Example 4 render props</h1>
    <MouseTracker render={mouse => (
      <MouseInfo {...mouse} />
    )} />
  </div> */}
        {/* <Router>
          <div>
            <h1>App to view articles</h1>
            <Routes>
              <Route path="/articles/:id" element={<ArticleDetail articles={articles}/>} />
              <Route path="*" element={<ArticleList articles={articles} />} />
            </Routes>
          </div>
        </Router> */}
return (
        <Router>
          <Routes>
            <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
            <Route path="/products/:productId" element={<ProductDetails products={products} />} />
            <Route path="/" element={<ProductList products={products} />} />
          </Routes>
        </Router>
      )
    //   </div>
    // </>
}



function DivWithChild({ children }) {
  return <div>{children}</div>;
}

function BorderComp({ children }) {
  return (
    <div style={{ border: '2px solid black', padding: '16px' }}>
      {children}
    </div>
  );
};

function Card({ title, children }) {
  return (
    <div style={{ border: '1px solid black', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      <p>Any advertising text</p>
      {children}
    </div>
  );
}

const MouseTracker = ({ render }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
};

const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h2>Mouse position</h2>
      <p>x: {x}, y: {y}</p>
    </div>
  );
};

export default App;
