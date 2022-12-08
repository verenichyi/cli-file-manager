import { up, cd, ls } from '../domains/nwd/index.js';
import { removeUnnecessarySpaces } from './removeUnnecessarySpaces.js';
import { validateLine } from './validateLine.js';
import { executionErrorMsg } from '../constants.js';
import { getCwdMsg } from './getCwdMsg.js';
import { os } from '../domains/os/index.js';

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
			case 'os':
				const [arg] = args;
				os(arg);
				break;
		}
	} catch (error) {
		if (error instanceof SyntaxError) {
			process.stdout.write(error.message);
		} else {
			process.stdout.write(executionErrorMsg);
		}
	} finally {
		process.stdout.write(getCwdMsg());
	}
};