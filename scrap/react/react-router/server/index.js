//imports
const express = require('express');
const mongoose = require('mongoose');

//server information
const server = express();
const serverPort = 4000;

//database connection
mongoose.connect('mongodb://localhost:27017/reactRouterv2');

//schema information
const favCards = require('./schema/card');

//this middleware adds the request body to the requests
server.use(express.json());

//server routing
// this endpoint will return all cards from favCards Collection
server.get('/favCardList', async (req, res)=>{
    console.log("get @ endpoint: /favCardList");
    const ret = await favCards.find();

    res.send(ret);
});

// this endpoint will add a new card to the favCards Collection
server.post('/favCardList', async (req, res)=>{
    console.log("post @ endpoint: /favCardList");

    const existCheck = await favCards.find({name: req.body.name});
    if(!existCheck)
    {
        await favCards.create(req.body);
    }

    res.send("Card May Have Been Added");
});

// this endpoint will remove a card from the favCards Collection
server.delete('/favCardList', (req, res)=>{

});

server.listen(serverPort, ()=>{
    console.log(`Connected to the server`);
});

function extraStuff(){
    //to get database information from the current model
    // favCards.db.port;
    // favCards.db.host;
    // favCards.db.name;
}