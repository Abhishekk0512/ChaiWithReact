import { useState } from 'react'

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div className='w-full h-screen items-center duration-200'
      style={{backgroundColor: color}}
    >
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-3xl'>
          <button 
          onClick={() => setColor("red")}
          className='bg-red-600  outline-none p-2 rounded-full'>
            Red</button>

            <button 
            onClick={() => setColor("yellow")}
            className='bg-yellow-200  outline-none p-2 rounded-full'>
            Yellow</button>

            <button 
            onClick={() => setColor("pink")}
            className='bg-pink-400  outline-none p-2 rounded-full'>
            Pink</button>

            <button 
            onClick={() => setColor("blue")}
            className='bg-blue-500  outline-none p-2 rounded-full'>
            Blue</button>

            <button 
            onClick={() => setColor("black")}
            className='bg-black  outline-none p-2 rounded-full'>
            Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
