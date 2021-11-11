import { print, getUserInputSync } from './utils.js';
import greeting from './greeting.js';

const GAME_ROUNDS_LENGTH = 3;

const askQuestion = (question) => print(question);
const printGoodVerdict = () => print('Correct!');
const printWinGame = (name) => print(`Congratulations, ${name}!`);
const printLooseGame = (userAnswer, correctAnswer, name) => print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
const waitUserAnswerSync = () => getUserInputSync('Your answer: ');

const createGame = (gameConditions, makeQuestion) => () => {
  const userName = greeting();
  const startGameRound = (currentRound) => {
    if (currentRound > GAME_ROUNDS_LENGTH) {
      return printWinGame(userName);
    }
    const [question, correctAnswer] = makeQuestion();
    askQuestion(`Question: ${question}`);
    const userAnswer = waitUserAnswerSync();

    if (userAnswer !== correctAnswer) {
      return printLooseGame(userAnswer, correctAnswer, userName);
    }
    printGoodVerdict();
    return startGameRound(currentRound + 1);
  };

  print(gameConditions);
  startGameRound(1);
};

export default createGame;
