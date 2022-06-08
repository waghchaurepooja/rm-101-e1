import React from "react";
import styles from "./counter.module.css";



const Counter = ({ value, id }) => {

  
  // sample value to be replaced
  let count = value;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
