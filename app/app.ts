import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao.data); // data não declarada (está, mas privada).
// console.log(negociacao.#data); // erro de sintaxe: não acessível.
// negociacao.data = "Uma data"; // erro de sintaxe: não há setter.
// daqui pra frente, o código conterá os getters.

console.log(negociacao.data); // Acesso via getter DECLARADO na classe.

// const negociacao2 = new Negociacao(new Date()); // Faltam parâmetros.
const negociacao2 = new Negociacao(new Date(), 10, 100);
console.log(negociacao2.volume); // Agora o volume será exibido corretamente.
