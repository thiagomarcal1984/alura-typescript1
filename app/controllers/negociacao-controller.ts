import { Negociacao } from "../models/negociacao.js"; 
import { Negociacoes } from "../models/negociacoes.js";
// Não se esqueça de colocar a extensão .js ao importar.

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negociacoes.lista().pop() // A referência original está protegida.
        console.log(this.negociacoes.lista()) // A lista vai ter o acréscimo.
        this.limparFormulario()
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g; // Busca globalmente um hífen. Tipo: RegExp.
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
