import { useState, useCallback,useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+= "!@#$%^&*-_=+~{}[]"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length,number, char, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.select(0,99);
    window.navigator.clipboard.writeText(password)
  },
  [password])
  useEffect(()=>{passwordGenerator()},[length, number,char, passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-center text-white my-2 text-2xl font-bold'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4  p-1 gap-2'>
          <form className="flex items-center gap-3 bg-slate-100 p-2 rounded-xl border border-slate-200">
          <input type="text"
          value={password}
          className='outline-none w-full py-2 px-3 text-gray-700 font-mono'
          placeholder='Password'
          readOnly 
          ref = {passwordRef}/>
            </form>

          <button onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white hover-bg-blue-800 px-3 py-0.5 shrink-0 rounded-xl transition-colors'>
            copy</button>
        </div>
        <div className='flex text-sm gap-x-4 justify-between mt-4 '>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            max={100}
            min={6}
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={()=>{setNumber((prev)=>!prev)}} />
            <label htmlFor="">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={char}
            id="numberInput"
            onChange={()=>{setChar((prev)=>!prev)}} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
