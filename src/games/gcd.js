import createGame from '../createGame.js';
import { getRandomNumber } from '../utils.js';

const findGreaterDivider = (a, b) => {
  let min = Math.min(a, b);
  while (a % min !== 0 || b % min !== 0) {
    min -= 1;
  }
  return min;
};
const gameConditions = 'Find the greatest common divisor of given numbers.';
const makeQuestion = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const value = `${num1} ${num2}`;
  const correctAnswer = findGreaterDivider(num1, num2);
  return [value, String(correctAnswer)];
};

export default createGame(gameConditions, makeQuestion);
