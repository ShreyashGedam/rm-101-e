import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = ({list}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [data,setData] = useState(list)

  const handleAdd = (name) => 
  {
    const task = {id : Math.floor(Math.random()*1000) , text : name , done : false , count : 0}
    const arr = [...data,task]
    setData(arr) 
    console.log(data) 
  }
  
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data= {data}/>
      {/* Add Task */
      <AddTask add={handleAdd}></AddTask> 
      }
      {/* Tasks */
      <Tasks data={data}></Tasks>
      }
    </div>
  );
};

export default TaskApp;
