import game from '../game.js';
import { getRandomNumber } from '../gameUtils.js';

const gameConditions = 'What is the result of the expression?';
const getRandomIndex = () => Math.floor(Math.random() / 0.4);
const getRandomOperator = () => (['*', '+', '-'][getRandomIndex()]);
const getRandomExpression = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operator = getRandomOperator();
  return `${operand1} ${operator} ${operand2}`;
};

// eslint-disable-next-line no-eval
const getCorrectAnswer = (expression) => String(eval(expression));
const makeQuestion = () => {
  const expression = getRandomExpression();
  const correctAnswer = getCorrectAnswer(expression);
  return [`Question: ${expression}`, correctAnswer];
};

const calcGame = () => game(gameConditions, makeQuestion);

export default calcGame;
