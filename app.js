var app = require('express')();


//SEt port app
app.set('port', 3001)


var http = require('http').createServer(app);
const io = require('socket.io')(http)


app.get('/', (req, res) => {
  res.send('Socket io ...');
});


//Socket io 
io.on('connection', (socket)=>{
    console.log("Nuevo socket conectado ")

    socket.on('increment', (counter)=>{
        console.log("increment")
        io.sockets.emit('Counter incremented', counter++)
    })
})

http.listen(app.get('port'), () => {
  console.log(`listening on *:${app.get('port')}`);
});