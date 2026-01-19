# Tutorial de JavaScript para Iniciantes

## 📚 Índice
1. [História e Evolução do JavaScript](#história-e-evolução-do-javascript)
2. [Onde JavaScript é Utilizado Atualmente](#onde-javascript-é-utilizado-atualmente)
3. [Variações e Transpiladores](#variações-e-transpiladores)
4. [Interpretadores e Motores JavaScript](#interpretadores-e-motores-javascript)
5. [Sintaxe Básica](#sintaxe-básica)
   - [Variáveis: var, let e const](#variáveis-var-let-e-const)
   - [Tipos de Dados](#tipos-de-dados)
   - [Operadores](#operadores)
   - [Template Literals e Concatenação](#template-literals-e-concatenação)
   - [Console.log para Debugging](#consolelog-para-debugging)

---

## História e Evolução do JavaScript

### Origens (1995)
JavaScript foi criado por **Brendan Eich** em apenas **10 dias** em maio de 1995, enquanto trabalhava na Netscape Communications. Inicialmente chamado de **Mocha**, depois **LiveScript**, foi finalmente renomeado para **JavaScript** como uma estratégia de marketing para aproveitar a popularidade do Java na época.

### Linha do Tempo da Evolução

#### **1995-1997: Nascimento e Padronização**
- 1995: JavaScript é lançado no Netscape Navigator 2.0
- 1996: Microsoft cria o JScript para o Internet Explorer 3.0
- 1997: ECMAScript 1 (ES1) é padronizado pela ECMA International

#### **1998-2008: Maturação**
- 1998: ECMAScript 2 (ES2) - pequenas correções
- 1999: ECMAScript 3 (ES3) - expressões regulares, try/catch
- 2005: AJAX se populariza, revolucionando aplicações web
- 2006: jQuery é lançado, simplificando manipulação do DOM
- 2008: Google lança o Chrome com motor V8

#### **2009-2015: Renascimento**
- 2009: ECMAScript 5 (ES5) - strict mode, JSON, métodos de array
- 2009: Node.js é criado por Ryan Dahl, levando JS para o servidor
- 2010: AngularJS é lançado pelo Google
- 2013: React é lançado pelo Facebook
- 2014: Vue.js é criado por Evan You

#### **2015-Presente: Era Moderna**
- 2015: ECMAScript 6 (ES6/ES2015) - **grande atualização** com:
  - let/const
  - Arrow functions
  - Classes
  - Modules
  - Promises
  - Template literals
- 2016+: Atualizações anuais (ES2016, ES2017, ES2018, ES2019, ES2020, ES2021, ES2022, ES2023, ES2024)
- Adições recentes: async/await, optional chaining, nullish coalescing, top-level await

---

## Onde JavaScript é Utilizado Atualmente

### 1. **Desenvolvimento Web Frontend**
- **Frameworks e Bibliotecas:** React, Vue.js, Angular, Svelte
- **Manipulação do DOM:** Interatividade em páginas web
- **Single Page Applications (SPAs):** Aplicações web modernas

### 2. **Desenvolvimento Web Backend**
- **Node.js:** Servidor web, APIs REST, microserviços
- **Frameworks:** Express.js, NestJS, Fastify, Koa
- **Real-time:** WebSockets, aplicações de chat

### 3. **Desenvolvimento Mobile**
- **React Native:** Apps iOS e Android nativos
- **Ionic:** Apps híbridos com Cordova/Capacitor
- **NativeScript:** Apps nativos multiplataforma

### 4. **Desenvolvimento Desktop**
- **Electron:** VS Code, Slack, Discord, Atom
- **Tauri:** Alternativa mais leve ao Electron
- **NW.js:** Aplicações desktop cross-platform

### 5. **Internet das Coisas (IoT)**
- **Johnny-Five:** Programação de Arduino e Raspberry Pi
- **Node-RED:** Programação visual para IoT
- **Espruino:** JavaScript em microcontroladores

### 6. **Inteligência Artificial e Machine Learning**
- **TensorFlow.js:** ML no navegador e Node.js
- **Brain.js:** Redes neurais em JavaScript
- **ml5.js:** ML acessível para artistas e educadores

### 7. **Game Development**
- **Phaser:** Framework para jogos 2D
- **Three.js:** Gráficos 3D com WebGL
- **Babylon.js:** Engine 3D para web

### 8. **Automação e Ferramentas**
- **Webpack, Vite, Rollup:** Bundlers de código
- **Babel:** Transpilador JavaScript
- **ESLint, Prettier:** Linting e formatação

---

## Variações e Transpiladores

Várias linguagens foram criadas para compilar/transpilar para JavaScript, adicionando recursos ou melhorando a sintaxe:

### **1. TypeScript**
- **Criador:** Microsoft (2012)
- **Descrição:** Superset de JavaScript que adiciona tipagem estática
- **Uso:** Muito popular em projetos empresariais
```typescript
// TypeScript
function somar(a: number, b: number): number {
    return a + b;
}
```

### **2. CoffeeScript**
- **Criador:** Jeremy Ashkenas (2009)
- **Descrição:** Sintaxe mais limpa inspirada em Ruby e Python
- **Status:** Menos popular atualmente
```coffeescript
# CoffeeScript
quadrado = (x) -> x * x
```

### **3. Babel**
- **Descrição:** Não é uma linguagem, mas um transpilador
- **Função:** Converte código JavaScript moderno (ES6+) para versões antigas (ES5)
- **Uso:** Permite usar recursos novos em navegadores antigos

### **4. Dart**
- **Criador:** Google (2011)
- **Descrição:** Linguagem própria que pode compilar para JavaScript
- **Uso:** Principalmente com Flutter para desenvolvimento mobile

### **5. Elm**
- **Descrição:** Linguagem funcional que compila para JavaScript
- **Características:** Sem runtime errors, arquitetura funcional
```elm
-- Elm
add : Int -> Int -> Int
add x y = x + y
```

### **6. ReasonML/ReScript**
- **Descrição:** Sintaxe alternativa para OCaml que compila para JavaScript
- **Características:** Tipagem forte, funcional

### **7. ClojureScript**
- **Descrição:** Dialeto de Clojure (Lisp) que compila para JavaScript
- **Características:** Programação funcional, imutabilidade

---

## Interpretadores e Motores JavaScript

### **Motores JavaScript dos Navegadores**

#### **1. V8 (Google)**
- **Usado em:** Google Chrome, Microsoft Edge (Chromium), Node.js, Deno
- **Lançamento:** 2008
- **Características:**
  - Compilação Just-In-Time (JIT)
  - Otimização agressiva
  - Performance excepcional
  - Open source

#### **2. SpiderMonkey (Mozilla)**
- **Usado em:** Firefox
- **Lançamento:** 1995 (primeiro motor JavaScript)
- **Características:**
  - Motor original criado por Brendan Eich
  - JIT compiler (IonMonkey)
  - Suporte a tecnologias experimentais

#### **3. JavaScriptCore (WebKit)**
- **Usado em:** Safari (macOS e iOS)
- **Também chamado:** Nitro, SquirrelFish Extreme
- **Características:**
  - Otimizado para dispositivos Apple
  - Baixo consumo de memória
  - JIT compilation em múltiplas camadas

#### **4. Chakra (Microsoft) - Descontinuado**
- **Usado em:** Internet Explorer 9-11, Edge (versão antiga)
- **Status:** Microsoft migrou para Chromium/V8 em 2020
- **Características:**
  - JIT compilation
  - Suporte a asm.js

### **Runtimes JavaScript Modernos**

#### **1. Node.js**
- **Motor:** V8
- **Lançamento:** 2009
- **Uso:** Servidor, CLI tools, build tools

#### **2. Deno**
- **Motor:** V8
- **Criador:** Ryan Dahl (criador do Node.js)
- **Lançamento:** 2020
- **Características:** Secure by default, TypeScript nativo, APIs modernas

#### **3. Bun**
- **Motor:** JavaScriptCore
- **Lançamento:** 2022
- **Características:** Extremamente rápido, bundler integrado, runtime all-in-one

---

## Sintaxe Básica

### Variáveis: var, let e const

Em JavaScript, existem três formas de declarar variáveis: `var`, `let` e `const`. Entender as diferenças é crucial!

#### **1. var (forma antiga - evite usar)**

```javascript
var nome = "Maria";
var idade = 25;
var idade = 30; // Redeclaração permitida (problemático!)
console.log(idade); // 30
```

**Problemas do var:**
- **Escopo de função:** não respeita blocos (if, for, while)
- **Hoisting:** variável é "elevada" ao topo (pode causar bugs)
- **Redeclaração permitida:** pode sobrescrever acidentalmente
- **Sem block scope:** vaza para fora de blocos

```javascript
// Problema 1: Não respeita blocos
if (true) {
    var x = 10;
}
console.log(x); // 10 (vazou para fora do if!)

// Problema 2: Hoisting confuso
console.log(y); // undefined (não dá erro!)
var y = 5;

// Problema 3: Redeclaração acidental
var usuario = "João";
var usuario = "Pedro"; // Sem erro, mas perigoso!
```

#### **2. let (forma moderna - RECOMENDADO)**

```javascript
let nome = "Carlos";
let idade = 28;
// let idade = 30; // ERRO! Redeclaração não permitida
idade = 30; // OK - reatribuição permitida
console.log(idade); // 30
```

**Vantagens do let:**
- **Block scope:** respeita blocos (if, for, while, {})
- **Sem redeclaração:** evita erros acidentais
- **Temporal Dead Zone:** erro se usar antes de declarar
- **Reatribuível:** pode mudar o valor

```javascript
// Vantagem 1: Block scope
if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // ERRO! x não existe aqui

// Vantagem 2: Perfeito para loops
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
// console.log(i); // ERRO! i não existe aqui

// Vantagem 3: Não permite redeclaração
let cidade = "São Paulo";
// let cidade = "Rio"; // ERRO!
cidade = "Rio"; // OK - reatribuição
```

#### **3. const (constante - use quando não vai reatribuir)**

```javascript
const PI = 3.14159;
const PAIS = "Brasil";
// PI = 3.14; // ERRO! Não pode reatribuir
// const ESTADO; // ERRO! Deve inicializar na declaração
```

**Características do const:**
- **Block scope:** igual ao let
- **Sem redeclaração:** igual ao let
- **Sem reatribuição:** não pode trocar o valor
- **DEVE ser inicializado:** na declaração
- **Objetos e arrays são mutáveis:** pode modificar propriedades

```javascript
// IMPORTANTE: const não torna objetos imutáveis!
const pessoa = {
    nome: "Ana",
    idade: 30
};

// Isso é PERMITIDO (modifica propriedade):
pessoa.idade = 31;
pessoa.cidade = "Brasília";
console.log(pessoa); // { nome: "Ana", idade: 31, cidade: "Brasília" }

// Isso NÃO é permitido (reatribuição):
// pessoa = { nome: "João" }; // ERRO!

// Mesmo comportamento com arrays:
const numeros = [1, 2, 3];
numeros.push(4); // OK - modifica o array
console.log(numeros); // [1, 2, 3, 4]
// numeros = [5, 6]; // ERRO! - reatribuição não permitida
```

#### **Resumo: var vs let vs const**

| Característica | var | let | const |
|----------------|-----|-----|-------|
| Escopo | Função | Bloco | Bloco |
| Redeclaração | ✅ Permitida | ❌ Erro | ❌ Erro |
| Reatribuição | ✅ Permitida | ✅ Permitida | ❌ Erro |
| Hoisting | ✅ Sim (undefined) | ❌ TDZ | ❌ TDZ |
| Deve inicializar | ❌ Não | ❌ Não | ✅ Sim |
| **Uso recomendado** | ⛔ Evite | ✅ Sim | ✅ Preferível |

**Regra de ouro:**
1. Use `const` por padrão
2. Use `let` apenas se precisar reatribuir
3. **NUNCA** use `var` em código moderno

---

### Tipos de Dados

JavaScript tem **7 tipos primitivos** e **1 tipo complexo**:

#### **1. String (texto)**

```javascript
let texto1 = "Olá, mundo!"; // Aspas duplas
let texto2 = 'JavaScript'; // Aspas simples
let texto3 = `Template literal`; // Crases (ES6+)

// Strings são imutáveis
let nome = "João";
nome[0] = "P"; // Não funciona!
console.log(nome); // "João"

// Propriedades e métodos úteis
console.log(texto1.length); // 11
console.log(texto1.toUpperCase()); // "OLÁ, MUNDO!"
console.log(texto2.toLowerCase()); // "javascript"
```

#### **2. Number (número)**

```javascript
let inteiro = 42;
let decimal = 3.14159;
let negativo = -10;
let cientifico = 2.5e6; // 2500000

// Valores especiais
let infinito = Infinity;
let naoNumero = NaN; // Not a Number

// Operações
console.log(10 / 0); // Infinity
console.log("texto" * 2); // NaN

// Verificações
console.log(typeof 42); // "number"
console.log(isNaN(NaN)); // true
console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false
```

#### **3. Boolean (booleano)**

```javascript
let verdadeiro = true;
let falso = false;

// Contextos booleanos
let maiorDeIdade = 20 > 18; // true
let menorQueZero = -5 < 0; // true

// Valores Falsy (considerados false)
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Valores Truthy (considerados true)
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("texto")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

#### **4. Null (nulo)**

```javascript
let vazio = null; // Ausência intencional de valor

console.log(typeof null); // "object" (bug histórico do JS!)
console.log(null == undefined); // true (comparação frouxa)
console.log(null === undefined); // false (comparação estrita)
```

#### **5. Undefined (indefinido)**

```javascript
let naoDefinido; // Declarada mas não inicializada
console.log(naoDefinido); // undefined

let objeto = {};
console.log(objeto.propriedadeInexistente); // undefined

function semRetorno() {
    // não tem return
}
console.log(semRetorno()); // undefined
```

#### **6. Symbol (símbolo) - ES6**

```javascript
// Cria identificadores únicos
let simbolo1 = Symbol("descrição");
let simbolo2 = Symbol("descrição");

console.log(simbolo1 === simbolo2); // false (sempre único)

// Uso: propriedades "privadas" em objetos
const ID = Symbol("id");
let usuario = {
    nome: "Maria",
    [ID]: 12345
};
```

#### **7. BigInt (inteiro grande) - ES2020**

```javascript
// Para números maiores que 2^53 - 1
let numeroGrande = 9007199254740991n; // note o 'n' no final
let outroGrande = BigInt("9007199254740991");

console.log(typeof numeroGrande); // "bigint"
// console.log(numeroGrande + 10); // ERRO! Não pode misturar com Number
console.log(numeroGrande + 10n); // OK
```

#### **8. Object (objeto) - tipo complexo**

```javascript
// Objeto literal
let pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor"
};

// Acessar propriedades
console.log(pessoa.nome); // "Carlos" (notação de ponto)
console.log(pessoa["idade"]); // 30 (notação de colchetes)

// Adicionar/modificar
pessoa.cidade = "São Paulo";
pessoa.idade = 31;

// Objeto vazio
let vazio = {};
```

#### **9. Array (arranjo) - tipo especial de objeto**

```javascript
// Array literal
let numeros = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "laranja"];
let misto = [1, "texto", true, null, {nome: "João"}];

// Acessar elementos (índice começa em 0)
console.log(frutas[0]); // "maçã"
console.log(frutas[2]); // "laranja"

// Propriedades e métodos
console.log(numeros.length); // 5
numeros.push(6); // Adiciona no final
numeros.pop(); // Remove do final
numeros.unshift(0); // Adiciona no início
numeros.shift(); // Remove do início

// Arrays são objetos
console.log(typeof []); // "object"
console.log(Array.isArray([])); // true
```

#### **Verificando Tipos**

```javascript
// Operador typeof
console.log(typeof "texto"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"

// Verificações especiais
console.log(Array.isArray([])); // true
console.log(null === null); // true
```

---

### Operadores

#### **Operadores Aritméticos**

```javascript
// Operações básicas
let soma = 10 + 5; // 15
let subtracao = 10 - 5; // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5; // 2
let resto = 10 % 3; // 1 (módulo/resto da divisão)
let potencia = 2 ** 3; // 8 (2 elevado a 3) - ES2016

// Incremento e decremento
let contador = 5;
contador++; // 6 (pós-incremento)
contador--; // 5 (pós-decremento)
++contador; // 6 (pré-incremento)
--contador; // 5 (pré-decremento)

// Diferença pré/pós
let x = 5;
let y = x++; // y = 5, x = 6 (atribui depois incrementa)
let z = ++x; // z = 7, x = 7 (incrementa depois atribui)

// Operadores de atribuição combinados
let num = 10;
num += 5; // num = num + 5 → 15
num -= 3; // num = num - 3 → 12
num *= 2; // num = num * 2 → 24
num /= 4; // num = num / 4 → 6
num %= 4; // num = num % 4 → 2
num **= 3; // num = num ** 3 → 8
```

#### **Operadores Relacionais (Comparação)**

```javascript
// Igualdade frouxa (converte tipos)
console.log(5 == "5"); // true (converte string para número)
console.log(0 == false); // true
console.log(null == undefined); // true

// Igualdade estrita (NÃO converte tipos) - RECOMENDADO
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(null === undefined); // false

// Desigualdade
console.log(5 != "5"); // false (frouxa)
console.log(5 !== "5"); // true (estrita) - RECOMENDADO

// Comparações numéricas
console.log(10 > 5); // true (maior que)
console.log(10 < 5); // false (menor que)
console.log(10 >= 10); // true (maior ou igual)
console.log(5 <= 10); // true (menor ou igual)

// SEMPRE use === e !== para evitar bugs!
```

#### **Operadores Lógicos**

```javascript
// AND (&&) - ambos devem ser verdadeiros
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

let idade = 25;
let temCarteira = true;
let podeDirigir = idade >= 18 && temCarteira; // true

// OR (||) - pelo menos um deve ser verdadeiro
console.log(true || false); // true
console.log(false || false); // false

let fimDeSemana = true;
let feriado = false;
let diaDeDescanso = fimDeSemana || feriado; // true

// NOT (!) - inverte o valor booleano
console.log(!true); // false
console.log(!false); // true
console.log(!!0); // false (dupla negação converte para boolean)

// Short-circuit (curto-circuito)
let resultado1 = false && console.log("não executado"); // false
let resultado2 = true || console.log("não executado"); // true

// Valores padrão com ||
let nome = "" || "Anônimo"; // "Anônimo"
let qtd = 0 || 10; // 10

// Nullish coalescing (??) - ES2020 (melhor que ||)
let valor1 = 0 ?? 10; // 0 (só substitui null/undefined)
let valor2 = null ?? 10; // 10
let valor3 = undefined ?? 10; // 10
```

#### **Operador Ternário (Condicional)**

```javascript
// Sintaxe: condição ? valorSeTrue : valorSeFalse
let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

// Aninhado (evite abusar)
let nota = 85;
let conceito = nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : "D";
console.log(conceito); // "B"
```

#### **Outros Operadores Úteis**

```javascript
// typeof - retorna o tipo
console.log(typeof 42); // "number"
console.log(typeof "texto"); // "string"

// instanceof - verifica instância
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true

// delete - remove propriedade
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

// in - verifica se propriedade existe
let pessoa = { nome: "João", idade: 30 };
console.log("nome" in pessoa); // true
console.log("cidade" in pessoa); // false

// Optional chaining (?.) - ES2020
let usuario = { nome: "Maria" };
console.log(usuario?.endereco?.rua); // undefined (não dá erro)
// console.log(usuario.endereco.rua); // ERRO!
```

---

### Template Literals e Concatenação

#### **Concatenação Tradicional (forma antiga)**

```javascript
let nome = "João";
let idade = 25;

// Usando operador +
let mensagem1 = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(mensagem1);
// "Olá, meu nome é João e tenho 25 anos."

// Problemático com múltiplas linhas
let texto = "Primeira linha\n" +
            "Segunda linha\n" +
            "Terceira linha";
```

#### **Template Literals (forma moderna - ES6)**

Template literals usam **crases** (`) e permitem:
- Interpolação de variáveis com `${}`
- Strings multi-linha
- Expressões dentro das strings

```javascript
let nome = "Maria";
let idade = 30;
let profissao = "Desenvolvedora";

// Interpolação simples
let apresentacao = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(apresentacao);
// "Olá, meu nome é Maria e tenho 30 anos."

// Expressões dentro de ${}
let a = 10;
let b = 20;
console.log(`A soma de ${a} e ${b} é ${a + b}.`);
// "A soma de 10 e 20 é 30."

// Chamadas de função
function dobro(n) {
    return n * 2;
}
console.log(`O dobro de 5 é ${dobro(5)}`);
// "O dobro de 5 é 10"

// Multi-linha (mantém formatação)
let poema = `
    Rosas são vermelhas,
    Violetas são azuis,
    JavaScript é incrível,
    E você também é!
`;
console.log(poema);

// Template literals aninhados
let itens = ["maçã", "banana", "laranja"];
let lista = `
    Frutas disponíveis:
    ${itens.map(item => `- ${item}`).join('\n')}
`;
console.log(lista);
/*
    Frutas disponíveis:
    - maçã
    - banana
    - laranja
*/

// Escape de caracteres especiais
let caminho = `C:\\Users\\nome\\Desktop`; // Barra invertida
let aspas = `Ele disse: "Olá!"`; // Aspas duplas
let template = `Use \${} para interpolação`; // Escape de ${}
```

#### **Comparação: Concatenação vs Template Literals**

```javascript
let produto = "Notebook";
let preco = 2500;
let desconto = 10;

// ❌ Concatenação (verboso, propenso a erros)
let msg1 = "O " + produto + " custa R$ " + preco + " com " + desconto + "% de desconto.";

// ✅ Template Literal (limpo, legível)
let msg2 = `O ${produto} custa R$ ${preco} com ${desconto}% de desconto.`;

console.log(msg1);
console.log(msg2);
// Ambos: "O Notebook custa R$ 2500 com 10% de desconto."
```

#### **Tagged Templates (avançado)**

```javascript
// Função que processa template literal
function destacar(strings, ...valores) {
    return strings.reduce((resultado, str, i) => {
        return resultado + str + (valores[i] ? `**${valores[i]}**` : '');
    }, '');
}

let nome = "Carlos";
let idade = 28;
let resultado = destacar`Nome: ${nome}, Idade: ${idade}`;
console.log(resultado);
// "Nome: **Carlos**, Idade: **28**"
```

---

### Console.log para Debugging

O `console.log()` é a ferramenta mais usada para debugging em JavaScript. O objeto `console` oferece vários métodos úteis:

#### **1. console.log() - Mensagens gerais**

```javascript
// Simples
console.log("Olá, mundo!");

// Múltiplos argumentos
console.log("Nome:", "João", "Idade:", 25);

// Variáveis
let x = 10;
let y = 20;
console.log("x =", x, "y =", y);

// Objetos e arrays
let pessoa = { nome: "Ana", idade: 30 };
let numeros = [1, 2, 3, 4, 5];
console.log(pessoa); // Mostra estrutura do objeto
console.log(numeros); // Mostra elementos do array

// Template literals
let nome = "Maria";
console.log(`Usuário: ${nome}`);
```

#### **2. console.error() - Mensagens de erro**

```javascript
console.error("Erro: arquivo não encontrado!");
console.error("Erro ao processar:", { codigo: 404, mensagem: "Not Found" });
```

#### **3. console.warn() - Avisos**

```javascript
console.warn("Aviso: essa função está obsoleta");
console.warn("Cuidado: valor muito alto", 9999);
```

#### **4. console.info() - Informações**

```javascript
console.info("Info: servidor iniciado na porta 3000");
console.info("Versão:", "1.0.0");
```

#### **5. console.table() - Tabelas**

```javascript
// Array de objetos
let usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "Pedro", idade: 28 }
];
console.table(usuarios);
// Exibe como tabela formatada!

// Array simples
let frutas = ["maçã", "banana", "laranja"];
console.table(frutas);
```

#### **6. console.dir() - Estrutura de objetos**

```javascript
let elemento = { tipo: "div", classe: "container", filhos: ["span", "p"] };
console.dir(elemento); // Mostra propriedades detalhadas
```

#### **7. console.group() - Agrupar mensagens**

```javascript
console.group("Grupo de Usuários");
console.log("Usuário 1: João");
console.log("Usuário 2: Maria");
console.log("Usuário 3: Pedro");
console.groupEnd();

// Grupo colapsado
console.groupCollapsed("Detalhes");
console.log("Informação 1");
console.log("Informação 2");
console.groupEnd();
```

#### **8. console.time() e console.timeEnd() - Medir tempo**

```javascript
console.time("Loop");
for (let i = 0; i < 1000000; i++) {
    // código
}
console.timeEnd("Loop");
// Loop: 5.234ms
```

#### **9. console.count() - Contador**

```javascript
function incrementar() {
    console.count("Chamadas");
}
incrementar(); // Chamadas: 1
incrementar(); // Chamadas: 2
incrementar(); // Chamadas: 3
console.countReset("Chamadas"); // Reset
incrementar(); // Chamadas: 1
```

#### **10. console.assert() - Afirmações**

```javascript
let idade = 15;
console.assert(idade >= 18, "Erro: menor de idade!");
// Mostra erro se condição for false

let valor = 100;
console.assert(valor > 0, "Valor deve ser positivo", valor);
```

#### **11. console.clear() - Limpar console**

```javascript
console.clear(); // Limpa o console
```

#### **Técnicas de Debugging**

```javascript
// 1. Rastrear execução
function calcular(a, b) {
    console.log("Entrada:", { a, b });
    let resultado = a + b;
    console.log("Resultado:", resultado);
    return resultado;
}
calcular(5, 3);

// 2. Inspecionar objetos
let config = {
    api: "https://api.exemplo.com",
    timeout: 5000,
    headers: { "Content-Type": "application/json" }
};
console.log("Config:", config);
console.log("API:", config.api);

// 3. Debugging de arrays
let numeros = [1, 2, 3, 4, 5];
console.log("Array:", numeros);
console.log("Tamanho:", numeros.length);
console.log("Primeiro:", numeros[0]);
console.log("Último:", numeros[numeros.length - 1]);

// 4. Verificar tipos
let valor = "123";
console.log("Valor:", valor);
console.log("Tipo:", typeof valor);
console.log("É número?", typeof valor === "number");

// 5. Template literal com objetos
let usuario = { nome: "Ana", idade: 25 };
console.log(`Usuário: ${JSON.stringify(usuario)}`);

// 6. Breakpoint no código
function processarDados(dados) {
    console.log("Processando:", dados);
    debugger; // Pausa execução se DevTools estiver aberto
    return dados.map(x => x * 2);
}
```

#### **Boas Práticas de Debugging**

```javascript
// ✅ BOM: Mensagens descritivas
console.log("Iniciando processamento de pedido #", pedidoId);
console.log("Usuário autenticado:", usuario.nome);

// ❌ RUIM: Mensagens vagas
console.log("aqui");
console.log("teste");
console.log(x);

// ✅ BOM: Use console apropriado
console.error("Falha ao conectar ao banco de dados");
console.warn("Cache expirado, atualizando...");
console.info("100 registros carregados");

// ✅ BOM: Agrupe logs relacionados
console.group("Processamento do Pedido");
console.log("ID:", pedido.id);
console.log("Cliente:", pedido.cliente);
console.log("Total:", pedido.total);
console.groupEnd();

// ✅ BOM: Remova ou comente logs antes de produção
// console.log("debug:", variavel); // TODO: remover
```

#### **Debugging no Navegador**

```javascript
// DevTools (F12) oferece:
// - Breakpoints: pausar execução em linha específica
// - Watch expressions: monitorar variáveis
// - Call stack: ver sequência de chamadas
// - Network tab: ver requisições HTTP
// - Performance tab: analisar performance
// - Console tab: executar código JavaScript ao vivo

// Exemplo de uso interativo no console:
// 1. Abra DevTools (F12)
// 2. Vá para a aba Console
// 3. Digite e execute comandos:
let x = 10;
let y = 20;
console.log(x + y); // 30

// Acessar variáveis da página
// console.log(document.title);
// console.log(window.location.href);
```

---

## 🎯 Exercícios Práticos

### Exercício 1: Variáveis
```javascript
// TODO: Declare variáveis usando let e const
// 1. Nome completo (constante)
// 2. Idade (pode mudar)
// 3. Cidade (pode mudar)
// 4. País (constante)
```

### Exercício 2: Tipos de Dados
```javascript
// TODO: Crie variáveis de cada tipo
// string, number, boolean, null, undefined, object, array
// Use console.log para verificar o tipo com typeof
```

### Exercício 3: Operadores
```javascript
// TODO: Calcule a média de 3 notas
let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.5;
// Calcule a média e use operador ternário para determinar se passou (>= 7)
```

### Exercício 4: Template Literals
```javascript
// TODO: Crie uma função que recebe nome, idade e profissão
// e retorna uma apresentação usando template literals
```

### Exercício 5: Debugging
```javascript
// TODO: Crie uma função que calcula fatorial
// Use console.log para rastrear cada iteração
function fatorial(n) {
    // seu código aqui
}
```

---

## 📚 Recursos Adicionais

### Documentação Oficial
- **MDN Web Docs:** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- **ECMAScript Specification:** https://tc39.es/ecma262/
- **Node.js Docs:** https://nodejs.org/docs/

### Sites de Aprendizado
- **JavaScript.info:** https://javascript.info/
- **freeCodeCamp:** https://www.freecodecamp.org/
- **Eloquent JavaScript (livro gratuito):** https://eloquentjavascript.net/
- **You Don't Know JS (livros):** https://github.com/getify/You-Dont-Know-JS

### Ferramentas Online
- **JSFiddle:** https://jsfiddle.net/
- **CodePen:** https://codepen.io/
- **Repl.it:** https://replit.com/
- **StackBlitz:** https://stackblitz.com/

### Comunidades
- **Stack Overflow:** https://stackoverflow.com/questions/tagged/javascript
- **Reddit r/javascript:** https://reddit.com/r/javascript
- **Discord - Servidor ProgBR:** Várias comunidades brasileiras

---

## 🎓 Próximos Passos

Após dominar este conteúdo básico, você pode avançar para:

1. **Estruturas de Controle**
   - if/else, switch
   - for, while, do-while
   - break, continue

2. **Funções**
   - Declaração e expressão
   - Arrow functions
   - Callbacks
   - Closures

3. **Manipulação do DOM**
   - Seleção de elementos
   - Eventos
   - Modificação de conteúdo

4. **Programação Assíncrona**
   - Callbacks
   - Promises
   - Async/await

5. **ES6+ Moderno**
   - Destructuring
   - Spread/Rest operators
   - Modules (import/export)
   - Classes

6. **APIs e Fetch**
   - Requisições HTTP
   - JSON
   - REST APIs

---

## 📝 Conclusão

JavaScript evoluiu de uma linguagem simples para scripts de navegador em 1995 para uma das linguagens mais populares e versáteis do mundo. Hoje, é usada em:
- Frontend (React, Vue, Angular)
- Backend (Node.js)
- Mobile (React Native)
- Desktop (Electron)
- IoT, IA, Games e muito mais!

A sintaxe básica que você aprendeu aqui é a fundação para tudo em JavaScript. Pratique muito, experimente os exemplos, e continue aprendendo!

**Lembre-se:**
- Use `let` e `const` (esqueça `var`)
- Prefira `===` sobre `==`
- Use template literals para strings
- `console.log()` é seu melhor amigo no debugging

Boa sorte na sua jornada com JavaScript! 🚀

---

**Criado em:** 2024  
**Última atualização:** Janeiro de 2026  
**Licença:** MIT
