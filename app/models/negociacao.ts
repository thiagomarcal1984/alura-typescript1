export class Negociacao {
    // No JavaScript, a sintaxe para atributos privados é: #propriedade.
    // No TypeScript, a sintaxe para atributos privados é: private _propriedade.

    // Sintaxe resumida de declaração/atribuição de propriedades no construtor.
    constructor(
        private _data: Date,
        private readonly quantidade: number,
        private readonly valor: number
    ) {}

    get data(): Date {
        // A linha a seguir evita modificações na data do objeto.
        // Apenas a cópia é modificada (técnica de programação defensiva).
        const data = new Date(this._data.getTime())
        return data
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}
