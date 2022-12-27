import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    lista(): Array<Negociacao> {
        // return this.negociacoes // Retorna a lista mesmo.
        return [...this.negociacoes] // Retorna cópia da lista.
    }
}
