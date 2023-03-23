import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=' place-content-center gap-x-20 flex flex-row pt-10'>
        
          <button className='w-40 h-32 border-2 rounded-lg hover:drop-shadow-lg hover:bg-gray-100 duration-75'>About me</button>
        
          <button className='shadow-[-8px_10px_0_rgb(0,0,0)] border-2 hover:shadow-[8px_-10px_0px_rgb(0,0,0)] bg-white ease-out hover:translate-y-1 transition-all rounded'>
            12312
          </button>
        
          <button className=' w-40 h-32 border-2 rounded-lg hover:drop-shadow-lg'>Contact</button>
          <button className='w-40 group h-32 border-2 rounded-lg hover:drop-shadow-lg'>
            <img className="w-10 group-hover:translate-x-20 group-hover:drop-shadow-xl  duration-300 shine-" src='src\assets\next-arrow.svg' alt='arrow'></img>
          </button>
      </div>
    </div>
  )
}

export default App
