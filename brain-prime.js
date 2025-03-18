#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, getRandomNumber } from '../src.index.js'

const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        return true;
    }
};

const playPrimeGame = () => {
    const name = greeting()
    console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

    for (let i = 0; i < 3; i +=1) {
const name = getRandomNumber(1, 100);
console.log(`Question: ${number}`);
const userAnswer = readlineSync.question(`Your answer: `);
const correctAnswer = isPrime(number) ? `yes` : `no`;
 if (userAnswer === correctAnswer){
    console.log (`Correct!`);
       }
else {
    console.log(`'${userAnswer}' is wrong answer;(.Correct answer was' $ {correctAnswer}'.)`);
    console.log(`Let's try again, ${name}!`);
    return
       }
    }
console.log(`congratulations, ${name}!`);
};
playPrimeGame();