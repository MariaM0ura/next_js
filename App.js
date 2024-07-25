var http = require('http');

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao nosso site!</h1><h4>https://www.devmedia.com.br</h4>");
}).listen(8181);

