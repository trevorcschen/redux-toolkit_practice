import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Counter.module.css';
import {increment, decrement} from '../slices/counterSlices'

export const Counter = () =>  {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

      </div>
    </div>
  );
}
