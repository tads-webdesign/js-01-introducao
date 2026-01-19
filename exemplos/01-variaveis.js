// ============================================
// EXEMPLOS PRÁTICOS - VARIÁVEIS
// ============================================

console.log("=== EXEMPLO 1: var vs let vs const ===\n");

// Problema com var - não respeita blocos
if (true) {
    var variavelVar = "Vazou do bloco!";
}
console.log("Acessando var fora do bloco:", variavelVar); // Funciona (problemático!)

// let respeita blocos
if (true) {
    let variavelLet = "Fica no bloco";
    console.log("let dentro do bloco:", variavelLet); // Funciona
}
// console.log(variavelLet); // ERRO! Descomente para ver o erro

// const para valores que não mudam
const PI = 3.14159;
const PAIS = "Brasil";
console.log("Constantes:", PI, PAIS);

// const com objetos - propriedades podem mudar!
const pessoa = {
    nome: "João",
    idade: 25
};
console.log("Pessoa antes:", pessoa);
pessoa.idade = 26; // Permitido!
pessoa.cidade = "São Paulo"; // Permitido!
console.log("Pessoa depois:", pessoa);
// pessoa = {}; // ERRO! Descomente para ver o erro

console.log("\n=== EXEMPLO 2: Hoisting com var ===\n");

console.log("Valor de x antes da declaração:", x); // undefined (não erro!)
var x = 10;
console.log("Valor de x depois da declaração:", x); // 10

// console.log(y); // ERRO! let não permite uso antes da declaração
// let y = 20;

console.log("\n=== EXEMPLO 3: Loop com var vs let ===\n");

// Problema com var em loops
console.log("Loop com var:");
for (var i = 0; i < 3; i++) {
    console.log("  i dentro do loop:", i);
}
console.log("i fora do loop:", i); // 3 (vazou!)

// let não vaza
console.log("\nLoop com let:");
for (let j = 0; j < 3; j++) {
    console.log("  j dentro do loop:", j);
}
// console.log(j); // ERRO! j não existe aqui

console.log("\n=== EXEMPLO 4: Reatribuição ===\n");

let contador = 0;
console.log("Contador inicial:", contador);
contador = 1;
console.log("Contador reatribuído:", contador);
contador += 5;
console.log("Contador incrementado:", contador);

const MAX_TENTATIVAS = 3;
console.log("Máximo de tentativas:", MAX_TENTATIVAS);
// MAX_TENTATIVAS = 5; // ERRO! Descomente para ver o erro
