import React from 'react';
import { useState } from "react";
import styles from './counter.module.css'; 

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((count) => count + 1);

    const decrement = () => setCount((count) => count - 1);

    const reset = () => setCount(0);

    // const classname = count === 0 ? styles.buttonIncrement : styles.buttonDecrement ;

    return (
        <div>
            <h1 className={classname} data-testid='counter'> {count}</h1><br></br>
            <button className={styles.incButton} data-testid='button-increment' onClick={ increment }>INCREMENT</button>
            <button className={styles.decButton} data-testid='button-decrement' onClick={ decrement }>DECREMENT</button>
            <button className={styles.resetButton} data-testid='button-reset' onClick={ reset }>RESET</button>
        </div>
    )
};
