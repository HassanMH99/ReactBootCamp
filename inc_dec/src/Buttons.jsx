import { useState } from "react"


function Buttons(){
    const [num,setNum] = useState(0)
    const Clicker = ()=>{
        setNum(num+1);
        
        }
    const Clicker2 = ()=>{
        setNum(num-1);
        
        }
     const CheckNum= ()=>{
        const h1 = document.getElementById('h1')

        if(num<0){
            h1.style.backgroundColor = "red"

        }else if(num>0){
            h1.style.backgroundColor = "green"
        }else{
            h1.style.backgroundColor = "black"
        }
        return num;
     }   
        
    return <div>
        <h1 id="h1">{CheckNum()}</h1>
        <button onClick={Clicker}>Increment</button>
        <button onClick={Clicker2}>Decrement</button>
    </div>


    
}

export default Buttons