import { Provider } from 'react-redux';
import store from './store';
import ButtonComponent from './components/ButtonComponent';
import CounterComponent from './components/CounterComponent';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ButtonComponent />
        <CounterComponent />
      </div>
    </Provider>
  );
}
export default App;
