'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const express = require('express');  
const app = express();

app.use('/', express.static('html'));

module.exports = app; 

app.listen(PORT, function() {  
	console.log('Express server listening on port ' + PORT);
});
