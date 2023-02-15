import React from "react";  
import {data} from "./data";
function getNames(){
    return data.map((obj)=>obj.name)
}
function getBornBefore1990(){
    return data.filter((obj)=>{
        const Year = new Date(obj.birthday).getFullYear();
        return Year <1990;
    })
}


function Display(){
    const names = getNames();
    const bornB1990=getBornBefore1990();
    return (<div >
            <h2>AllNames:</h2>
            <ul>
                {names.map((name,index)=>{
                  return  <li key={index}>{name}</li>
                })}
            </ul>
            <h2>Born Before 1990:</h2>
            <ul>
                {bornB1990.map((obj,index)=>{
                    
                   return <li key={index}>{obj.name}</li>
                })}
            </ul>

    </div>)
}
export default Display;