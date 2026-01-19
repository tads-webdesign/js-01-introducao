// ============================================
// EXEMPLOS PRÁTICOS - CONSOLE.LOG E DEBUGGING
// ============================================

console.log("=== EXEMPLO 1: Console.log Básico ===\n");

console.log("Olá, mundo!");
console.log("Nome:", "João", "Idade:", 25);

let x = 10;
let y = 20;
console.log("x =", x, "y =", y);

console.log("\n=== EXEMPLO 2: Diferentes Tipos de Mensagens ===\n");

console.log("Mensagem normal");
console.info("Informação importante");
console.warn("Aviso: cuidado!");
console.error("Erro: algo deu errado!");

console.log("\n=== EXEMPLO 3: Objetos e Arrays ===\n");

let pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Designer",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log("Objeto pessoa:", pessoa);

let numeros = [1, 2, 3, 4, 5];
console.log("Array numeros:", numeros);

let matriz = [[1, 2], [3, 4], [5, 6]];
console.log("Matriz:", matriz);

console.log("\n=== EXEMPLO 4: Console.table ===\n");

let usuarios = [
    { id: 1, nome: "João", idade: 25, cidade: "São Paulo" },
    { id: 2, nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Pedro", idade: 28, cidade: "Belo Horizonte" }
];

console.table(usuarios);

let frutas = ["maçã", "banana", "laranja", "uva"];
console.table(frutas);

console.log("\n=== EXEMPLO 5: Console.dir ===\n");

let objeto = {
    tipo: "div",
    classe: "container",
    atributos: { id: "main", style: "color: blue" },
    filhos: ["span", "p", "div"]
};

console.log("console.log:");
console.log(objeto);

console.log("\nconsole.dir:");
console.dir(objeto);

console.log("\n=== EXEMPLO 6: Agrupamento de Mensagens ===\n");

console.group("Informações do Usuário");
console.log("Nome: João Silva");
console.log("Email: joao@email.com");
console.log("Telefone: (11) 99999-9999");
console.groupEnd();

console.group("Configurações");
console.log("Tema: escuro");
console.log("Idioma: pt-BR");
console.groupCollapsed("Detalhes Avançados");
console.log("Cache: habilitado");
console.log("Notificações: desabilitadas");
console.groupEnd();
console.groupEnd();

console.log("\n=== EXEMPLO 7: Medindo Tempo de Execução ===\n");

console.time("Loop simples");
let soma = 0;
for (let i = 0; i < 1000000; i++) {
    soma += i;
}
console.timeEnd("Loop simples");
console.log("Soma:", soma);

console.time("Criação de array");
let array = new Array(1000000).fill(0);
console.timeEnd("Criação de array");

console.log("\n=== EXEMPLO 8: Contador ===\n");

function processarItem() {
    console.count("Processamento");
}

processarItem();
processarItem();
processarItem();
console.log("Reset do contador:");
console.countReset("Processamento");
processarItem();

console.log("\n=== EXEMPLO 9: Assert ===\n");

let idade = 20;
console.assert(idade >= 18, "Usuário deve ser maior de idade");
console.assert(idade < 18, "Erro: usuário é menor de idade!", { idade });

let valores = [1, 2, 3];
console.assert(valores.length > 0, "Array não pode estar vazio");

console.log("\n=== EXEMPLO 10: Debugging de Função ===\n");

function calcularMedia(notas) {
    console.log("Entrada:", notas);
    console.log("Quantidade de notas:", notas.length);
    
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        console.log(`Somando nota ${i + 1}: ${notas[i]}`);
        soma += notas[i];
    }
    
    let media = soma / notas.length;
    console.log("Soma total:", soma);
    console.log("Média calculada:", media);
    
    return media;
}

let notas = [8.5, 7.0, 9.5, 6.0];
let resultado = calcularMedia(notas);
console.log("Resultado final:", resultado);

console.log("\n=== EXEMPLO 11: Template Literals no Console ===\n");

let usuario = { nome: "Carlos", idade: 35, ativo: true };
console.log(`Usuário: ${JSON.stringify(usuario, null, 2)}`);

let status = usuario.ativo ? "✓ Ativo" : "✗ Inativo";
console.log(`Status: ${status}`);

console.log("\n=== EXEMPLO 12: Rastreamento de Valores ===\n");

function fibonacci(n) {
    console.group(`Calculando fibonacci(${n})`);
    
    if (n <= 1) {
        console.log(`Caso base: retornando ${n}`);
        console.groupEnd();
        return n;
    }
    
    console.log(`Calculando fibonacci(${n-1}) e fibonacci(${n-2})`);
    let resultado = fibonacci(n - 1) + fibonacci(n - 2);
    console.log(`fibonacci(${n}) = ${resultado}`);
    console.groupEnd();
    
    return resultado;
}

// Comentar para não poluir o console
// let fib = fibonacci(5);
// console.log("\nResultado:", fib);

console.log("\n=== EXEMPLO 13: Debugging de Tipos ===\n");

function verificarTipo(valor) {
    console.log("Valor:", valor);
    console.log("Tipo:", typeof valor);
    console.log("É array?", Array.isArray(valor));
    console.log("É null?", valor === null);
    console.log("É undefined?", valor === undefined);
    console.log("É NaN?", Number.isNaN(valor));
    console.log("---");
}

verificarTipo("texto");
verificarTipo(42);
verificarTipo(true);
verificarTipo([1, 2, 3]);
verificarTipo({ nome: "João" });
verificarTipo(null);
verificarTipo(undefined);
verificarTipo(NaN);

console.log("\n=== EXEMPLO 14: Estilo com CSS (funciona no navegador) ===\n");

// Esses estilos funcionam no console do navegador
console.log("%cTexto em vermelho", "color: red");
console.log("%cTexto grande e azul", "color: blue; font-size: 20px; font-weight: bold");
console.log("%cSucesso! ✓", "color: green; font-weight: bold");
console.log("%cErro! ✗", "color: red; font-weight: bold");

console.log("\n=== EXEMPLO 15: Debugging de Loop ===\n");

console.log("Loop com debugging:");
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}:`);
    console.log(`  - Valor: ${i}`);
    console.log(`  - Dobro: ${i * 2}`);
    console.log(`  - Quadrado: ${i ** 2}`);
    
    if (i === 2) {
        console.log("  - Ponto médio atingido!");
    }
}

console.log("\n=== EXEMPLO 16: Práticas Recomendadas ===\n");

// ✅ BOM: Mensagens descritivas
console.log("Iniciando processamento de pedido #12345");
console.log("Usuário autenticado: João Silva");

// ❌ EVITE: Mensagens vagas
// console.log("aqui");
// console.log("teste");
// console.log(x);

// ✅ BOM: Use console apropriado
console.error("Falha ao conectar ao banco de dados");
console.warn("Cache expirado, atualizando...");
console.info("100 registros carregados");

// ✅ BOM: Agrupe logs relacionados
console.group("Processamento do Pedido #12345");
console.log("Cliente: Maria Silva");
console.log("Itens: 3");
console.log("Total: R$ 150,00");
console.log("Status: Aprovado");
console.groupEnd();
