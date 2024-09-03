import promptSync from 'prompt-sync';
const prompt = promptSync();

export const handleQuestion2 = (): void => {
  let text = prompt('Digite um texto para verificar quantas vezes a letra "a" aparece: ').toLowerCase();
  countA(text);
}

const countA = (text: string): void => {
  if (text.includes('a')) {
    let count = 0;
    for (let char of text){
        if (char === 'a') {
            count++;
        }
    }
    console.log(`A letra "a" aparece ${count} vezes no texto.`);
  }
  if (!text.includes('a')){
    console.log('A letra "a" não aparece no texto.');
  }
}