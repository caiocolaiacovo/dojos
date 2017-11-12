function Celula(linha, coluna) {
    this.linha = linha;
    this.coluna = coluna;
    this.vida = true;

    Celula.prototype.posicaoCima = function() {
        return linha - 1;
    };

    Celula.prototype.posicaoCimaEsquerda = function() {
        return this.linha - 1;
    };

    Celula.prototype.posicaoBaixo = function() {
        return this.linha + 1;
    };

    Celula.prototype.posicaoEsquerda = function() {
        return this.linha - 1;
    };

    Celula.prototype.posicaoDireita = function() {
        return this.linha + 1;
    };

    Celula.prototype.celulaEmVolta = function() {
        return this.linha + 1;
    };

    Celula.prototype.MostrarVida = function(valor){
        console.log("valor",valor)
        if(this.vida)
            valor.style.backgroundColor = "green";
    };



}