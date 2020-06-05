import React, {useState,Fragment} from 'react';
// import MediaHandler from '../MediaHandler'
import Peer from 'peerjs';
import $ from 'jquery';
import uid from 'uid';

export const InteractionsPage = () => {

const CONFIG = {
    host: 'jkq.herokuapp.com',
    port: 443,
    secure: true,
}

    function getPeer(){
        const id = uid(1)
        return id;
    }

    const peer = new Peer(getPeer(), CONFIG );

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
        const constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices.getUserMedia( constraints )
        .then(stream => { 
            cb(stream) 
        })
        .catch(err => console.log('ERR',err));
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
                <h5> My peer id:  {peer.id}</h5> 
                <video id="localStream" width="300" controls></video>
                <br></br>
                <video id="friendStream" width="300" controls></video>
                <br></br>
                <input type="text" placeholder="Your friend's peer id" id="txtFrienId"></input>
                <br></br>
                
                <input type="submit" onClick={()=>btnCall()} value="Вызов" />
                <ul id="ulPeer"></ul>
            </div>
        </div>
    )
}
