import {useState} from 'react'

function App() {

  let [counter,setCounter] = useState(15) //returns an array
  //let count = 15

  const addValue = ()=>{
    //counter= counter+1
    if(counter<20){
      setCounter(counter+1)
    }
    console.log("value added",counter);
  }  

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  } 
return (
    <>
    <h1>React with vite</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>Remove value</button>

    <p>footer: {counter}</p>
    </>
  )
}

export default App
