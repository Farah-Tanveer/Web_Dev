import { useState } from 'react'

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>To-Do list App</h1>

      <input type="text" 
      placeholder='Enter a task' 
      value={task} 
      onChange={(e)=>setTask(e.target.value)}
      />
      <button
      onClick={()=>{
        setTask([...tasks,task]);
        setTask("");
      }
    }>Add
    </button>
    <ul>
    {tasks.map((t, index) => (
      <li key={index}>{t}</li>
    ))}
</ul>
    </div>
  );
}

export default App
