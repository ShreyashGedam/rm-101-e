import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({status , count ,remove , id}) => {
  // NOTE: do not delete `data-testid` key value pair
  
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" defaultChecked={status} />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <Counter count = {count}></Counter> 
      <button data-testid="task-remove-button" onClick={ () => remove(id)} >Remove</button>
    </li>
  );
};

export default Task;
