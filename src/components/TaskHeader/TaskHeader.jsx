import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({data}) => {
  // sample values to be replaced

  const [totalTask , setTotalTask] = useState(0)
  const [not,setNot] = useState(0)
  // console.log(data)

  useEffect( () => {

    setTotalTask(data.length)
    var count = 0
    for(var i=0 ; i<data.length ; i++)
    {
      if(data[i].done == false)
      {
        count++
      }
    }
    setNot(count)

  } ,[totalTask,not])

  

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader} style={{ marginTop : '20px'}}>
      <b data-testid="header-remaining-task" style={{marginRight : "5px"}}>{`Not-Completed = ${not}`}</b>
      <b data-testid="header-total-task" style={{marginLeft : '10px'}}>{ `Total = ${totalTask}`}</b>
    </div>
  );
};

export default TaskHeader;
