function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var deuErro = true;

        if(deuErro) {
            callback(5, "Deu erro");
        }else{
            callback();
        }
      }, 2000);
}

console.log("Inicio do envio do email");
enviarEmail("Oi, tudo bem?", "Kaiky", (time, erro) => {
    if(erro == undefined) {
        console.log("Tudo certo");
        console.log(`tempo: ${time}s`);
    }else{
        console.log("Deu erro");
    }
})
console.log("Fim do envio do email");