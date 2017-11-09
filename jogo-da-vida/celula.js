function Celula(linha, coluna) {
    this.linha = linha;
    this.coluna = coluna;

    Celula.prototype.posicaoCima = function() {
        return this.linha + 1;
    };
}