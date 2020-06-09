import React, {Fragment} from 'react';
import {ListClient} from './Clients/ListClient'
import Peer from 'peerjs';
import $ from 'jquery';
import uid from 'uid';
import io from 'socket.io-client';

export const InteractionsPage = () => {
    console.log("InteractionsPageInteractionsPageInteractionsPageInteractionsPageInteractionsPage")
    const local = "http://localhost:5000/"
    const heroku = "mylerning.herokuapp.com"
    const socket = io(local);
    const CONFIG_PEER = {
        host: 'jkq.herokuapp.com',
        port: 443,
        secure: true,
    }
    const peerId =  getPeer();
    function getPeer(){
        const id = uid(5)
        return id;
    }
    
    const peer = new Peer(peerId, CONFIG_PEER );

    socket.emit('NEW_PEER_ID', peerId, console.log('NEW_PEER_ID', peerId.id))
    
    socket.on('ONLINE_PEER_ARRAY', arrPeerId => {
        arrPeerId.forEach(id => {
            $('#ulPeer').append(`<li id="${id}">${id} </li>`) 
        })
    });    
    
    socket.on('SOMEONE_DISCONNECTED', peerId => {
        $(`#${peerId}`).remove();
    });

    function btnCall(){
        const frienId = $('#txtFrienId').val();
        
        openStream(stream=>{
            playVideo(stream, 'localStream');
            const call = peer.call(frienId, stream);
            console.log('TEST CALL', call)
            call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'))
        })
    }
    
    function openStream(cb) {
        const constraints = { audio: false, video: { width: 1280, height: 720 } };
        navigator.mediaDevices.getUserMedia( constraints )
        .then(stream => { 
            cb(stream) 
        })
        .catch(err => {
            // Дописать обработку, если нет камеры и микрафона, то пользователь должен 
            // увидеть что ему отправляют
            console.log('ERROR:', err)
        })

    } 

    function playVideo(stream, idVideo) {
        const video = document.getElementById(idVideo)
        video.srcObject = stream;
        video.onloadedmetadata = function(){   
            video.play();
            console.log(stream);
        }
    }
    peer.on('call', (call)=>{
        openStream(stream => {
            playVideo (stream, 'localStream');
            call.answer(stream);
            call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'))
        });
    });



   
    
    
    return (
        <div>
            <div className="container" style={{marginBottom: 10}}>     
                <p> Online user </p>
                <ul id="ulUser">

                </ul>
                
                <h5> My peer id:  {peer.id}</h5> 
                <video id="localStream" width="300" controls></video>
                <br></br>
                <video id="friendStream" width="300" controls></video>
                <br></br>
                <input type="text" placeholder="Your friend's peer id" id="txtFrienId"></input>
                <br></br>
                 
                <input type="submit" onClick={()=>btnCall()} value="Вызов" />
                <ul id="ulPeer"></ul>

                {/* < ListClient /> */}
            </div>
        </div>
    )
}
