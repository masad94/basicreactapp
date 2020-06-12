import React,{useState} from 'react';
import './App.css';

function Room(){
    const [color,setColor]=useState("blue");
    const [temp,setTemp]=useState(22);
    return(
    <div className={`room ${color}`}>This room is {color}
    <br />
    Temprature of room is {temp} Celcius
    <br />
    <button onClick={()=>{setTemp(temp+1);}}>+</button>
    <button onClick={()=>setTemp(temp-1)}>-</button>
    <br />
    <button onClick={()=>setColor('red')}>Red</button>
    <button onClick={()=>setColor('blue')}>Blue</button>
    <button onClick={()=>setColor('green')}>Green</button>
    </div>
    );
}

export default Room;