// ============================================
// EXEMPLOS PRÁTICOS - TEMPLATE LITERALS
// ============================================

console.log("=== EXEMPLO 1: Concatenação Tradicional vs Template Literals ===\n");

let nome = "João";
let idade = 25;
let profissao = "Desenvolvedor";

// Concatenação com + (forma antiga)
let mensagem1 = "Olá, meu nome é " + nome + ", tenho " + idade + " anos e sou " + profissao + ".";
console.log("Concatenação:");
console.log(mensagem1);

// Template literal (forma moderna)
let mensagem2 = `Olá, meu nome é ${nome}, tenho ${idade} anos e sou ${profissao}.`;
console.log("\nTemplate Literal:");
console.log(mensagem2);

console.log("\n=== EXEMPLO 2: Expressões em Template Literals ===\n");

let a = 10;
let b = 20;

console.log(`A soma de ${a} e ${b} é ${a + b}.`);
console.log(`A multiplicação de ${a} e ${b} é ${a * b}.`);
console.log(`${a} é ${a > b ? 'maior' : 'menor'} que ${b}.`);

// Chamadas de função
function dobro(n) {
    return n * 2;
}

console.log(`O dobro de 5 é ${dobro(5)}.`);
console.log(`O dobro de ${a} é ${dobro(a)}.`);

console.log("\n=== EXEMPLO 3: Strings Multi-linha ===\n");

// Forma antiga (com \n)
let texto1 = "Primeira linha\n" +
             "Segunda linha\n" +
             "Terceira linha";

console.log("Concatenação com \\n:");
console.log(texto1);

// Template literal (mantém formatação)
let texto2 = `Primeira linha
Segunda linha
Terceira linha`;

console.log("\nTemplate Literal multi-linha:");
console.log(texto2);

console.log("\n=== EXEMPLO 4: HTML com Template Literals ===\n");

let usuario = {
    nome: "Maria Silva",
    email: "maria@email.com",
    idade: 30
};

// Gerando HTML
let cartao = `
    <div class="card">
        <h2>${usuario.nome}</h2>
        <p>Email: ${usuario.email}</p>
        <p>Idade: ${usuario.idade} anos</p>
    </div>
`;

console.log("HTML gerado:");
console.log(cartao);

console.log("\n=== EXEMPLO 5: Listas com Template Literals ===\n");

let frutas = ["maçã", "banana", "laranja", "uva", "morango"];

let listaHTML = `
    <ul>
        ${frutas.map(fruta => `<li>${fruta}</li>`).join('\n        ')}
    </ul>
`;

console.log("Lista HTML:");
console.log(listaHTML);

console.log("\n=== EXEMPLO 6: Formatação de Dados ===\n");

let produto = {
    nome: "Notebook",
    preco: 2500.00,
    desconto: 10
};

let precoFinal = produto.preco * (1 - produto.desconto / 100);

let detalhes = `
    Produto: ${produto.nome}
    Preço original: R$ ${produto.preco.toFixed(2)}
    Desconto: ${produto.desconto}%
    Preço final: R$ ${precoFinal.toFixed(2)}
    Economia: R$ ${(produto.preco - precoFinal).toFixed(2)}
`;

console.log(detalhes);

console.log("\n=== EXEMPLO 7: Caracteres Especiais ===\n");

// Escape de caracteres
let caminho = `C:\\Users\\usuario\\Desktop`;
console.log("Caminho:", caminho);

let citacao = `Ele disse: "JavaScript é incrível!"`;
console.log("Citação:", citacao);

let templateEscape = `Use \${} para interpolação de valores`;
console.log("Escape:", templateEscape);

console.log("\n=== EXEMPLO 8: Template Literals Aninhados ===\n");

let pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 28, cidade: "Belo Horizonte" }
];

let tabela = `
Relatório de Pessoas:
${'='.repeat(50)}
${pessoas.map(p => 
    `Nome: ${p.nome.padEnd(15)} | Idade: ${p.idade} | Cidade: ${p.cidade}`
).join('\n')}
${'='.repeat(50)}
Total de pessoas: ${pessoas.length}
`;

console.log(tabela);

console.log("\n=== EXEMPLO 9: Calculadora com Template Literals ===\n");

function calculadora(num1, operador, num2) {
    let resultado;
    
    switch(operador) {
        case '+': resultado = num1 + num2; break;
        case '-': resultado = num1 - num2; break;
        case '*': resultado = num1 * num2; break;
        case '/': resultado = num1 / num2; break;
        default: return "Operador inválido";
    }
    
    return `${num1} ${operador} ${num2} = ${resultado}`;
}

console.log(calculadora(10, '+', 5));
console.log(calculadora(10, '-', 5));
console.log(calculadora(10, '*', 5));
console.log(calculadora(10, '/', 5));

console.log("\n=== EXEMPLO 10: URL e Query Strings ===\n");

let baseUrl = "https://api.exemplo.com";
let endpoint = "usuarios";
let parametros = {
    page: 1,
    limit: 10,
    sort: "nome"
};

let url = `${baseUrl}/${endpoint}?page=${parametros.page}&limit=${parametros.limit}&sort=${parametros.sort}`;
console.log("URL gerada:");
console.log(url);

// Forma mais elegante com URLSearchParams
let params = new URLSearchParams(parametros);
let urlElegante = `${baseUrl}/${endpoint}?${params}`;
console.log("\nURL com URLSearchParams:");
console.log(urlElegante);
