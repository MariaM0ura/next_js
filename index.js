function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      if (!deuErro) {
        resolve(
            {
                time: 6,
                to: "Maria",
            } 
        ); // Promessa OK!
      } else {
        reject("deu erro"); // Foi mal, deu erro!
      }
    }, 3000);
  });
}

enviarEmail("Oi! Tudo bem?").then((dados) => {   
    console.log("O e-mail foi enviado com sucesso!");
    console.log(dados.time);
    console.log(dados.to);
    }).catch((erro) => {
    console.log("O e-mail não pode ser enviado." + erro);
    }
);