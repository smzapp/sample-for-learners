import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';
import { RootState } from '../store';

const CounterForm = () => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.counter.value);

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrease = () => {
        dispatch(decrement());
    }
    return (
        <div style={{ margin: 50}}>
            <h2>{ value } </h2>
            <button onClick={onIncrement}>Increment</button>

            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}

export default CounterForm