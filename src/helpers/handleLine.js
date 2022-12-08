import { up } from '../domains/nwd/up.js';
import { cd } from '../domains/nwd/cd.js';
import { ls } from '../domains/nwd/ls.js';
import { removeUnnecessarySpaces } from './removeUnnecessarySpaces.js';
import { validateLine } from './validateLine.js';
import { executionErrorMsg } from '../constants.js';

export const handleLine = (line) => {
	try {
		const properLine = removeUnnecessarySpaces(line);
		validateLine(properLine);
		const [command, ...args] = properLine.split(' ');

		switch (command) {
			case 'up':
				up();
				break;
			case 'cd':
				const [path] = args;
				cd(path);
				break;
			case 'ls':
				ls();
				break;
		}
	} catch (error) {
		if (error instanceof SyntaxError) {
			process.stdout.write(error.message);
		} else {
			process.stdout.write(executionErrorMsg);
		}
	}
};