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
    console.log("SERVER - get @ endpoint: /favCardList");
    try{
        const ret = await favCards.find();

        if(!ret)
        {
            return res.status(400).send([]);
        }

        return res.status(200).send(ret);
    }
    catch(e)
    {
        return res.status(400).json(e);
    }
});

// this endpoint will add a new card to the favCards Collection
server.post('/favCardList', async (req, res)=>{
    console.log("SERVER - post @ endpoint: /favCardList");

    try{
        const existCheck = await favCards.find({
                                                name: req.body.name, 
                                                small_image: req.body.small_image, 
                                                normal_image: req.body.normal_image, 
                                                rule_text: req.body.rule_text});

        if(existCheck.length == 0)
        {
            const response = await favCards.create(req.body);

            if(!response)
            {
                return res.status(400).send(`Card ${req.body.name} could not be added to the database`)
            }

            return res.status(200).send(`Card ${req.body.name} was added to the database`)
        }
    }
    catch(e)
    {
        return res.status(400).json(e);
    }

});

// this endpoint will remove a card from the favCards Collection
server.delete('/favCardList', async (req, res)=>{
    console.log("SERVER - delete @ endpoint: /favCardList");

    try{
        const response = await favCards.findOneAndRemove({
                                                        name: req.body.name, 
                                                        small_image: req.body.small_image, 
                                                        normal_image: req.body.normal_image, 
                                                        rule_text: req.body.rule_text});

        if(!response)
        {
            return res.status(400).send(`Card ${req.body.name} not found in the database`)
        }

        return res.status(200).send(`Card ${req.body.name} was deleted from the database`)
    }
    catch(e)
    {
        return res.status(400).json(e);
    }
});

server.listen(serverPort, ()=>{
    console.log(`SERVER - Connected to the server`);
});

function extraStuff(){
    //to get database information from the current model
    // favCards.db.port;
    // favCards.db.host;
    // favCards.db.name;
}