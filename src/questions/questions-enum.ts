export enum QuestionsEnum {
  QUESTION1 = 'Questão 1',
  QUESTION2 = 'Questão 2',
  QUESTION3 = 'Questão 3',
  QUESTION4 = 'Questão 4',
  QUESTION5 = 'Questão 5',
}

export const questions = [
  {
    key: QuestionsEnum.QUESTION1,
    description:
        'Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.',
  },
  {
    key: QuestionsEnum.QUESTION2,
    description:
        'Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.',
  },
  {
    key: QuestionsEnum.QUESTION3,
    description:
        'Observe o trecho de código abaixo:\nint INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);\nAo final do processamento, qual será o valor da variável SOMA?',
  },
  {
    key: QuestionsEnum.QUESTION4,
    description:
        'Descubra a lógica e complete o próximo elemento:\n' +
        '   a) 1, 3, 5, 7, ___\n' +
        '   b) 2, 4, 8, 16, 32, 64, ____\n' +
        '   c) 0, 1, 4, 9, 16, 25, 36, ____\n' +
        '   d) 4, 16, 36, 64, ____\n' +
        '   e) 1, 1, 2, 3, 5, 8, ____\n' +
        '   f) 2,10, 12, 16, 17, 18, 19, ____',
  },
  {
    key: QuestionsEnum.QUESTION5,
    description:
        'Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? ',
  },
];
