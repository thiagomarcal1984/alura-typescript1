// import { NegociacaoController } from "./controllers/negociacao-controller";
// O autoimport do VS Code não coloca a extensão .js, necessária no curso.
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
