import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './cards/Cards'
function App() {
const img =['https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg','https://i.ytimg.com/vi/DSSjGSoFfk0/maxresdefault.jpg','https://media.wired.com/photos/5b47d36c40e30c2ec0dcc949/master/pass/fortnite.jpg']
  return (
    <div className="App">
     <Cards image={img[0]} title='Game1' descreption='PlayGame1'/>
     <Cards image={img[1]} title='Game2' descreption='PlayGame2'/>
     <Cards image={img[2]} title='Game3' descreption='PlayGame3'/>
    </div>
  )
}

export default App
