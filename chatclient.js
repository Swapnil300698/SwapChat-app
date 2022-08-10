const socket = io('')
console.log("hii swanil now its solve");

// get dom element is iirespective
const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageInp');
const messagecontainer =document.querySelector('.container');


// audio will play on reciving message
var audio = new audio('pip.mp3');
// function which append the container
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add(message);
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    if(position =='left'){
        audio.play();
    }
}




const name = prompt("enter your name to join");
socket.emit('new-user-joined',name);

socket.on('user-joined',name =>{
    append(`${name} joined the chat`, 'right')
})

socket.on('receive',data =>{
    append(`${data.name}:${data.message}`, 'left')
})

socket.on('left',name =>{
    append(`${name} left the chat`, 'right')
})

form.addEventListener('submit',(e) =>{
e.preventDefault();
const message = messageinput.value;
append(`you:${message}`, 'right');
socket.emit('send',message);
messageinput.value = '';

});
