var numeroGeracao = 0;
var labelGeracao = {};

document.addEventListener("DOMContentLoaded", function(event) { 
    var $ = document.getElementById.bind(document);
    var table = $('table');
    labelGeracao = $('numeroGeracao');

    CriarGrid(table);

    var celula = new Celula(1, 1);

    celula.MostrarVida(table.rows[2].cells[0]);
    console.log(celula.posicaoCima());
    exibirGeracao()
});

function CriarGrid(table){
    for (var i = 0; i < 10; i++) {
        var novaLinha = table.insertRow(i);

        for (var j = 0; j < 10; j++) {
            var novaCelula = novaLinha.insertCell(j);
        }
    }
}

function exibirGeracao(){

    labelGeracao.innerHTML = "Geracao: " + (++numeroGeracao) ;
    setTimeout(function(){ exibirGeracao()}, 1000);
}
