import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FavorateColor from './FavorateColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FavorateColor></FavorateColor>
    </div>
  )
}

export default App
