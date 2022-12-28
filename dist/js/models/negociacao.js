export class Negociacao {
    // No JavaScript, a sintaxe para atributos privados é: #propriedade.
    // No TypeScript, a sintaxe para atributos privados é: private _propriedade.
    // Sintaxe resumida de declaração/atribuição de propriedades no construtor.
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
