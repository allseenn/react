import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter