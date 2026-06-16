import { useState } from 'react'
// import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj={
    username: "hitesh",
    age: 21
  }
  let myArr = [1,2,3];

  return (
    <>
      <h1 className="text-3xl font-bold italic">Tailwind CSS</h1>
      <Card obj={myArr}/>
      <Card/>
    </>
  )
}

export default App
