import React from 'react'
import ReactDOM from 'react-dom/client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
import NavBar from './NavBar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Parallax pages={5}>
      <ParallaxLayer sticky={{ start: 0.5, end: 5}}>
        <NavBar/>
      </ParallaxLayer>
    </Parallax>
    

  </React.StrictMode>,
)
