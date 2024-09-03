export const handleQuestion3 = (): void => {
  let response = soma()
  return console.log('Ao final o valor de soma será: ' + response)
}

const soma = (): number => {
  let indice = 12
  let somaVar = 0
  let k = 1;

  while (k < indice) {
    k = k + 1;
    somaVar = somaVar + k;
  }
  return somaVar
}