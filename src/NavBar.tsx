import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function NavBar() {
  return (
    <div className="">
      <div className=' place-content-center gap-x-20 flex flex-row pt-10'>
        
          <button className='shadow-[-5px_10px_5px_rgb(9,5,67)] hover:shadow-[-2px_5px_5px_rgb(0,0,0)] hover:drop-shadow-xl hover:translate-y-1 ease-out border-2 border-blue-900 rounded-lg w-40 h-20 bg-blue-400 hover:bg-blue-700 duration-200 font-mono text-2xl antialiased'>
            About me
          </button>
        
          <button className='shadow-[-5px_10px_5px_rgb(9,5,67)] hover:shadow-[-2px_5px_5px_rgb(0,0,0)] hover:drop-shadow-xl hover:translate-y-1 ease-out border-2 border-blue-900 rounded-lg w-40 h-20 bg-blue-400 hover:bg-blue-700 duration-200 font-mono text-2xl antialiased'>
            Experience
          </button>

          <button className='shadow-[-5px_10px_5px_rgb(9,5,67)] hover:shadow-[-2px_5px_5px_rgb(0,0,0)] hover:drop-shadow-xl hover:translate-y-1 ease-out border-2 border-blue-900 rounded-lg w-40 h-20 bg-blue-400 hover:bg-blue-700 duration-200 font-mono text-2xl antialiased'>
            Contact
          </button>
      </div>
    </div>
  )
}
