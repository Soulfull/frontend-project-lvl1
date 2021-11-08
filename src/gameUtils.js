import readlineSync from 'readline-sync';

export const print = (str) => console.log(str);
export const getUserInputSync = (question) => readlineSync.question(question);
