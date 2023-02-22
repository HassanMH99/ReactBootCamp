import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Routers } from './Routers'
import { Header } from './Header'
import { Products } from './Products'
import { NotFound } from './NotFound'
import { Children } from 'react'
import { HomePage } from './HomePage'
import { ShowPorduct } from './ShowProduct'
function App() {
  const router = createBrowserRouter([
    {path:"/", children:[
      {path:"home",element:<HomePage/>},
      {path:"product",element:<Products/>},
      {path:":id",element:<ShowPorduct />},
      
      
    ]},
    {
      path:"*",
      element: <h1>Not found</h1>
    }
   
   
  ])

  return <div>
    <Header></Header>
    <RouterProvider router={router}></RouterProvider>
  </div>
    
  
}

export default App
