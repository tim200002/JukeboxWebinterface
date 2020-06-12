const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.use(express.json());
app.use(express.static('public'));
app.set("view engine", "ejs")
app.set("views",__dirname+"/views")
app.get('/NowPlaying', (req, res) => {
    console.log(req.query)
    if(req.query.albumArt==null) req.query.albumArt="https://via.placeholder.com/300"
   // console.log(partyId)
  res.render("nowPlaying",{partyId: req.query.partyId,name:req.query.name, albumArt:req.query.albumArt});
});

app.get("/login", (req,res)=>{
    res.sendFile(__dirname + '/login.html');
});
