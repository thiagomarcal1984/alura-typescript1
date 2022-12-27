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
        const exp = /-/g; // Busca globalmente um hífen. Tipo: RegExp.
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao)
    }
}
