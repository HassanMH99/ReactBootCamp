import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Buttons from './buttons/Buttons'

function App() {
 
  return (
    <div className="App">
      <Buttons class='bold' giveText='important'/>
      <Buttons giveText='Not important'/>
    </div>
  )
}

export default App
