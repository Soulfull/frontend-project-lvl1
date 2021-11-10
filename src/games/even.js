import createGame from '../createGame.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const makeQuestion = () => {
  const value = getRandomNumber();
  const correctAnswer = getCorrectAnswer(value);
  return [value, correctAnswer];
};

export default createGame(gameConditions, makeQuestion);
