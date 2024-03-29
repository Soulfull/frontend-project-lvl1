import { getUserInputSync, print } from './utils.js';

const greeting = () => {
  print('Welcome to the Brain Games!');
  const userName = getUserInputSync('May I have your name? ');
  print(`Hello, ${userName}!`);
  return userName;
};

export default greeting;
