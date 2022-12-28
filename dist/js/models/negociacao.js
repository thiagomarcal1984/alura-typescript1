export class Negociacao {
    // No JavaScript, a sintaxe para atributos privados é: #propriedade.
    // No TypeScript, a sintaxe para atributos privados é: private _propriedade.
    // Sintaxe resumida de declaração/atribuição de propriedades no construtor.
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        // A linha a seguir evita modificações na data do objeto.
        // Apenas a cópia é modificada (técnica de programação defensiva).
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
