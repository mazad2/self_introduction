import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export function NavBar() {
  return (
    <div className="">
      <div className='items-center justify-center gap-y-2 md:gap-x-20 flex flex-col pt-10 md:flex-row'>
        
          <button className='text-white w-40 h-12 hover:translate-y-1 md:shadow-[-5px_10px_5px_rgb(9,5,67)] md:hover:shadow-[-2px_5px_5px_rgb(0,0,0)] md:hover:drop-shadow-xl md:hover:translate-y-1 ease-out border-2 border-blue-200 rounded-xl md:w-40 md:h-20 bg-gray-500 md:hover:bg-blue-600 duration-200 font-mono text-2xl antialiased'>
            About me
          </button>
        
          <button className='text-white w-40 h-12 hover:translate-y-1 md:shadow-[-5px_10px_5px_rgb(9,5,67)] md:hover:shadow-[-2px_5px_5px_rgb(0,0,0)] md:hover:drop-shadow-xl md:hover:translate-y-1 ease-out border-2 border-blue-200 rounded-xl md:w-40 md:h-20 bg-gray-500 md:hover:bg-blue-600 duration-200 font-mono text-2xl antialiased'>
            Experience
          </button>

          <button className='text-white w-40 h-12 hover:translate-y-1 md:shadow-[-5px_10px_5px_rgb(9,5,67)] md:hover:shadow-[-2px_5px_5px_rgb(0,0,0)] md:hover:drop-shadow-xl md:hover:translate-y-1 ease-out border-2 border-blue-200 rounded-xl md:w-40 md:h-20 bg-gray-500 md:hover:bg-blue-600 duration-200 font-mono text-2xl antialiased'>
            Contact
          </button>
      </div>
    </div>
  )
}
