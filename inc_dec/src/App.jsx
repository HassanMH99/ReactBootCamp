import { useState } from 'react'
import './App.css'
import Buttons from './Buttons'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Buttons></Buttons>
    </div>
  )
}

export default App
