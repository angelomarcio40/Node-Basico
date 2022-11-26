// exemplo de uso do modulo(biblioteca) Lodash
// inicializar projeto npm
// npm init
// ou
// npm i -g npm

// instalaçao: npm install --save Lodash

// importação do Lodash
const _ = require("lodash");

// cria um array de numeros
const numeros = [10, 7, 14, 47, 32, 3];
const numeros2 = [100, 28, 37];

console.log(numeros);

// soma os numeros
console.log("Soma dos números:", _.sumBy(numeros));

// exibe o primeiro numero do array
console.log("Primeiro número:", _.first(numeros));
// exibe- o ultimo numero
console.log("Último número:", _.last(numeros));
// exibe o menor número
console.log("Menor número:", _.min(numeros));
// exibe o maior número
console.log("PMaior número:", _.max(numeros));
// media dos números
console.log("Média número:", _.mean(numeros));
// união de  dois arrays
console.log("União número:", _.union(numeros, numeros2));

const numerosMegaSena = () => {
  return Math.trunc(Math.random() * 60);
};

// executa a funçao numerosMegaSena 6 vezes
const jogoCompleto = _.times(6, numerosMegaSena);

console.log(jogoCompleto);
