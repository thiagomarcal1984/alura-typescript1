export class Negociacao {
    // No JavaScript, a sintaxe para atributos privados é: #propriedade.
    // No TypeScript, a sintaxe para atributos privados é: private _propriedade.

    // Sintaxe resumida de declaração/atribuição de propriedades no construtor.
    constructor(
        private readonly data: Date,
        private readonly quantidade: number,
        private readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }
}
