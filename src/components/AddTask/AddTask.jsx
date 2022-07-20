import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({add}) => {
  // NOTE: do not delete `data-testid` key value pair
  // console.log(data)

  const [text,setText] = useState("")
  

  return (
    <div className={styles.todoForm} style={{marginTop : "10px"}}>
      <input data-testid="add-task-input" type="text" onChange={ e => setText(e.target.value)}/>
      <button data-testid="add-task-button" onClick={ () => add(text)}>Add task</button>
    </div>
  );
};
 
export default AddTask;
