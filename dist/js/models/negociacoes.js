export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // return this.negociacoes // Retorna a lista mesmo.
        return [...this.negociacoes]; // Retorna cópia da lista.
    }
}
