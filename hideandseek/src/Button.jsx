import { useState } from 'react';
import './App.css'
function Button(){
    const [show,setShow] = useState(false)
    const Clicker = ()=>{
        const div = document.getElementById('color')
        setShow(!show)
        if(show){
            div.style.backgroundColor="green"
        }else{
            div.style.backgroundColor="antiquewhite"
        }
        console.log(show);
    }
return <div>
    <button onClick={Clicker}>Show/Hide</button>
    <div id="color">{show}</div>
</div>


}

export default Button;