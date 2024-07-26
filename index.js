const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('this is a function that will run when the user visits the home page');
})

app.get('/about/:praOb?', function(req, res){
    const praOb = req.params.praOb;

    if(!praOb){
        res.send('<h1>Sem paramentro ')
    }else{
        res.send('<h1>O paramentro é  ' + praOb + '</h1>');
    }
    
});

app.get('/canal/youtube', function(req, res){
    const canal = req.query['canal'];

    if(!canal){
        res.send('Nenhum canal fornecido');
    }else{
        res.send('Bem vindo ao  ' + canal);
    }
})


app.listen(4000, function(error){
    if(error){
        console.log('Error running the server');
    }
    console.log('Server is running on port', 4000);
})