import createGame from '../createGame.js';
import { getRandomNumber } from '../utils.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const makeQuestion = () => {
  const questionValue = getRandomNumber();
  const correctAnswer = isEven(questionValue) ? 'yes' : 'no';
  return [questionValue, correctAnswer];
};

export default createGame(gameConditions, makeQuestion);
