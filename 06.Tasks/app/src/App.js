import { Provider } from 'react-redux';
import store from './store';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Каталог продуктов</h1>
        <ProductForm />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
