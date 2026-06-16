import { useState } from "react"

function App() {
  const [color,setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
          <div className="flex flex-wrapn justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "red"}}>
            Red
          </button>

          <button onClick={() => setColor("green")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "green"}}>
            Green
          </button>

          <button onClick={() => setColor("blue")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "Blue"}}>
            Blue
          </button>

          <button onClick={() => setColor("pink")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "Pink"}}>
            Pink
          </button>

          <button onClick={() => setColor("Purple")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "Purple"}}>
            Purple
          </button>

          <button onClick={() => setColor("skyblue")} className="outline-0 px-4 py-1 rounded-full text-white shadow-amber-50"
          style={{backgroundColor: "SkyBlue"}}>
            Sky Blue
          </button>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default App
