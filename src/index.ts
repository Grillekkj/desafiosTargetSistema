import promptSync from 'prompt-sync';
const prompt = promptSync();
import { questions } from "./questions/questions-enum";
import {handleQuestion1} from "./questions/question1";
import {handleQuestion2} from "./questions/question2";
import {handleQuestion3} from "./questions/question3";
import {handleQuestion4} from "./questions/question4";
import {handleQuestion5} from "./questions/question5";

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
    handleQuestion2()
    break;
  case 3:
    handleQuestion3()
    break;
  case 4:
    handleQuestion4()
    break;
  case 5:
    handleQuestion5()
    break;
  default:
    console.log('Opção inválida.');
    break;
}