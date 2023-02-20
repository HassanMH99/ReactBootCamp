import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Spinner } from './Spinner'

function App() {
const [show,setShow] = useState(true)
useEffect(()=>{
  const timer = setTimeout(() => {
    setShow(false)
  }, 2000);
  return ()=>clearTimeout(timer)
},[])

  return (
    <div className="App">
      {show? <Spinner />:<h1>The spinned disabled right now</h1>}
    </div>
  )
}

export default App
