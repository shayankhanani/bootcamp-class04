import React, {useState} from 'react';
import './Room.css';

function Room(){
    const [isLit, setLit ] = useState(true);
    let [ temp, setTemp ] = useState(26);


    return(
        <div className={`Room ${isLit ? 'lit' : 'dark'}`}>
            <h1>React State Management Assignment</h1>

            <p className={`${isLit ? 'lit-border' : 'dark-border'}`}> The room is {isLit ? '💡' : '🌙'} </p>
            <button onClick={() => setLit(true)}>Turn On</button> 
            &nbsp;&nbsp;
            <button onClick={() => setLit(false)}>Turn off</button>

            <p className={`${isLit ? 'lit-border' : 'dark-border'}`}>Temperature of Room is {temp}</p>
            <button onClick={() => setTemp(++temp)}> + </button>
            &nbsp; &nbsp;
            <button onClick={() => setTemp(--temp)}> - </button>
        </div>
    );
}

export default Room;