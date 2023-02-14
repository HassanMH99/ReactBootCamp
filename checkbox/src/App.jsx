import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckBoxes from './CheckBoxex'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CheckBoxes></CheckBoxes>
       
    </div>
  )
}

export default App
