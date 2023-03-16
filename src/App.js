import Add from './components/Add';
import {useState} from "react";
import './App.css';
import Tasks from './components/Tasks';
import { initialTasks } from './data';


function App() {
  const [tasks,setTasks]=useState(initialTasks);

  return (
    <div className="App">
      <h1>Things to do in Kyoto</h1>
      <Add setTasks={setTasks} tasks={tasks}/>
      <Tasks allTasks={tasks}/>
    </div>
  );
}

export default App;
