import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = ()=>{
    
  }
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
