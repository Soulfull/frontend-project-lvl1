import createGame from '../createGame.js';
import { getRandomNumber, getRandomNumInRange } from '../utils.js';

const calcOperations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
};
const gameConditions = 'What is the result of the expression?';
const operators = Object.keys(calcOperations);
const randomIndex = getRandomNumInRange(0, operators.length - 1);
const getRandomOperator = () => operators[randomIndex];
const getRandomExpression = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = getRandomOperator();
  const operation = calcOperations[operator];
  const correctAnswer = String(operation(operand1, operand2));
  const questionValue = `${operand1} ${operator} ${operand2}`;
  return [questionValue, correctAnswer];
};

const makeQuestion = () => {
  const [questionValue, correctAnswer] = getRandomExpression();
  return [questionValue, correctAnswer];
};

export default createGame(gameConditions, makeQuestion);
