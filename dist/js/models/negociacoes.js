export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    lista() {
        // return [...this.negociacoes] // Retorna cópia da lista.
        return this.negociacoes; // Retorna a lista mesmo.
        // Mas como o retorno é do tipo ReadonlyArray, 
        // a lista da classe permanece imutável.
    }
}
