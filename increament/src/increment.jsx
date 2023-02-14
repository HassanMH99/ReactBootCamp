import { useState } from "react"


function Increment(){
    const [num,setNum] = useState(0)
    const Clicker = ()=>{
        setNum(num+1);
        
        }
    return <div>
        <h1>{num}</h1>
        <button onClick={Clicker}>Increment</button>
    </div>


    
}

export default Increment