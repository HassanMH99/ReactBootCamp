import { useEffect } from "react";
import { useState } from "react";

function FavorateColor(){
const [favorate,setfavorate] = useState('blue')

useEffect(()=>{
    setTimeout(() => {
        setfavorate('green')
    }, 1000);
})
    return <div>
        <h1>Favorate Color is {favorate}</h1>
        <div id="empty-div"></div>
    </div>
}
export default FavorateColor;