#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => 
  Array.from({ length }, (_, i) => start + step * i);

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i++) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 10);
    const step = getRandomInt(1, 10);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = generateProgression(start, step, length);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

playProgressionGame();