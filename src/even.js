import { print, getUserInputSync } from './gameUtils.js';

// constants
const GAME_ROUNDS_LENGTH = 3;

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const isWrongAswer = (num, userAnswer) => {
  if (isEven(num) && userAnswer === 'yes') {
    return false;
  }
  if (!isEven(num) && userAnswer === 'no') {
    return false;
  }
  return true;
};
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const askUserNameSync = () => {
  const input = getUserInputSync('May I have your name? ');
  return input;
};

const askQuestion = () => {
  const number = getRandomNumber();
  print(`Question: ${number}`);
  return [number, getUserInputSync('Your answer: ')];
};

const printWelcome = () => print('Welcome to the Brain Games!');
const printGreeting = (name) => print(`Hello, ${name}!`);
const printGoodVerdict = () => print('Correct!');
const printGameConditions = () => print('Answer "yes" if the number is even, otherwise answer "no".');
const printWinGame = (name) => print(`Congratulations, ${name}`);
const printLooseGame = (userAnswer, correctAnswer, name) => print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);

const startGame = () => {
  printWelcome();
  const userName = askUserNameSync();
  printGreeting(userName);
  printGameConditions();

  const startGameRound = (currentRound) => {
    if (currentRound > GAME_ROUNDS_LENGTH) {
      return printWinGame(userName);
    }
    const [number, answer] = askQuestion();
    if (isWrongAswer(number, answer)) {
      return printLooseGame(answer, getCorrectAnswer(number), userName);
    }
    printGoodVerdict();
    return startGameRound(currentRound + 1);
  };

  startGameRound(1);
};

export default startGame;
