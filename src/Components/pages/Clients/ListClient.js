import React from 'react'
import io from 'socket.io-client';

export const ListClient = () => {

    const [numbers, setNumbers] = React.useState([false])
    console.log("TEST")
    socket.on('NEW_CLIENT_CONNECT', id => {
    setNumbers([...numbers, id])
    console.log("setNumbers()")
       // $('#ulPeer').append(`<li id="${id}">${id} </li>`) 

    })



    return (
        <div className="container">                 
            <ul>
                {numbers.map((newId, index) => (
                    <li key={index}>{newId}</li>
                ))}                
            </ul>
        </div>
    )
}