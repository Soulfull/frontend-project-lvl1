import game from '../game.js';
import { getRandomNumber } from '../gameUtils.js';

const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};

const gameConditions = 'What is the result of the expression?';
const getRandomIndex = () => Math.floor(Math.random() / 0.4);
const getRandomOperator = () => (Object.keys(operations)[getRandomIndex()]);
const getRandomExpression = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = getRandomOperator();
  const operation = operations[operator];
  return [`${operand1} ${operator} ${operand2}`, String(operation(operand1, operand2))];
};

// eslint-disable-next-line no-eval
const makeQuestion = () => {
  const [expression, correctAnswer] = getRandomExpression();
  return [expression, correctAnswer];
};

const calcGame = () => game(gameConditions, makeQuestion);

export default calcGame;
