import express from 'express';

const app= express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var emplooyesRoute = require('./emplooyes.js').router;

app.use("/emplooyes",emplooyesRoute );

// main page comment 
app.get('/',(req, res)=>{

    res.json({"message":"Welcome to emplooyes dashboard"});
})

// port number 
app.listen(3000, ()=>{

    console.log('Port has started')
})

