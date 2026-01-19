# Exemplos Práticos de JavaScript

Este diretório contém exemplos práticos para cada tópico abordado no tutorial de JavaScript.

## 📁 Arquivos

### 01-variaveis.js
Exemplos sobre variáveis:
- Diferenças entre `var`, `let` e `const`
- Escopo de blocos vs. escopo de função
- Hoisting
- Problemas com `var` em loops
- Objetos com `const`

**Como executar:**
```bash
node exemplos/01-variaveis.js
```

### 02-tipos-de-dados.js
Exemplos sobre tipos de dados:
- String (métodos e propriedades)
- Number (operações especiais, Infinity, NaN)
- Boolean (valores truthy e falsy)
- Null e Undefined
- Object (criação e manipulação)
- Array (operações básicas)
- Verificação de tipos com `typeof` e `Array.isArray()`

**Como executar:**
```bash
node exemplos/02-tipos-de-dados.js
```

### 03-operadores.js
Exemplos sobre operadores:
- Aritméticos (+, -, *, /, %, **)
- Incremento e decremento (++, --)
- Atribuição combinada (+=, -=, *=, /=)
- Relacionais (==, ===, !=, !==, >, <, >=, <=)
- Lógicos (&&, ||, !)
- Ternário (? :)
- Optional chaining (?.)
- Nullish coalescing (??)

**Como executar:**
```bash
node exemplos/03-operadores.js
```

### 04-template-literals.js
Exemplos sobre template literals e concatenação:
- Concatenação tradicional vs. template literals
- Interpolação de variáveis
- Expressões dentro de `${}`
- Strings multi-linha
- Geração de HTML
- Formatação de dados
- Escape de caracteres

**Como executar:**
```bash
node exemplos/04-template-literals.js
```

### 05-console-debugging.js
Exemplos sobre console.log e debugging:
- `console.log()`, `console.info()`, `console.warn()`, `console.error()`
- `console.table()` para visualizar dados tabulares
- `console.dir()` para estrutura de objetos
- `console.group()` para agrupar mensagens
- `console.time()` e `console.timeEnd()` para medir performance
- `console.count()` para contadores
- `console.assert()` para validações
- Técnicas de debugging

**Como executar:**
```bash
node exemplos/05-console-debugging.js
```

## 🚀 Como Executar os Exemplos

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)

### Executar todos os exemplos
```bash
# Execute cada arquivo individualmente
node exemplos/01-variaveis.js
node exemplos/02-tipos-de-dados.js
node exemplos/03-operadores.js
node exemplos/04-template-literals.js
node exemplos/05-console-debugging.js
```

### Executar no navegador
Você também pode executar esses exemplos no navegador:

1. Abra o navegador (Chrome, Firefox, Edge, Safari)
2. Pressione F12 para abrir o DevTools
3. Vá para a aba Console
4. Copie e cole o código de qualquer exemplo
5. Pressione Enter para executar

## 💡 Dicas

- **Modifique os exemplos:** Sinta-se livre para alterar valores, adicionar linhas e experimentar!
- **Use o debugger:** Adicione `debugger;` em qualquer linha para pausar a execução no DevTools
- **Comente/descomente:** Alguns exemplos têm linhas comentadas que causariam erros - descomente para ver o erro
- **Console do navegador:** Alguns recursos como estilos CSS no console funcionam apenas no navegador

## 📚 Estrutura de Aprendizado

Recomendamos estudar os exemplos nesta ordem:

1. **01-variaveis.js** - Base fundamental
2. **02-tipos-de-dados.js** - Conhecer os tipos
3. **03-operadores.js** - Manipular dados
4. **04-template-literals.js** - Trabalhar com strings
5. **05-console-debugging.js** - Depurar código

## 🎯 Exercícios Sugeridos

Depois de estudar os exemplos, tente:

1. Criar suas próprias variáveis e testar diferentes tipos
2. Combinar operadores para criar expressões complexas
3. Gerar HTML dinâmico com template literals
4. Criar funções que usam console.log para debugging
5. Misturar conceitos de diferentes arquivos

## ❓ Precisa de Ajuda?

- Consulte o **tutorial.md** na raiz do projeto para explicações detalhadas
- Use `console.log()` para investigar valores
- Experimente no console do navegador para feedback imediato
- Leia as mensagens de erro com atenção - elas são suas amigas!

---

**Boa prática e bons estudos! 🚀**
