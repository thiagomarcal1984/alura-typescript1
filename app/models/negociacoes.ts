import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    // lista(): ReadonlyArray<Negociacao> {
    lista(): readonly Negociacao[] {
        // return [...this.negociacoes] // Retorna cópia da lista.
        return this.negociacoes // Retorna a lista mesmo.
        // Mas como o retorno é do tipo ReadonlyArray, 
        // a lista da classe permanece imutável.
    }
}
