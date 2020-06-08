import React, {useState,Fragment} from 'react';
// import MediaHandler from '../MediaHandler'
import Peer from 'peerjs';
import $ from 'jquery';
import uid from 'uid';
import io from 'socket.io-client';

export const InteractionsPage = () => {

    // const CONFIG_IO = {
    //     path: 'localhost'|| 'mylerning.herokuapp.com',
    //     PORT:  3000 || process.env.PORT
    // }
    // const test_url = 'http://'+CONFIG_IO.path+':'+CONFIG_IO.PORT;
    // 
    const local = "http://localhost:5000/"
    const heroku = "https://mylerning.herokuapp.com/"
    const socket = io(heroku && local);
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
            $('#ulPeer').append(`<li id="${id}">${id}</li>`) 
        })
    });    
    
    socket.on('SOMEONE_DISCONNECTED', peerId => {
        $(`#${peerId}`).remove();
    });


    socket.on('NEW_CLIENT_CONNECT', id => {
        $('#ulPeer').append(`<li id="${id}">${id}</li>`) 
    })

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
            // const constraints = { audio: false, video: false };
            // navigator.mediaDevices.getUserMedia( constraints )
            // .then(stream => { 
            //     cb(stream) 
            // })
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
