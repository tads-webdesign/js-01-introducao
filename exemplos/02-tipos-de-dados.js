// ============================================
// EXEMPLOS PRÁTICOS - TIPOS DE DADOS
// ============================================

console.log("=== EXEMPLO 1: String ===\n");

let nome = "Maria Silva";
let frase = 'JavaScript é incrível!';
let template = `Olá, ${nome}`;

console.log("Nome:", nome);
console.log("Tamanho:", nome.length);
console.log("Maiúsculas:", nome.toUpperCase());
console.log("Minúsculas:", nome.toLowerCase());
console.log("Template:", template);

console.log("\n=== EXEMPLO 2: Number ===\n");

let inteiro = 42;
let decimal = 3.14159;
let negativo = -10;
let cientifico = 2.5e6;

console.log("Inteiro:", inteiro);
console.log("Decimal:", decimal);
console.log("Negativo:", negativo);
console.log("Científico:", cientifico);

// Operações especiais
console.log("10 / 0 =", 10 / 0); // Infinity
console.log("'abc' * 2 =", 'abc' * 2); // NaN
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("isFinite(100):", isFinite(100)); // true

console.log("\n=== EXEMPLO 3: Boolean ===\n");

let verdadeiro = true;
let falso = false;
let comparacao = 10 > 5;

console.log("Verdadeiro:", verdadeiro);
console.log("Falso:", falso);
console.log("10 > 5:", comparacao);

// Valores Falsy
console.log("\nValores Falsy:");
console.log("Boolean(false):", Boolean(false));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));

// Valores Truthy
console.log("\nValores Truthy:");
console.log("Boolean(true):", Boolean(true));
console.log("Boolean(1):", Boolean(1));
console.log("Boolean('texto'):", Boolean("texto"));
console.log("Boolean([]):", Boolean([]));
console.log("Boolean({}):", Boolean({}));

console.log("\n=== EXEMPLO 4: Null e Undefined ===\n");

let valorNulo = null;
let valorIndefinido;
let objetoVazio = {};

console.log("Null:", valorNulo);
console.log("Undefined:", valorIndefinido);
console.log("Propriedade inexistente:", objetoVazio.propriedade);

console.log("\nComparações:");
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log("typeof null:", typeof null); // "object" (bug!)
console.log("typeof undefined:", typeof undefined); // "undefined"

console.log("\n=== EXEMPLO 5: Object ===\n");

let pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log("Pessoa:", pessoa);
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa["idade"]);
console.log("Cidade:", pessoa.endereco.cidade);

// Adicionar propriedade
pessoa.email = "carlos@email.com";
console.log("Pessoa com email:", pessoa);

console.log("\n=== EXEMPLO 6: Array ===\n");

let numeros = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "laranja"];
let misto = [1, "texto", true, null, { nome: "João" }];

console.log("Números:", numeros);
console.log("Frutas:", frutas);
console.log("Misto:", misto);

console.log("\nOperações com array:");
console.log("Primeiro número:", numeros[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Tamanho do array misto:", misto.length);

// Métodos de array
numeros.push(6);
console.log("Depois de push(6):", numeros);
numeros.pop();
console.log("Depois de pop():", numeros);

console.log("\n=== EXEMPLO 7: Typeof ===\n");

console.log("typeof 'texto':", typeof "texto");
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // "object" (bug!)
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []); // "object"
console.log("typeof function(){}:", typeof function(){});

console.log("\nVerificações especiais:");
console.log("Array.isArray([]):", Array.isArray([]));
console.log("Array.isArray({}):", Array.isArray({}));
