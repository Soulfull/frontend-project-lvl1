import readlineSync from 'readline-sync';

export const print = (str) => console.log(str);
export const getUserInputSync = (question) => readlineSync.question(question);
export const getRandomNumber = () => Math.round(Math.random() * 100);
