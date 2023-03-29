import React from 'react'
import ReactDOM from 'react-dom/client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
import { NavBar } from './NavBar'
import { IntroductionText } from './IntroductionText'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <Parallax pages={5}>
          <ParallaxLayer sticky={{ start: 0.7, end: 5}}>
            <NavBar/>
          </ParallaxLayer>
          <ParallaxLayer>
            <IntroductionText/>
          </ParallaxLayer>
        </Parallax>
  

  </React.StrictMode>,
)
