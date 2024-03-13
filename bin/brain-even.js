#!/usr/bin/env node
// import readlineSync from 'readline-sync';
// import greeting from '../src/cli.js';
import gameBody from '../src/gameBody.js';

// const userName = greeting();
import task from '../src/even.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
gameBody(description, task);
