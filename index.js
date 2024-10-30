function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = true;
      if (!deuErro) {
        resolve(); // Promessa OK!
      } else {
        reject(); // Foi mal, deu erro!
      }
    }, 4000);
  });
}

enviarEmail("Oi! Tudo bem?").then(() => {   
    console.log("O e-mail foi enviado com sucesso!");
    }).catch(() => {
    console.log("O e-mail não pode ser enviado.");
    }
);