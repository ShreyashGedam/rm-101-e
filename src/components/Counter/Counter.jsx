import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
 
   const [num,setNum] = useState(count)

   const handleAdd = (val) => {
    setNum(num + val)
   }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter} style={{ marginTop : '10px' , marginBottom : '10px'}}>
      <button data-testid="task-counter-increment-button" style={{marginRight : '10px'}}
      onClick= { () => handleAdd(1)}
      >Increment</button>
      <span data-testid="task-counter-value">{num}</span>
      <button data-testid="task-counter-decrement-button" style={{marginLeft : '10px'}}
      onClick= { () => handleAdd(-1)}
      disabled={num==0}
      >Decrement</button>
    </div>
  );
};

export default Counter;
