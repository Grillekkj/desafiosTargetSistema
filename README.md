# Desafio para Estágio - targetSistemas

Este repositório contém a solução para o desafio de estágio proposto pela empresa targetSistemas. A aplicação é um pequeno menu interativo no CMD que apresenta todas as respostas para o desafio, tanto as resolvidas por código quanto as resolvidas sem código.

## Estrutura do Repositório

- **`src/`**: Contém o código-fonte TypeScript para as questões resolvidas via código.
  - **`/questions/question1`**: Resolução da questão 1.
  - **`/questions/question2`**: Resolução da questão 2.
  - **`/questions/question3`**: Resolução da questão 3.
- **`index.ts`**: Implementa o menu interativo no CMD que apresenta todas as respostas.

## Instruções de Uso

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Grillekkj/desafiosTargetSistema.git
   cd desafiosTargetSistema
   
2. **Com o node instalado, execute:**
   ```bash
   npm install
3. **Vá ate o diretório `src/`**
   ```bash
   cd src
4. **Execute o programa usando o comando abaixo:**
   ```bash
   npx ts-node index.ts

## Respostas dos Desafios

1. **Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.**
   ```bash
   Caso o valor de input seja 1, a resposta será que o valor está na sequência de fibonacci
   e mostrará a sequência até chegar no 1.
2. **Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.**
   ```bash
   Caso o valor de input seja "banana banana", a resposta será que a letra "a" aparece 6 vezes no texto.
   Caso o input seja "input", a resposta será que a letra "a" não aparece no texto.
3. **Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?**
   ```bash
   O valor final será 77.
4. **Descubra a lógica e complete o próximo elemento:<br>a) 1, 3, 5, 7, ___<br>b) 2, 4, 8, 16, 32, 64, ____<br>c) 0, 1, 4, 9, 16, 25, 36, ____<br>d) 4, 16, 36, 64, ____<br>e) 1, 1, 2, 3, 5, 8, ____<br>f) 2,10, 12, 16, 17, 18, 19, ____**
   ```bash
   a)A sequência está aumentando de 2 em 2. O próximo número é 7 + 2 = 9.
   b)A sequência está aumentando com base no dobro do número anterior. O próximo número é 64 × 2 = 128
   c)A sequência está aumentando com base nos quadrados dos numeros inteiros. O próximo número é 7² = 49
   d)A sequência está aumentando com base nos quadrados dos numeros pares. O proximo número é 10² = 100
   e)A sequência está aumentando com base na sequência de fibonacci. O próximo número é 5 + 8 = 13
   f)A sequência aumenta e se torna uma constante. O próximo número é 20
5. **Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?**
   ```bash
   Primeiro, eu nomearia os interruptores da esquerda para a direita como A, B e C.
   Deixaria o interruptor A ligado por algum tempo até a lâmpada esquentar e, em seguida, o desligaria.
   Depois, ligaria o interruptor B. Iria até uma das salas e verificaria a lâmpada.
   Se ela estiver quente e desligada, o interruptor A controla essa lâmpada;
   se estiver ligada, o interruptor B é o responsável;
   se estiver desligada e fria, o interruptor C controla a lâmpada.
   Assim, eu utilizaria a última ida às salas para verificar a segunda lâmpada.
   Por método de eliminação, concluir qual interruptor controla a lâmpada restante.
