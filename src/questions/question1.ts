import promptSync from 'prompt-sync';
const prompt = promptSync();

export const handleQuestion1 = (): void => {
  let limit = parseInt(prompt('Digite um número para verificar se ele está na sequência de fibonacci: '), 10);
    const sequence = fibonacci(limit);
    return console.log('E aqui está a sequência completa até o seu número ' + sequence.toString());
}

const fibonacci = (limit: number): number[] => {
  const sequence: number[] = [0, 1];

  while (true) {
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextValue > limit) {
      break;
    }
    sequence.push(nextValue);
  }

  if (sequence.includes(limit)) {
    console.log(`O número ${limit} aparece na sequência de Fibonacci.`);
  } else {
    console.log(`O número ${limit} não aparece na sequência de Fibonacci.`);
  }

  return sequence;
};