#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import task from '../src/progression.js';

const description = 'What number is missing in the progression?';
gameBody(description, task);
