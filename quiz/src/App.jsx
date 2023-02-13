import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import H1 from './h1/H1'
import Q1 from './Q1/Q1'
import Q1Input from './q1input/Q1Input'
import Q2 from './q2/Q2'
import Q2Input from './q2input/Q2Input'
function App() {

  return (
    <div className="App">
      <div className='container'>
        <H1/>
        <Q1/>
        <Q1Input/>
        <Q2/>
        <Q2Input/>
      </div>

    </div>
  )
}

export default App
