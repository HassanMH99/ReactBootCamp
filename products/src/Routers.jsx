import {createBrowserRouter} from "react-router-dom"
import { HomePage } from './HomePage'
import { Products } from './Products'
import { Header } from './Header'
import { NotFound } from './NotFound'
export function Routers(){
    return createBrowserRouter([
        {path:"/",element:<Header/>}

    ]) 

    
}