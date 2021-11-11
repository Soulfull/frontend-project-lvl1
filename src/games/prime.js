import createGame from '../createGame.js';
import { getRandomNumInRange } from '../utils.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
const makeQuestion = () => {
  const value = getRandomNumInRange(2, 100);
  const correctAnswer = isPrime(value) ? 'yes' : 'no';
  return [value, correctAnswer];
};

export default createGame(gameConditions, makeQuestion);
