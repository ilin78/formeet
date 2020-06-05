const Peer = require('peerjs');
const uid = require('uid');
const $ = require('jquery');
const openStream = require('./openStream');
const playVideo = require('./playVideo')
const getIceObject = require('./getIceObject');
const io = require('socket.io-client');

//npm install socket.io-client --save-dev


const socket = io('http://localhost:3000');
getIceObject(getConfig =>{
    const connectionObj = {
        host: 'heroku.com',
        port: '443',
        secure: true,
        key: 'peerjs',
        config: iceConfig
    };
    const peerId = getPeer();
    socket.emit('NEW_PEER_ID', peerId);
    const peer = new Peer (peerId, connectionObj);
    $('#btnCall').click(()=>{
        const friendId = $('#txtFriendId').val();
        openStream(stream => {
            playVideo(stream, 'localStream');
            const call = peer.call(friendId, stream);
            call.on('stream', remonteStream => playVideo (remonteStream, 'frien!!!!!!!'))
        });
    });

    peer.on('call', call=>{
        openStream(stream => {
            console.log('12121212');
            playVideo(stream, 'localStram');
            call.answer(stream);
            call.on('stream', remonteStream => playVideo(remonteStream, 'frien!!!!!'))
        })
    })
});


function getPeer() {
    const id = uid(10);
    $('#peer-id').append(id);
    return id;
}

socket.on('ONLINE_PEER_ARRAY', arrPeerId => {
    arrPeerId.forEach(id => {
        $('#ulPeerId').append(`<li>${id}</li>`);
    });
})

socket.on()