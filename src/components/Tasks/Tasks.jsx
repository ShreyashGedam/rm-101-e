import React, { useEffect } from "react";
import { useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";


const Tasks = ({data}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [list , setList] = useState(data)
//  console.log(data)
  const Remove = (id) => {
    const task = list.filter( e => id != e.id)
    setList(task)
  }

  useEffect(()=>{
   setList(data)
  },[data])

  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>      
        {/* Task List<Task data = {data}></Task> */}
        {
             list.map( e => (
              <div key={e.id} style={{ marginBottom : '20px'}}>         
                  {e.text}
                  <br></br>
                  <Task status={e.done} count={e.count} remove={Remove} id={e.id}></Task>   
                  <hr></hr>        
              </div>
            ))
        }
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;


