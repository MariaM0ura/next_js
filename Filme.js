class Filme{
    constructor(titulo, ano, genero){
        this.titulo = titulo;   
        this.diretor = "";
        this.ano = ano;
        this.genero = genero;
        this.atores = [];
        this.duracao = 0;
    }


    Reproduzir(){
        console.log("Reproduzindo...");
    }

    Pause(){
        console.log("Pausado ||");
    }

    Avancar(){
        console.log("Avançar >>");
    }

    Fechar(){
        console.log("Fechar X");
    }

    Ficha(){
        console.log("Título: " + this.titulo);
        console.log("Gênero: " + this.genero);
        console.log("Ano: " + this.ano);
        this.Reproduzir();
    }

}

var vingadores = new Filme("Vingadores", 2018, "Ação");
vingadores.Ficha();