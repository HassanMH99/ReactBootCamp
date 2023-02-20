import { useState } from 'react'
import './App.css'
import { Box } from './Box'
import { useEffect } from 'react'

function App() {
  const [color,setColor] = useState("")
  const [colorChanges,setColorChanges]=useState(0)
useEffect(()=>{
 const timer = setTimeout(()=>{
  const colors = ['blue','green','purple','yellow'];
  const randomcolor = colors[Math.floor(Math.random()*colors.length)]
  setColor(randomcolor)
  setColorChanges(prev=>prev+1);
  if(colorChanges<5){
    setTimeout(timer);
   }else{
    setColor('black')
   }
 },500)

 return ()=>clearTimeout(timer);
  
},[colorChanges])

  return (
    <div className="App">
     <Box color={color}></Box>
    </div>
  )
}

export default App
