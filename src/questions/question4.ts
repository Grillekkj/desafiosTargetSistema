export const handleQuestion4 = (): void => {
  return console.log('a)' + subQuestion4a() + '\nb)' + subQuestion4b() + '\nc)' + subQuestion4c() + '\nd)' + subQuestion4d() + '\ne)' + subQuestion4e() + '\nf)' + subQuestion4f())
}

const subQuestion4a = (): string => {
  return 'A sequência está aumentando de 2 em 2. O próximo número é 7 + 2 = 9.'
}

const subQuestion4b = (): string => {
  return 'A sequência está aumentando com base no dobro do número anterior. O próximo número é 64 × 2 = 128'
}

const subQuestion4c = (): string => {
  return 'A sequência está aumentando com base nos quadrados dos numeros inteiros. O próximo número é 7² = 49'
}

const subQuestion4d = (): string => {
  return 'A sequência está aumentando com base nos quadrados dos numeros pares. O proximo número é 10² = 100'
}

const subQuestion4e = (): string => {
  return 'A sequência está aumentando com base na sequência de fibonacci. O próximo número é 5 + 8 = 13'
}

const subQuestion4f = (): string => {
  return 'A sequência aumenta e se torna uma constante. O próximo número é 20'
}