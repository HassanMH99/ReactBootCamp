import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clicker from './increment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Clicker/>
    </div>
  )
}

export default App
