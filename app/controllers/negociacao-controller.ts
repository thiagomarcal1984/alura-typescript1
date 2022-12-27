import { Negociacao } from "../models/negociacao.js"; 
// Não se esqueça de colocar a extensão .js ao importar.

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona() {
        const negociacao = new Negociacao(
            this.inputData.value, // O primeiro parâmetro devia ser date, não string.
            this.inputQuantidade.value, 
            this.inputValor.value
        );
        console.log(negociacao)
    }
}
