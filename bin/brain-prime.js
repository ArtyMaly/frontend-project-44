#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import task from '../src/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameBody(description, task);
