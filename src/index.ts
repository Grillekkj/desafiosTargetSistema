import promptSync from 'prompt-sync';
const prompt = promptSync();
import { questions } from "./questions/questions-enum";
import {handleQuestion1} from "./questions/question1";

console.log('Eu me chamo João, mas todos me chamam de Grille! Essas são as minhas soluções para o desafio de estágio da Target Sistemas');

questions.forEach((question, index) => {
  console.log(`\n${index + 1}. ${question.description}`);
});

const choice = parseInt(prompt('\nEscolha uma questão para visualizar (1-5): '), 10);

switch (choice) {
  case 1:
    handleQuestion1()
    break;
  case 2:
    console.log(`Questao 2`);
    break;
  case 3:
    console.log(`Questao 3`);
    break;
  case 4:
    console.log(`Questao 4`);
    break;
  case 5:
    console.log(`Questao 5`);
    break;
  default:
    console.log('Opção inválida.');
    break;
}