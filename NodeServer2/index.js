// node server will handle socket
const io = require('socket.io')()
const users = {};
const port = process.env.PORT

console.log("hii i'm swap and really smart ");
var c = 56+45;
console.log(c);

io.on('connection', socket =>{
    // if any new user joint
    socket.on('new-user-joined', name =>{
        users[socket.id] = name;
        socket.brodcast.emit('user-joined' , name);
    });
    

socket.on('send', message =>{
    socket.brodcast.emit('receive',{message:message,  name:users[socket.id]})
});
console.log(message);

// if someone leaves
socket.on('disconnect',message =>{
    socket.brodcast.emit('left',users[socket.id]);
    delete users[socket.id];
});
})