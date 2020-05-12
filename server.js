
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Cors for cross origin allowance
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));
app.get('/GetApi', (req, res) => {
    res.send(projectData);
    });
    
     app.post('/api', function(req, res) {
         const newData = req.body;
         console.log(req.body);
         projectData = req.body;
         res.status(200).send(projectData);
     });

// Setup Server

app.listen(3000, function(){
    console.log('I am listening');
});