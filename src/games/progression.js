import createGame from '../createGame.js';
import { getRandomNumInRange, getRandomNumber } from '../utils.js';

const createSequence = (start = 0, len = 10, step = 1) => {
  const result = [];
  let value = start;
  for (let i = 0; i < len; i += 1) {
    result.push(value);
    value += step;
  }

  return result;
};

const extractMember = (sequence) => {
  const index = getRandomNumInRange(0, sequence.length - 1);
  const result = [...sequence];
  const extractedMember = result[index];
  result[index] = '..';
  return [result.join(' '), extractedMember];
};

const gameConditions = 'What number is missing in the progression?';
const makeQuestion = () => {
  const start = getRandomNumber();
  const len = getRandomNumInRange(5, 20);
  const step = getRandomNumInRange(1, 10);
  const sequence = createSequence(start, len, step);
  const [value, correctAnswer] = extractMember(sequence);
  return [value, String(correctAnswer)];
};

export default createGame(gameConditions, makeQuestion);
