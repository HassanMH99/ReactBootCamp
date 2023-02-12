import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const data = ["hello","world"];
  const number1 = 5;
  const number2 =6;
  const string = "I love React!"
  return (
    
    <div>
     <a href="#Clickme">Click Me</a>
     <p>{data[0].charAt(0).toUpperCase()+data[0].slice(1)+ " "+data[1].charAt(0).toUpperCase()+data[1].slice(1)}</p>
    <p>{number1}+{number2}={number1+number2}</p>
    <p>{string + " " + string.length} </p>
    </div>
  )
}

export default App
