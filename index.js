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

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor", lang: "JS"},
                {name: "Maria", lang: "Python"},
                {name: "Ana", lang: "JS"},
            ]);
        }, 3000);
    });
}

async function principal() {
    var usuariosAwait = await pegarUsuarios();
    console.log(usuariosAwait);    
}

principal();

//ou 

pegarUsuarios().then((usuarios) => {
    console.log(usuarios);
});

// enviarEmail("Oi! Tudo bem?").then((dados) => {   
//     console.log("O e-mail foi enviado com sucesso!");
//     console.log(dados.time);
//     console.log(dados.to);
//     }).catch((erro) => {
//     console.log("O e-mail não pode ser enviado." + erro);
//     }
// );