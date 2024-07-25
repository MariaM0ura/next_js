const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(4000, function(error){
    if(error){
        console.log('Error running the server');
    }
    console.log('Server is running on port', 4000);
})