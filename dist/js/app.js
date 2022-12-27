import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.data); // data não declarada (está, mas privada).
// console.log(negociacao.#data); // erro de sintaxe: não acessível.
// negociacao.data = "Uma data"; // erro de sintaxe: não há setter.
// daqui pra frente, o código conterá os getters.
console.log(negociacao.data); // Acesso via getter DECLARADO na classe.
console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.volume);
const negociacao2 = new Negociacao(new Date()); // Faltam parâmetros.
console.log(negociacao2.volume); // Retorna NaN. Não deveria.
