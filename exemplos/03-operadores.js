// ============================================
// EXEMPLOS PRÁTICOS - OPERADORES
// ============================================

console.log("=== EXEMPLO 1: Operadores Aritméticos ===\n");

let a = 10;
let b = 3;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333...
console.log("a % b =", a % b); // 1 (resto)
console.log("a ** b =", a ** b); // 1000 (potência)

console.log("\nIncremento e Decremento:");
let contador = 5;
console.log("contador inicial:", contador);
console.log("contador++:", contador++); // 5 (depois incrementa)
console.log("contador agora:", contador); // 6
console.log("++contador:", ++contador); // 7 (incrementa antes)
console.log("contador agora:", contador); // 7

console.log("\nOperadores de Atribuição:");
let num = 10;
console.log("num inicial:", num);
num += 5; // num = num + 5
console.log("num += 5:", num); // 15
num -= 3; // num = num - 3
console.log("num -= 3:", num); // 12
num *= 2; // num = num * 2
console.log("num *= 2:", num); // 24
num /= 4; // num = num / 4
console.log("num /= 4:", num); // 6

console.log("\n=== EXEMPLO 2: Operadores Relacionais ===\n");

console.log("Igualdade Frouxa (==):");
console.log("5 == '5':", 5 == '5'); // true (converte)
console.log("0 == false:", 0 == false); // true
console.log("null == undefined:", null == undefined); // true

console.log("\nIgualdade Estrita (===) - RECOMENDADO:");
console.log("5 === '5':", 5 === '5'); // false
console.log("5 === 5:", 5 === 5); // true
console.log("null === undefined:", null === undefined); // false

console.log("\nComparações Numéricas:");
console.log("10 > 5:", 10 > 5); // true
console.log("10 < 5:", 10 < 5); // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("5 <= 10:", 5 <= 10); // true
console.log("10 != 5:", 10 != 5); // true
console.log("10 !== '10':", 10 !== '10'); // true

console.log("\n=== EXEMPLO 3: Operadores Lógicos ===\n");

console.log("AND (&&):");
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && false:", false && false); // false

let idade = 25;
let temCarteira = true;
let podeDirigir = idade >= 18 && temCarteira;
console.log(`Idade: ${idade}, Tem carteira: ${temCarteira}, Pode dirigir: ${podeDirigir}`);

console.log("\nOR (||):");
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false

let fimDeSemana = true;
let feriado = false;
let diaDeDescanso = fimDeSemana || feriado;
console.log(`Fim de semana: ${fimDeSemana}, Feriado: ${feriado}, Dia de descanso: ${diaDeDescanso}`);

console.log("\nNOT (!):");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!!0:", !!0); // false (dupla negação)
console.log("!!'texto':", !!"texto"); // true

console.log("\nShort-circuit:");
let result1 = false && console.log("Não executa"); // false
let result2 = true || console.log("Não executa"); // true
console.log("Short-circuit funcionou!");

console.log("\nValor padrão com ||:");
let nome1 = "" || "Anônimo";
let nome2 = "João" || "Anônimo";
console.log("Nome 1:", nome1); // "Anônimo"
console.log("Nome 2:", nome2); // "João"

console.log("\n=== EXEMPLO 4: Operador Ternário ===\n");

let idadeUsuario = 20;
let statusUsuario = idadeUsuario >= 18 ? "Maior de idade" : "Menor de idade";
console.log(`Idade: ${idadeUsuario}, Status: ${statusUsuario}`);

let nota = 85;
let conceito = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "D";
console.log(`Nota: ${nota}, Conceito: ${conceito}`);

console.log("\n=== EXEMPLO 5: Outros Operadores Úteis ===\n");

// Optional chaining
let usuario = { nome: "Maria" };
console.log("usuario?.endereco?.rua:", usuario?.endereco?.rua); // undefined (sem erro)

// Nullish coalescing
let valor1 = 0 ?? 10;
let valor2 = null ?? 10;
let valor3 = undefined ?? 10;
console.log("0 ?? 10:", valor1); // 0
console.log("null ?? 10:", valor2); // 10
console.log("undefined ?? 10:", valor3); // 10

// in operator
let pessoa = { nome: "João", idade: 30 };
console.log("'nome' in pessoa:", 'nome' in pessoa); // true
console.log("'cidade' in pessoa:", 'cidade' in pessoa); // false

// instanceof
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("{} instanceof Object:", {} instanceof Object); // true

console.log("\n=== EXEMPLO 6: Precedência de Operadores ===\n");

let resultado = 2 + 3 * 4; // Multiplicação primeiro
console.log("2 + 3 * 4 =", resultado); // 14

let resultado2 = (2 + 3) * 4; // Parênteses primeiro
console.log("(2 + 3) * 4 =", resultado2); // 20

let resultado3 = 10 > 5 && 3 < 8;
console.log("10 > 5 && 3 < 8 =", resultado3); // true
