import { Negociacao } from "../models/negociacao.js"; 
// Não se esqueça de colocar a extensão .js ao importar.

export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        const negociacao = new Negociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        );
        console.log(negociacao)
    }
}
