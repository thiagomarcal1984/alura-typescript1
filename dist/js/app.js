import { Negociacao } from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao); // Exibe a data, a quantidade e o valor, tudo privado.
negociacao.quantidade = 1000; // Insere a variável dinamicamente em negociacao.
console.log(negociacao); // Exibe as variáveis privadas e a nova quantidade.
