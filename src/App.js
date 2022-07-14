import React, { useState } from "react";
import TaskApp from "./components/TaskApp";
import "./App.css"
import data1 from "./data/tasks.json"

function App() {

  const [data,setData] = useState(data1)


  return <div className="app">{/* Code Here */
  <TaskApp list={data} ></TaskApp>

  }</div>;
}

export default App;
