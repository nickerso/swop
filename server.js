'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const express = require('express');  
const app = express();
const path = require('path');  
const bodyParser = require('body-parser');

app.use(bodyParser.text());  
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * API
 */
app.get('/api', function(req, res, next) {  
    let data = {
        message: 'Hello World!'
    };
    res.status(200).send(data);
});
app.post('/api/pmr2_virtuoso_search', function(req, res, next) {  
    var Client = require('node-rest-client').Client; 
    var client = new Client();
    let requestData = req.body;
    var queryString = encodeURIComponent(Object.keys(requestData)[0]);
    console.log(queryString);
    // set content-type header and data as json in args parameter 
    var args = {
        data: requestData,
        headers: { 
        	"Content-Type": "application/x-www-form-urlencoded",
        	"Accept" : "application/sparql-results+json"
        }};
     
    client.post("https://models.physiomeproject.org/pmr2_virtuoso_search", args, function (data, response) {
        // parsed response body as js object
    	console.log("********************\ndata:\n************************");
        console.log(data);
        // raw response 
        console.log("\n\n+++++++++++++++++++++++++++++++++\nresponse:\n++++++++++++++++++++++++++++");
        console.log(response);
        
        res.status(200).send(data);
    });
});

app.use('/', express.static('html'));

module.exports = app; 

app.listen(PORT, function() {  
	console.log('Express server listening on port ' + PORT);
});
